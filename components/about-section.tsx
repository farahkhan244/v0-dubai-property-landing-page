"use client"
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
    <section ref={sectionRef} className="py-16 bg-background">
      <div className="w-full px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-6 space-y-1 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gold-gradient leading-tight">Meet Farheen Khan</h2>
            <p className="text-lg text-muted-foreground font-medium">Property Advisor | Stage Properties</p>
          </div>

          <div className="space-y-6">
            <p
              className={`text-sm text-muted-foreground leading-snug text-center max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              With extensive experience in Dubai's dynamic property market, I specialize in connecting investors with
              high-growth off-plan developments.
            </p>

            <div className="grid md:grid-cols-4 gap-6 pt-6">
              {[
                { icon: Building2, title: "Off-Plan Investments Expert", delay: 400 },
                { icon: Users, title: "Personalized Consultation", delay: 500 },
                { icon: Handshake, title: "Developer Connections", delay: 600 },
                { icon: Globe, title: "Overseas Investor Support", delay: 700 },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-card border border-border rounded-xl p-6 text-center space-y-3 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${item.delay}ms` }}
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm leading-tight">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
