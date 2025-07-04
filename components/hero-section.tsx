"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-100 dark:bg-green-900/20 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-100 dark:bg-green-900/20 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 w-full relative z-10">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Name and Title */}
          <div className="space-y-3 sm:space-y-4">
            <ScrollReveal direction="fade" delay={200}>
              <div className="text-base sm:text-lg text-muted-foreground">👋 Hi there!</div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-green-600 to-black bg-clip-text text-transparent leading-tight transition-all duration-1000 ${isLoaded ? "animate-in slide-in-from-bottom-4" : ""}`}
              >
                I'm Rahul Chirra
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={600}>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground">Trend Trade Analyst</h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={800}>
              <p className="text-base sm:text-lg md:text-xl max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-muted-foreground leading-relaxed px-2">
                Specializing in forex trading indicators and technical analysis to identify profitable market
                opportunities.
              </p>
            </ScrollReveal>
          </div>

          {/* CTA Buttons */}
          <ScrollReveal direction="up" delay={1000}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Button
                size="lg"
                onClick={() => scrollToSection("about")}
                className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 w-full sm:w-auto transform hover:scale-105 transition-all duration-300"
              >
                About Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto transform hover:scale-105 transition-all duration-300"
              >
                View Projects
              </Button>
            </div>
          </ScrollReveal>

          {/* Social Links */}
          <ScrollReveal direction="up" delay={1200}>
            <div className="flex justify-center space-x-4 sm:space-x-6 pt-2">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-green-600 h-10 w-10 sm:h-12 sm:w-12 transform hover:scale-110 transition-all duration-300"
                asChild
              >
                <a href="https://github.com/rahulchirra" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-green-600 h-10 w-10 sm:h-12 sm:w-12 transform hover:scale-110 transition-all duration-300"
                asChild
              >
                <a href="https://www.linkedin.com/in/rahul-c-457657225/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-green-600 h-10 w-10 sm:h-12 sm:w-12 transform hover:scale-110 transition-all duration-300"
                asChild
              >
                <a href="https://x.com/chirra_rah17995" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
