"use client"

import { Button } from "@/components/ui/button"
import { Building2, Users, Handshake, Globe } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center mb-12 space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Meet Farheen Khan</h2>
            <p className="text-xl text-gold-gradient font-medium">Property Advisor | Stage Properties</p>
          </div>

          <div className="space-y-8">
            <div
              className={`flex justify-center mb-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
            >
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden glass-border ring-8 ring-primary/10 shadow-2xl shadow-primary/30 hover:scale-105 transition-transform duration-500">
                  <img src="/profile-photo.jpg" alt="Farheen Khan" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Building2 className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
            </div>

            <p
              className={`text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              With extensive experience in Dubai's dynamic property market, I specialize in connecting investors with
              high-growth off-plan developments. My approach combines deep market knowledge, strong developer
              relationships, and personalized guidance to help you make informed investment decisions. Whether you're a
              first-time buyer or an experienced investor, I provide tailored solutions that align with your financial
              goals and lifestyle preferences.
            </p>

            <div className="grid md:grid-cols-4 gap-6 pt-8">
              {[
                { icon: Building2, title: "Off-Plan Investments Expert", delay: 400 },
                { icon: Users, title: "Personalized Consultation", delay: 500 },
                { icon: Handshake, title: "Developer Connections", delay: 600 },
                { icon: Globe, title: "Overseas Investor Support", delay: 700 },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-card border border-border rounded-xl p-6 text-center space-y-4 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${item.delay}ms` }}
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </div>
              ))}
            </div>

            <div
              className={`flex justify-center pt-8 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-foreground hover:bg-primary/10 bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                Download My Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
