"use client"

import { AnimatedBackground } from "@/src/components/ui/animated-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { ArrowLeft, BookOpen, FileText, Video, Download, Search, Filter } from "lucide-react"

const ContentPage = () => {
  const router = useRouter()

  const contentCategories = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Research Papers",
      count: "150+ documents",
      description: "Latest scientific publications and research findings",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Tutorials",
      count: "25+ videos",
      description: "Educational content and technology demonstrations",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Case Studies",
      count: "40+ studies",
      description: "Real-world implementation examples and success stories",
    },
  ]

  const featuredContent = [
    {
      type: "Paper",
      title: "Green Hydrogen Production: Electrolysis Efficiency Advances",
      author: "Dr. Sarah Chen",
      date: "March 2024",
      summary:
        "Comprehensive analysis of next-generation electrolysis technologies and their impact on green hydrogen production efficiency.",
    },
    {
      type: "Video",
      title: "Hydrogen Fuel Cell Technology Explained",
      author: "HydrogenTech Institute",
      date: "February 2024",
      summary: "Visual explanation of fuel cell operation principles and their applications in various industries.",
    },
    {
      type: "Study",
      title: "Industrial Hydrogen Adoption in Steel Manufacturing",
      author: "Global Steel Alliance",
      date: "January 2024",
      summary: "Case study examining the transition to hydrogen-based steel production and its environmental benefits.",
    },
  ]

  return (
    <div className="content-theme">
      <AnimatedBackground className="min-h-screen">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <Button
              variant="ghost"
              onClick={() => router.push("/hydrogen")}
              className="text-teal-200 hover:text-teal-100 hover:bg-teal-900/20 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-light tracking-wide text-teal-100 mb-6 drop-shadow-lg">
              Knowledge Center
            </h1>
            <p className="text-xl md:text-2xl text-teal-200/80 max-w-4xl mx-auto leading-relaxed">
              Comprehensive resources and information about green hydrogen technology and applications
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-16">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search knowledge base..."
                className="w-full pl-10 pr-4 py-3 bg-teal-900/30 border border-teal-400/30 rounded-lg text-teal-100 placeholder:text-teal-300/60 focus:border-teal-400/60 focus:outline-none"
              />
            </div>
            <Button className="bg-teal-600/40 border-teal-400/40 text-teal-100 hover:bg-teal-600 hover:text-white px-6">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Content Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contentCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-teal-900/30 backdrop-blur-md border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 hover:scale-105 group cursor-pointer"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-teal-400/10 text-teal-400 group-hover:bg-teal-400/20 transition-colors">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl text-teal-100">{category.title}</CardTitle>
                  <CardDescription className="text-teal-300/70 font-medium">{category.count}</CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-teal-200/70 text-center leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Content */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-teal-100 mb-8 text-center">Featured Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredContent.map((content, index) => (
                <Card
                  key={index}
                  className="bg-teal-900/30 backdrop-blur-md border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 hover:scale-105 group cursor-pointer"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-teal-600/30 text-teal-200 text-xs rounded">{content.type}</span>
                      <Button size="sm" variant="ghost" className="text-teal-400 hover:text-teal-300">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                    <CardTitle className="text-lg text-teal-100 leading-tight">{content.title}</CardTitle>
                    <CardDescription className="text-teal-300/70">
                      By {content.author} • {content.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-teal-200/70 text-sm leading-relaxed">{content.summary}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Access */}
          <div className="text-center">
            <Card className="bg-teal-900/20 backdrop-blur-md border-teal-400/30 max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl text-teal-100">Quick Access</CardTitle>
                <CardDescription className="text-lg text-teal-200/70">
                  Jump to specific topics and resources
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button className="bg-teal-600/30 border-teal-400/40 text-teal-100 hover:bg-teal-600 hover:text-white h-auto py-4 flex-col">
                  <div className="font-semibold">Basics</div>
                  <div className="text-xs opacity-70">Introduction</div>
                </Button>
                <Button className="bg-teal-600/30 border-teal-400/40 text-teal-100 hover:bg-teal-600 hover:text-white h-auto py-4 flex-col">
                  <div className="font-semibold">Production</div>
                  <div className="text-xs opacity-70">Methods</div>
                </Button>
                <Button className="bg-teal-600/30 border-teal-400/40 text-teal-100 hover:bg-teal-600 hover:text-white h-auto py-4 flex-col">
                  <div className="font-semibold">Storage</div>
                  <div className="text-xs opacity-70">Solutions</div>
                </Button>
                <Button className="bg-teal-600/30 border-teal-400/40 text-teal-100 hover:bg-teal-600 hover:text-white h-auto py-4 flex-col">
                  <div className="font-semibold">Applications</div>
                  <div className="text-xs opacity-70">Use Cases</div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedBackground>

      <style>{`
        .content-theme {
          --background: var(--content-bg);
          --foreground: 175 100% 85%;
          --primary: var(--content-primary);
          --primary-glow: var(--content-primary-glow);
          --card: var(--content-card);
          --accent: var(--content-accent);
          --gradient-hero: linear-gradient(135deg, hsl(var(--content-bg)), hsl(185 50% 15%), hsl(185 40% 10%));
        }
        .content-theme .atmospheric-bg {
          background: var(--gradient-hero);
        }
        .content-theme .atmospheric-bg::before {
          background: radial-gradient(circle at 20% 50%, hsl(var(--content-primary) / 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, hsl(var(--content-primary-glow) / 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, hsl(var(--content-accent) / 0.05) 0%, transparent 50%);
        }
        .content-theme .particle {
          background: hsl(var(--content-primary-glow));
        }
      `}</style>
    </div>
  )
}

export default ContentPage
