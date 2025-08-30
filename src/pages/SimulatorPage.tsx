"use client"

import { AnimatedBackground } from "@/src/components/ui/animated-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { useRouter } from "next/navigation"
import { ArrowLeft, Activity, Settings, BarChart3, Play, Pause } from "lucide-react"

const SimulatorPage = () => {
  const router = useRouter()

  return (
    <div className="simulator-theme">
      <AnimatedBackground className="min-h-screen">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <Button
              variant="ghost"
              onClick={() => router.push("/hydrogen")}
              className="text-orange-200 hover:text-orange-100 hover:bg-orange-900/20 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-light tracking-wide text-orange-100 mb-6 drop-shadow-lg">
              Energy Simulator
            </h1>
            <p className="text-xl md:text-2xl text-orange-200/80 max-w-4xl mx-auto leading-relaxed">
              Simulate hydrogen production and energy efficiency scenarios in real-time
            </p>
          </div>

          {/* Simulator Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Control Panel */}
            <Card className="bg-orange-900/30 backdrop-blur-md border-orange-400/20 hover:border-orange-400/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-100 flex items-center gap-2">
                  <Settings className="w-6 h-6" />
                  Simulation Controls
                </CardTitle>
                <CardDescription className="text-orange-200/70">
                  Adjust parameters to see real-time changes in hydrogen production
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-orange-200 text-sm font-medium mb-2 block">Energy Input (MW)</label>
                  <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
                  <div className="flex justify-between text-xs text-orange-300/60 mt-1">
                    <span>0</span>
                    <span>100</span>
                  </div>
                </div>

                <div>
                  <label className="text-orange-200 text-sm font-medium mb-2 block">Efficiency Rate (%)</label>
                  <Slider defaultValue={[75]} max={100} step={1} className="w-full" />
                  <div className="flex justify-between text-xs text-orange-300/60 mt-1">
                    <span>0</span>
                    <span>100</span>
                  </div>
                </div>

                <div>
                  <label className="text-orange-200 text-sm font-medium mb-2 block">Temperature (°C)</label>
                  <Slider defaultValue={[80]} max={150} step={5} className="w-full" />
                  <div className="flex justify-between text-xs text-orange-300/60 mt-1">
                    <span>0</span>
                    <span>150</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button className="flex-1 bg-orange-600/40 border-orange-400/40 text-orange-100 hover:bg-orange-600 hover:text-white">
                    <Play className="w-4 h-4 mr-2" />
                    Start Simulation
                  </Button>
                  <Button className="flex-1 bg-orange-600/40 border-orange-400/40 text-orange-100 hover:bg-orange-600 hover:text-white">
                    <Pause className="w-4 h-4 mr-2" />
                    Pause
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Visualization Panel */}
            <Card className="bg-orange-900/30 backdrop-blur-md border-orange-400/20 hover:border-orange-400/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-100 flex items-center gap-2">
                  <BarChart3 className="w-6 h-6" />
                  Real-time Data
                </CardTitle>
                <CardDescription className="text-orange-200/70">
                  Live visualization of hydrogen production metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-orange-800/40 to-orange-700/20 rounded-lg flex items-center justify-center border border-orange-400/20">
                  <div className="text-center">
                    <Activity className="w-16 h-16 text-orange-400 mx-auto mb-4 opacity-60" />
                    <h3 className="text-xl font-semibold text-orange-100 mb-2">Live Chart</h3>
                    <p className="text-orange-200/60">Real-time data visualization</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Metrics Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="bg-orange-900/30 backdrop-blur-md border-orange-400/20 hover:border-orange-400/40 transition-all duration-300 hover:scale-105 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">45.8</div>
                <div className="text-orange-200/70 text-sm">kg/h H₂ Production</div>
              </CardContent>
            </Card>

            <Card className="bg-orange-900/30 backdrop-blur-md border-orange-400/20 hover:border-orange-400/40 transition-all duration-300 hover:scale-105 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">78%</div>
                <div className="text-orange-200/70 text-sm">Current Efficiency</div>
              </CardContent>
            </Card>

            <Card className="bg-orange-900/30 backdrop-blur-md border-orange-400/20 hover:border-orange-400/40 transition-all duration-300 hover:scale-105 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">65°C</div>
                <div className="text-orange-200/70 text-sm">Operating Temp</div>
              </CardContent>
            </Card>

            <Card className="bg-orange-900/30 backdrop-blur-md border-orange-400/20 hover:border-orange-400/40 transition-all duration-300 hover:scale-105 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">92%</div>
                <div className="text-orange-200/70 text-sm">System Health</div>
              </CardContent>
            </Card>
          </div>

          {/* Simulation Scenarios */}
          <div className="text-center">
            <Card className="bg-orange-900/20 backdrop-blur-md border-orange-400/30 max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl text-orange-100">Simulation Scenarios</CardTitle>
                <CardDescription className="text-lg text-orange-200/70">
                  Test different production scenarios and optimize efficiency
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="bg-orange-600/30 border-orange-400/40 text-orange-100 hover:bg-orange-600 hover:text-white p-6 h-auto flex-col">
                  <div className="font-semibold mb-1">Peak Production</div>
                  <div className="text-sm opacity-70">Maximum output scenario</div>
                </Button>
                <Button className="bg-orange-600/30 border-orange-400/40 text-orange-100 hover:bg-orange-600 hover:text-white p-6 h-auto flex-col">
                  <div className="font-semibold mb-1">Eco Mode</div>
                  <div className="text-sm opacity-70">Energy-efficient operation</div>
                </Button>
                <Button className="bg-orange-600/30 border-orange-400/40 text-orange-100 hover:bg-orange-600 hover:text-white p-6 h-auto flex-col">
                  <div className="font-semibold mb-1">Custom Setup</div>
                  <div className="text-sm opacity-70">User-defined parameters</div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedBackground>

      <style>{`
        .simulator-theme {
          --background: var(--simulator-bg);
          --foreground: 35 100% 85%;
          --primary: var(--simulator-primary);
          --primary-glow: var(--simulator-primary-glow);
          --card: var(--simulator-card);
          --accent: var(--simulator-accent);
          --gradient-hero: linear-gradient(135deg, hsl(var(--simulator-bg)), hsl(25 70% 15%), hsl(25 60% 10%));
        }
        .simulator-theme .atmospheric-bg {
          background: var(--gradient-hero);
        }
        .simulator-theme .atmospheric-bg::before {
          background: radial-gradient(circle at 20% 50%, hsl(var(--simulator-primary) / 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, hsl(var(--simulator-primary-glow) / 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, hsl(var(--simulator-accent) / 0.05) 0%, transparent 50%);
        }
        .simulator-theme .particle {
          background: hsl(var(--simulator-primary-glow));
        }
      `}</style>
    </div>
  )
}

export default SimulatorPage
