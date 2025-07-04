import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">About Me</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-2">
              Get to know more about who I am and what I do
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto px-2 sm:px-4">
          <div className="space-y-4 sm:space-y-6">
            <ScrollReveal direction="left" delay={200}>
              <h3 className="text-xl sm:text-2xl font-semibold">Get to know me!</h3>
            </ScrollReveal>

            <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <ScrollReveal direction="up" delay={400}>
                <p>
                  I'm a <strong className="text-foreground">Forex Trading Indicators Developer</strong> specializing in
                  building custom indicators for technical analysis and price action trading. I focus on smart money
                  concepts and trend trading analysis to create powerful tools for forex markets.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={600}>
                <p>
                  My expertise includes developing indicators based on market structure, institutional order flow, and
                  advanced price action patterns. I build solutions that help traders identify high-probability setups
                  and make informed trading decisions.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={800}>
                <p>
                  I'm available for <strong className="text-foreground">custom indicator development</strong> projects
                  where I can apply my technical analysis skills to create profitable trading tools. If you need forex
                  indicators or trading systems, let's discuss your requirements.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
