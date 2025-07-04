import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ExperienceSection() {
  const experiences = [
    {
      title: "",
      company: "Independent Trader & Indicator Developer",
      period: "2020 – Present (4+ Years)",
      achievements: [
        "Specialized in EUR/USD trading",
        "Developed custom indicators for major currency pairs",
        "Built smart money concepts indicators for institutional trading",
        "Created price action and trend following systems",
        "Analyzed market structure and order flow patterns",
      ],
    },
  ]

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Trading Experience</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-2">
              My trading experience
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} direction="left" delay={300}>
              <Card className="hover:shadow-lg transition-all duration-500 transform hover:scale-[1.02]">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full w-fit mx-auto sm:mx-0 transition-all duration-300 hover:bg-green-200 dark:hover:bg-green-800">
                      <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <p className="text-base sm:text-lg text-green-600 font-medium">{exp.company}</p>
                        </div>
                        <Badge variant="outline" className="w-fit mx-auto sm:mx-0 text-xs sm:text-sm animate-pulse">
                          {exp.period}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="sm:ml-16">
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <ScrollReveal key={i} direction="right" delay={100 * (i + 1)}>
                        <li className="text-xs sm:text-sm text-muted-foreground">• {achievement}</li>
                      </ScrollReveal>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
