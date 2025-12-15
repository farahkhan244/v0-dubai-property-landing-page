"use client"

import { Button } from "@/components/ui/button"
import { Search, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("RESIDENTIAL")

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

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 parallax-bg"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background z-10" />
        <video autoPlay loop muted playsInline className="w-full h-[120vh] object-cover opacity-70">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_3761429587-h1o9jpFTy7Etu7hStHANgdY5jQuIbq.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="w-full px-4 py-20 relative z-20">
        <div className="max-w-6xl mx-auto text-center space-y-4 animate-fade-in-up">
          <p className="text-white text-sm uppercase tracking-widest font-medium">
            Property Advisor at Stage Properties
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-gold-gradient">
            Invest Smart in Dubai's Off-Plan Properties
          </h1>

          <p className="text-xs text-white/90 leading-snug max-w-2xl mx-auto pt-1">
            I'm Farheen Khan, helping investors find high-growth off-plan opportunities and ready homes in Dubai with
            expert guidance and a personalized approach.
          </p>

          <div className="space-y-1 pt-2">
            <h2 className="text-2xl font-bold text-foreground">Farheen Khan</h2>
            <p className="text-gold-gradient text-base font-medium">Property Advisor | Stage Properties</p>
            <p className="text-muted-foreground text-sm">+971 52 827 2886 | farheen@stageproperties.ae</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Button
              size="sm"
              className="bg-gold-gradient text-primary-foreground hover:bg-white hover:text-background text-xs px-4 h-8 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50 duration-300"
              asChild
            >
              <a href="tel:+971528272886">Call Now</a>
            </Button>

            <Button
              size="sm"
              variant="outline"
              className="text-xs px-4 h-8 border-primary/50 text-foreground hover:bg-white hover:text-background transition-all hover:scale-105 bg-transparent duration-300"
              onClick={scrollToForm}
            >
              Book a Free Consultation
            </Button>
          </div>

          {/* Property Search Bar */}
          <div className="max-w-4xl mx-auto space-y-3 pt-6">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              {"LET'S FIND "}
              <span className="text-gold-gradient">YOUR HOME</span>
            </h2>

            {/* Category Buttons */}
            <div className="flex gap-3 justify-center">
              {["RESIDENTIAL", "COMMERCIAL", "OFF PLAN"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-xs font-medium tracking-wide transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gold-gradient text-primary-foreground"
                      : "bg-transparent border border-border text-foreground hover:border-primary/50 hover:bg-white hover:text-background"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="border border-primary/30 bg-background/50 backdrop-blur-sm flex flex-wrap items-center justify-center gap-3 p-3">
              <div className="flex items-center gap-2 min-w-[100px]">
                <span className="text-gold-gradient font-medium text-xs">OFF-PLAN</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-2 min-w-[80px]">
                <span className="text-gold-gradient font-medium text-xs">BEDS</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-2 min-w-[80px]">
                <span className="text-gold-gradient font-medium text-xs">PRICE</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="h-6 w-px bg-border" />
              <input
                type="text"
                placeholder="COMMUNITY OR PROPERTY"
                className="flex-1 bg-transparent border-none outline-none text-muted-foreground placeholder:text-muted-foreground/50 text-xs min-w-[150px]"
              />
              <button className="p-2 hover:bg-white hover:text-background transition-colors rounded-sm">
                <Search className="w-4 h-4 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
