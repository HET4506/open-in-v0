"use client"

import { AnimatedBackground } from "@/src/components/ui/animated-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { ArrowLeft, MessageCircle, Bot, Send, Zap } from "lucide-react"

const ChatbotPage = () => {
  const router = useRouter()

  const sampleMessages = [
    { type: "bot", message: "Hello! I'm your hydrogen energy assistant. How can I help you today?" },
    { type: "user", message: "What are the benefits of green hydrogen?" },
    {
      type: "bot",
      message:
        "Green hydrogen offers several key benefits: zero carbon emissions when produced from renewable energy, high energy density, and versatility for industrial applications.",
    },
  ]

  return (
    <div className="chatbot-theme">
      <AnimatedBackground className="min-h-screen">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <Button
              variant="ghost"
              onClick={() => router.push("/hydrogen")}
              className="text-purple-200 hover:text-purple-100 hover:bg-purple-900/20 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-light tracking-wide text-purple-100 mb-6 drop-shadow-lg">
              AI Assistant
            </h1>
            <p className="text-xl md:text-2xl text-purple-200/80 max-w-4xl mx-auto leading-relaxed">
              Get instant answers about hydrogen technology and green energy solutions
            </p>
          </div>

          {/* Chat Interface */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-purple-900/30 backdrop-blur-md border-purple-400/20 h-96 md:h-[500px] flex flex-col">
              <CardHeader className="border-b border-purple-400/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-purple-400/20">
                    <Bot className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-purple-100">Hydrogen AI Assistant</CardTitle>
                    <CardDescription className="text-purple-200/60">Online and ready to help</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 p-6 overflow-y-auto">
                <div className="space-y-4">
                  {sampleMessages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-xs md:max-w-md p-3 rounded-lg ${
                          msg.type === "user" ? "bg-purple-600/40 text-purple-100" : "bg-purple-800/40 text-purple-200"
                        }`}
                      >
                        {msg.message}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              <div className="p-4 border-t border-purple-400/20">
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask about hydrogen technology..."
                    className="flex-1 bg-purple-800/30 border-purple-400/30 text-purple-100 placeholder:text-purple-300/60"
                  />
                  <Button className="bg-purple-600/40 border-purple-400/40 text-purple-100 hover:bg-purple-600 hover:text-white">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-purple-900/30 backdrop-blur-md border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-purple-400/10 text-purple-400 group-hover:bg-purple-400/20 transition-colors">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-purple-100">Instant Responses</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-purple-200/70 text-center leading-relaxed">
                  Get immediate answers to your hydrogen technology questions
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/30 backdrop-blur-md border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-purple-400/10 text-purple-400 group-hover:bg-purple-400/20 transition-colors">
                  <Zap className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-purple-100">Smart Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-purple-200/70 text-center leading-relaxed">
                  AI learns from conversations to provide better assistance
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/30 backdrop-blur-md border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-purple-400/10 text-purple-400 group-hover:bg-purple-400/20 transition-colors">
                  <Bot className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-purple-100">24/7 Available</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-purple-200/70 text-center leading-relaxed">
                  Always online to help with your hydrogen energy queries
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="text-center">
            <Card className="bg-purple-900/20 backdrop-blur-md border-purple-400/30 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl text-purple-100">Quick Questions</CardTitle>
                <CardDescription className="text-lg text-purple-200/70">
                  Start with these common hydrogen technology topics
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="bg-purple-600/30 border-purple-400/40 text-purple-100 hover:bg-purple-600 hover:text-white">
                  Production Methods
                </Button>
                <Button className="bg-purple-600/30 border-purple-400/40 text-purple-100 hover:bg-purple-600 hover:text-white">
                  Storage Solutions
                </Button>
                <Button className="bg-purple-600/30 border-purple-400/40 text-purple-100 hover:bg-purple-600 hover:text-white">
                  Transportation
                </Button>
                <Button className="bg-purple-600/30 border-purple-400/40 text-purple-100 hover:bg-purple-600 hover:text-white">
                  Applications
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedBackground>

      <style>{`
        .chatbot-theme {
          --background: var(--chatbot-bg);
          --foreground: 270 100% 85%;
          --primary: var(--chatbot-primary);
          --primary-glow: var(--chatbot-primary-glow);
          --card: var(--chatbot-card);
          --accent: var(--chatbot-accent);
          --gradient-hero: linear-gradient(135deg, hsl(var(--chatbot-bg)), hsl(260 40% 15%), hsl(260 30% 10%));
        }
        .chatbot-theme .atmospheric-bg {
          background: var(--gradient-hero);
        }
        .chatbot-theme .atmospheric-bg::before {
          background: radial-gradient(circle at 20% 50%, hsl(var(--chatbot-primary) / 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, hsl(var(--chatbot-primary-glow) / 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, hsl(var(--chatbot-accent) / 0.05) 0%, transparent 50%);
        }
        .chatbot-theme .particle {
          background: hsl(var(--chatbot-primary-glow));
        }
      `}</style>
    </div>
  )
}

export default ChatbotPage
