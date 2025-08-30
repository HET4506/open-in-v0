"use client"

import { AnimatedBackground } from "@/src/components/ui/animated-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { ArrowLeft, Map, Navigation, Globe, Target } from "lucide-react"

const MappingPage = () => {
  const router = useRouter()

  return (
    <div className="mapping-theme">
      <AnimatedBackground className="min-h-screen">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <Button
              variant="ghost"
              onClick={() => router.push("/hydrogen")}
              className="text-blue-200 hover:text-blue-100 hover:bg-blue-900/20 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-light tracking-wide text-blue-100 mb-6 drop-shadow-lg">
              Interactive Mapping
            </h1>
            <p className="text-xl md:text-2xl text-blue-200/80 max-w-4xl mx-auto leading-relaxed">
              Explore hydrogen production facilities and distribution networks worldwide
            </p>
          </div>

          {/* Map Container */}
          <div className="relative mb-16">
            <Card className="bg-blue-900/30 backdrop-blur-md border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
              <CardContent className="p-0">
                <div className="h-96 md:h-[500px] bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-lg flex items-center justify-center border border-blue-400/20">
                  <div className="text-center">
                    <Map className="w-24 h-24 text-blue-400 mx-auto mb-4 opacity-60" />
                    <h3 className="text-2xl font-semibold text-blue-100 mb-2">Interactive Map Component</h3>
                    <p className="text-blue-200/60">Map integration will be placed here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-blue-900/30 backdrop-blur-md border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-blue-400/10 text-blue-400 group-hover:bg-blue-400/20 transition-colors">
                  <Navigation className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-blue-100">Real-time Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-200/70 text-center leading-relaxed">
                  Navigate to hydrogen stations and facilities with live traffic updates
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-blue-900/30 backdrop-blur-md border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-blue-400/10 text-blue-400 group-hover:bg-blue-400/20 transition-colors">
                  <Globe className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-blue-100">Global Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-200/70 text-center leading-relaxed">
                  Comprehensive mapping of hydrogen infrastructure across continents
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-blue-900/30 backdrop-blur-md border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-blue-400/10 text-blue-400 group-hover:bg-blue-400/20 transition-colors">
                  <Target className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-blue-100">Location Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-200/70 text-center leading-relaxed">
                  Find the nearest hydrogen facilities based on your current location
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Map Controls */}
          <div className="text-center">
            <Card className="bg-blue-900/20 backdrop-blur-md border-blue-400/30 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl text-blue-100">Map Controls</CardTitle>
                <CardDescription className="text-lg text-blue-200/70">
                  Customize your mapping experience with advanced filters and layers
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-blue-600/30 border-blue-400/40 text-blue-100 hover:bg-blue-600 hover:text-white">
                  Production Sites
                </Button>
                <Button className="bg-blue-600/30 border-blue-400/40 text-blue-100 hover:bg-blue-600 hover:text-white">
                  Distribution Network
                </Button>
                <Button className="bg-blue-600/30 border-blue-400/40 text-blue-100 hover:bg-blue-600 hover:text-white">
                  Refueling Stations
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedBackground>

      <style>{`
        .mapping-theme {
          --background: var(--mapping-bg);
          --foreground: 199 100% 85%;
          --primary: var(--mapping-primary);
          --primary-glow: var(--mapping-primary-glow);
          --card: var(--mapping-card);
          --accent: var(--mapping-accent);
          --gradient-hero: linear-gradient(135deg, hsl(var(--mapping-bg)), hsl(210 85% 15%), hsl(210 75% 10%));
        }
        .mapping-theme .atmospheric-bg {
          background: var(--gradient-hero);
        }
        .mapping-theme .atmospheric-bg::before {
          background: radial-gradient(circle at 20% 50%, hsl(var(--mapping-primary) / 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, hsl(var(--mapping-primary-glow) / 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, hsl(var(--mapping-accent) / 0.05) 0%, transparent 50%);
        }
        .mapping-theme .particle {
          background: hsl(var(--mapping-primary-glow));
        }
      `}</style>
    </div>
  )
}

export default MappingPage
