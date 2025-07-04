import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Wrench } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages & Libraries",
      icon: <Code className="h-6 w-6 sm:h-8 sm:w-8" />,
      skills: ["Python (Pandas, NumPy, Scikit-Learn)", "R", "SQL"],
    },
    {
      title: "Data Science & ML",
      icon: <Database className="h-6 w-6 sm:h-8 sm:w-8" />,
      skills: ["Feature Engineering", "Model Training & Validation", "Statistical Analysis", "Hyperparameter Tuning"],
    },
    {
      title: "Tools & Environments",
      icon: <Wrench className="h-6 w-6 sm:h-8 sm:w-8" />,
      skills: ["Jupyter Notebook", "Google Colab", "Git", "VS Code", "Data Pipeline Automation"],
    },
  ]

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Technical Skills</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-2">
              Here are the technologies and tools I work with
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} direction="up" delay={200 * (index + 1)}>
              <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <CardHeader className="text-center pb-3 sm:pb-4">
                  <div className="mx-auto mb-3 sm:mb-4 p-2 sm:p-3 bg-green-100 dark:bg-green-900 rounded-full w-fit transition-all duration-300 hover:bg-green-200 dark:hover:bg-green-800">
                    {category.icon}
                  </div>
                  <CardTitle className="text-base sm:text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 sm:space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-xs sm:text-sm text-muted-foreground">
                        • {skill}
                      </li>
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
