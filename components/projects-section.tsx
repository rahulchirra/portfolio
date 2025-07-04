import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Target, TrendingUp, Code } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ProjectsSection() {
  const projects = [
    {
      title: "Strong Trend Detector",
      objective:
        "Identify strong uptrends and downtrends in forex markets while filtering out sideways market conditions for optimal trading entries.",
      approach:
        "Built using Pine Script v5 with EMA crossovers (50/200), RSI momentum analysis, and breakout detection. Combines multiple timeframe analysis with dynamic support/resistance levels to confirm trend strength.",
      outcome:
        "Successfully detects strong trends with high precision while avoiding false signals during sideways markets. Provides clear visual alerts with background color coding and labeled entry points.",
      technologies: ["Pine Script v5", "EMA Analysis", "RSI Momentum", "Breakout Detection", "TradingView"],
      features: [
        "EMA 50/200 crossover analysis",
        "RSI momentum confirmation (>60 uptrend, <40 downtrend)",
        "Dynamic support/resistance breakout detection",
        "Sideways market filter to reduce false signals",
        "Visual background color coding",
        "Customizable parameters and lookback periods",
      ],
      accuracy: "High Precision",
      liveUrl: "https://in.tradingview.com/",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Project Highlights</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-2">
              Here are my key forex trading indicator projects
            </p>
          </div>
        </ScrollReveal>

        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} direction="up" delay={300}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 border-0 shadow-lg transform hover:scale-[1.02] hover:-translate-y-2">
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <CardTitle className="text-lg sm:text-xl text-green-700 dark:text-green-400">
                        {project.title}
                      </CardTitle>
                      <Badge className="bg-green-600 text-white w-fit animate-pulse">{project.accuracy}</Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3 sm:space-y-4 pb-4 sm:pb-6">
                    {/* Objective */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Target className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                        <h4 className="font-semibold text-xs sm:text-sm text-green-600">Objective</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-5 sm:pl-6">
                        {project.objective}
                      </p>
                    </div>

                    {/* Approach */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                        <h4 className="font-semibold text-xs sm:text-sm text-green-600">Approach</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-5 sm:pl-6">
                        {project.approach}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Code className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                        <h4 className="font-semibold text-xs sm:text-sm text-green-600">Key Features</h4>
                      </div>
                      <div className="pl-5 sm:pl-6">
                        <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                          {project.features.map((feature, index) => (
                            <li key={index}>• {feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Outcome */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                        <h4 className="font-semibold text-xs sm:text-sm text-green-600">Outcome</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-5 sm:pl-6">
                        {project.outcome}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs bg-green-50 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-300 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-0">
                    <Button
                      size="sm"
                      className="w-full sm:flex-1 bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-300"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                        View on TradingView
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full sm:flex-1 border-green-200 hover:bg-green-50 dark:border-green-800 dark:hover:bg-green-900/20 bg-transparent transform hover:scale-105 transition-all duration-300"
                    >
                      <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Pine Script
                    </Button>
                  </CardFooter>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
