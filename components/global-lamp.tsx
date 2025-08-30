"use client"


import { useEffect, useRef, useCallback } from "react"


interface LampState {
  x: number
  y: number
  targetX: number
  targetY: number
  velocityX: number
  velocityY: number
  isIdle: boolean
  lastMoveTime: number
}


export function GlobalLamp() {
  const rafRef = useRef<number>(0)
  const stateRef = useRef<LampState>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    velocityX: 0,
    velocityY: 0,
    isIdle: true,
    lastMoveTime: 0
  })
  const mountedRef = useRef(false)


  const setLampPosition = useCallback((x: number, y: number) => {
    if (!mountedRef.current) return
    
    // Convert pixel coordinates to percentages for CSS
    const xPercent = (x / window.innerWidth) * 100
    const yPercent = (y / window.innerHeight) * 100
    
    document.documentElement.style.setProperty("--lamp-x", `${xPercent}%`)
    document.documentElement.style.setProperty("--lamp-y", `${yPercent}%`)
    
    // Debug log to verify CSS variables are being set
    console.log('Setting lamp position:', `${xPercent.toFixed(1)}%`, `${yPercent.toFixed(1)}%`)
  }, [])


  const updateLampRadius = useCallback(() => {
    if (!mountedRef.current) return
    const vw = window.innerWidth
    const vh = window.innerHeight
    const baseRadius = Math.min(vw, vh) * 0.2
    const radius = Math.max(160, Math.min(baseRadius, 300))
    document.documentElement.style.setProperty("--lamp-radius", `${Math.round(radius)}px`)
  }, [])


  const setTarget = useCallback((x: number, y: number) => {
    const state = stateRef.current
    state.targetX = x
    state.targetY = y
    state.lastMoveTime = performance.now()
    
    // Initialize position on first target
    if (state.x === 0 && state.y === 0) {
      state.x = x
      state.y = y
    }
  }, [])


  const generateIdleTarget = useCallback(() => {
    const now = performance.now() / 1000
    const cx = window.innerWidth * 0.5
    const cy = window.innerHeight * 0.4
    const radiusX = Math.min(window.innerWidth, window.innerHeight) * 0.12
    const radiusY = radiusX * 0.6
    
    // Lissajous curve with different frequencies for organic motion
    const x = cx + radiusX * Math.cos(now * 0.3) * Math.sin(now * 0.17)
    const y = cy + radiusY * Math.sin(now * 0.25) * Math.cos(now * 0.13)
    
    return { x, y }
  }, [])


  const animate = useCallback(() => {
    if (!mountedRef.current) return


    const state = stateRef.current
    const now = performance.now()
    
    // Check if idle (no movement for 1.5 seconds)
    state.isIdle = (now - state.lastMoveTime) > 1500


    // Set target based on idle state
    if (state.isIdle) {
      const idleTarget = generateIdleTarget()
      state.targetX = idleTarget.x
      state.targetY = idleTarget.y
    }


    // Physics-based smooth movement with momentum
    const dampening = state.isIdle ? 0.08 : 0.15
    const maxVelocity = state.isIdle ? 2 : 8
    
    // Calculate forces toward target
    const forceX = (state.targetX - state.x) * dampening
    const forceY = (state.targetY - state.y) * dampening
    
    // Update velocity with forces and apply dampening
    state.velocityX = (state.velocityX + forceX) * 0.92
    state.velocityY = (state.velocityY + forceY) * 0.92
    
    // Clamp velocity
    const speed = Math.sqrt(state.velocityX ** 2 + state.velocityY ** 2)
    if (speed > maxVelocity) {
      state.velocityX = (state.velocityX / speed) * maxVelocity
      state.velocityY = (state.velocityY / speed) * maxVelocity
    }
    
    // Update position
    state.x += state.velocityX
    state.y += state.velocityY
    
    // Apply position with sub-pixel precision
    setLampPosition(state.x, state.y)
    
    rafRef.current = requestAnimationFrame(animate)
  }, [setLampPosition, generateIdleTarget])


  const handlePointerMove = useCallback((e: MouseEvent | TouchEvent) => {
    let clientX: number, clientY: number
    
    if (e instanceof MouseEvent) {
      clientX = e.clientX
      clientY = e.clientY
    } else {
      const touch = e.touches[0]
      if (!touch) return
      clientX = touch.clientX
      clientY = touch.clientY
    }
    
    setTarget(clientX, clientY)
    stateRef.current.isIdle = false
    
    // Debug log to verify mouse tracking
    console.log('Mouse position:', clientX, clientY)
  }, [setTarget])


  const handleMouseMove = useCallback((e: MouseEvent) => handlePointerMove(e), [handlePointerMove])
  const handleTouchMove = useCallback((e: TouchEvent) => handlePointerMove(e), [handlePointerMove])


  useEffect(() => {
    if (typeof window === 'undefined') return
    
    mountedRef.current = true
    
    // Initialize lamp system
    updateLampRadius()
    setTarget(window.innerWidth * 0.5, window.innerHeight * 0.4)
    
    // Start animation loop
    rafRef.current = requestAnimationFrame(animate)
    
    // Add event listeners with debug
    console.log('Adding mouse event listeners')
    document.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.addEventListener("touchmove", handleTouchMove, { passive: true })
    window.addEventListener("resize", updateLampRadius, { passive: true })
    
    return () => {
      mountedRef.current = false
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("resize", updateLampRadius)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [animate, handleMouseMove, handleTouchMove, updateLampRadius, setTarget])


  return null
}
