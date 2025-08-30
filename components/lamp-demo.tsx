"use client"
import { motion } from "motion/react"


export default function LampDemo() {
  return (
    <div className="relative bg-background min-h-screen">
      <div className="relative w-full min-h-[80vh]">
        {/* Title: center -> top-center-mid with lamp-reflecting text */}
        <motion.h1
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: "-24vh" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.08 }}
          className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 lamp-text text-center text-4xl font-semibold tracking-tight md:text-7xl text-green-500"
        >
          HYDROSPHERE
        </motion.h1>


        {/* Button: glassmorphic + floating; stays below title via z-10 */}
        <motion.button
          type="button"
          aria-label="Submit"
          initial={{ opacity: 0, y: 0, scale: 0.98 }}
          animate={{ opacity: 1, y: "18vh", scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.24 }}
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 glass-btn glass-float px-6 py-2 text-sm text-[#086e34]"
        >
          Submit
        </motion.button>
      </div>
    </div>
  )
}
