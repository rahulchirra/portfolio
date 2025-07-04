"use client"

import { Badge } from "@/components/ui/badge"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Get In Touch</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-2">
              I'm always open to discussing new opportunities and interesting projects
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <ScrollReveal direction="left" delay={200}>
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Let's discuss trading opportunities!</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                  Looking for custom forex indicators or trading solutions? Let's connect! 📈
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <ScrollReveal direction="right" delay={400}>
                  <div className="flex items-center gap-3 sm:gap-4 group">
                    <div className="p-2 sm:p-3 bg-green-100 dark:bg-green-900 rounded-full flex-shrink-0 transition-all duration-300 group-hover:bg-green-200 dark:group-hover:bg-green-800">
                      <Mail className="h-4 w-4 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-base">Email</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground break-all">rahulchirra9@gmail.com</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={600}>
                  <div className="flex items-center gap-3 sm:gap-4 group">
                    <div className="p-2 sm:p-3 bg-green-100 dark:bg-green-900 rounded-full flex-shrink-0 transition-all duration-300 group-hover:bg-green-200 dark:group-hover:bg-green-800">
                      <Phone className="h-4 w-4 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-base">Phone</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">+91 93902 88788</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={800}>
                  <div className="flex items-center gap-3 sm:gap-4 group">
                    <div className="p-2 sm:p-3 bg-green-100 dark:bg-green-900 rounded-full flex-shrink-0 transition-all duration-300 group-hover:bg-green-200 dark:group-hover:bg-green-800">
                      <MapPin className="h-4 w-4 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-base">Location</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">Warangal, India</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal direction="up" delay={1000}>
                <div className="pt-2 sm:pt-4">
                  <h4 className="font-medium mb-2 sm:mb-3 text-sm sm:text-base">Languages</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    <Badge variant="secondary" className="text-xs transition-all duration-300 hover:bg-green-100">
                      Telugu (Native)
                    </Badge>
                    <Badge variant="secondary" className="text-xs transition-all duration-300 hover:bg-green-100">
                      English (Fluent)
                    </Badge>
                    <Badge variant="secondary" className="text-xs transition-all duration-300 hover:bg-green-100">
                      Hindi (Proficient)
                    </Badge>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={400}>
            <div className="order-1 lg:order-2">
              <Card className="hover:shadow-lg transition-all duration-500">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="text-lg sm:text-xl">Send me a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="text-sm sm:text-base transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="text-sm sm:text-base transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="text-sm sm:text-base resize-none transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full text-sm sm:text-base transform hover:scale-105 transition-all duration-300"
                    >
                      <Send className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
