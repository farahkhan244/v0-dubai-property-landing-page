"use client"

import { Button } from "@/components/ui/button"
import { Phone, Calendar, Building2, TrendingUp, Users, Award } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToProjects = () => {
    document.getElementById("featured-projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 parallax-bg"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background z-10" />
        <img
          src="/luxury-dubai-skyline-at-sunset-burj-khalifa.jpg"
          alt="Dubai Skyline"
          className="w-full h-[120vh] object-cover"
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <p className="text-gold-gradient text-sm uppercase tracking-widest font-medium">
              Property Advisor at Stage Properties
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              Invest Smart in Dubai's Off-Plan Properties
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              I'm Farheen Khan, helping investors find high-growth off-plan opportunities and ready homes in Dubai with
              expert guidance and a personalized approach.
            </p>

            {/* Bullet Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                { icon: Building2, text: "Access to top Dubai developers" },
                { icon: TrendingUp, text: "Strong off-plan project portfolio" },
                { icon: Users, text: "Expert guidance for investors" },
                { icon: Award, text: "Tailored property recommendations" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300"
                >
                  <item.icon className="w-5 h-5 text-gold-gradient mt-1 transition-transform group-hover:scale-125 duration-300" />
                  <p className="text-foreground">{item.text}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gold-gradient text-primary-foreground hover:opacity-90 text-lg px-8 h-14 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50 duration-300"
                asChild
              >
                <a href="tel:+971528272886">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 h-14 glass-border text-foreground hover:bg-primary/10 transition-all hover:scale-105 bg-transparent duration-300"
                onClick={scrollToForm}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Free Consultation
              </Button>

              <Button
                size="lg"
                variant="ghost"
                className="text-lg px-8 h-14 text-gold-gradient hover:bg-primary/10 transition-all duration-300"
                onClick={scrollToProjects}
              >
                Browse Featured Projects →
              </Button>
            </div>
          </div>

          <div className="lg:flex justify-center animate-slide-in-right">
            <div className="glass-card rounded-2xl p-8 max-w-md hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-[1.02] hover:border-primary/50">
              <div className="space-y-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden glass-border ring-4 ring-primary/10 hover:ring-primary/30 transition-all duration-300">
                  <img src="/profile-photo.jpg" alt="Farheen Khan" className="w-full h-full object-cover" />
                </div>

                <div className="text-center space-y-2">
                  <h3 className="text-3xl font-bold text-foreground">Farheen Khan</h3>
                  <p className="text-gold-gradient text-lg font-medium">Property Advisor</p>
                  <p className="text-muted-foreground">Stage Properties</p>
                  <p className="text-muted-foreground text-sm">Dubai, UAE</p>
                </div>

                <div className="pt-4 space-y-3">
                  <a
                    href="tel:+971528272886"
                    className="flex items-center justify-center gap-2 text-foreground hover:text-gold-gradient transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+971 52 827 2886</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
