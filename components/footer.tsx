import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Footer() {
  return (
    <footer className="bg-background border-t py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 sm:space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-black bg-clip-text text-transparent">
                Rahul Chirra
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2 max-w-xs sm:max-w-none">
                Trend Trade Analyst leveraging technical analysis to drive trading decisions.
              </p>
            </div>

            <div className="flex space-x-3 sm:space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-green-600 h-9 w-9 sm:h-10 sm:w-10 transform hover:scale-110 transition-all duration-300"
                asChild
              >
                <a href="https://github.com/rahulchirra" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-green-600 h-9 w-9 sm:h-10 sm:w-10 transform hover:scale-110 transition-all duration-300"
                asChild
              >
                <a href="https://www.linkedin.com/in/rahul-c-457657225/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-green-600 h-9 w-9 sm:h-10 sm:w-10 transform hover:scale-110 transition-all duration-300"
                asChild
              >
                <a href="https://x.com/chirra_rah17995" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="fade" delay={200}>
          <div className="border-t mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Rahul Chirra. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors text-center hover:scale-105 transform duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors text-center hover:scale-105 transform duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
