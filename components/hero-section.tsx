"use client"

import { Button } from "@/components/ui/button"
import SiteHeader from "@/components/site-header"
import { ChevronDown, Search } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"

export default function HeroSection() {
  const router = useRouter()
  const [scrollY, setScrollY] = useState(0)
  const [cityOpen, setCityOpen] = useState(false)
  const [priceOpen, setPriceOpen] = useState(false)
  const [selectedCity, setSelectedCity] = useState("")
  const [selectedPrice, setSelectedPrice] = useState("")
  const [projectSearch, setProjectSearch] = useState("")
  const cityRef = useRef<HTMLDivElement>(null)
  const priceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cityRef.current && !cityRef.current.contains(e.target as Node)) setCityOpen(false)
      if (priceRef.current && !priceRef.current.contains(e.target as Node)) setPriceOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = () => {
    const event = new CustomEvent("search-projects", {
      detail: { city: selectedCity, price: selectedPrice, query: projectSearch },
    })
    window.dispatchEvent(event)
    const section = document.getElementById("featured-projects")
    if (section) section.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <SiteHeader />

      <div
        className="absolute inset-0 z-0 parallax-bg"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background z-10" />
        <video autoPlay loop muted playsInline className="w-full h-[120vh] object-cover opacity-70">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_3761429587-h1o9jpFTy7Etu7hStHANgdY5jQuIbq.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="w-full px-4 py-16 relative z-20">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-gold-gradient">
            {"Invest Smart in Dubai's Off-Plan Properties"}
          </h1>

          <p className="mt-5 text-white text-xs uppercase tracking-widest font-medium">
            Certified Off-Plan Property Advisor at Stage Properties
          </p>

          <div className="space-y-0.5 mt-3">
            <h2 className="text-xl font-bold text-foreground">Farheen Khan</h2>
            <p className="text-gold-gradient text-sm font-medium">Property Advisor | Stage Properties</p>
            <p className="text-muted-foreground text-xs">+971 55 112 2732 | farheen@stageproperties.com</p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mt-3">
            <Button
              size="sm"
              className="bg-gold-gradient text-primary-foreground hover:opacity-90 text-xs px-4 h-7 transition-all hover:scale-105 duration-300"
              asChild
            >
              <a href="https://wa.me/+971551122732" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </Button>

            <Button
              size="sm"
              variant="outline"
              className="text-xs px-4 h-7 border-primary/50 text-foreground hover:bg-white hover:text-background transition-all hover:scale-105 bg-transparent duration-300"
              asChild
            >
              <a href="https://calendly.com/farahkhan244/30min" target="_blank" rel="noopener noreferrer">Book a Free Consultation</a>
            </Button>
          </div>

          {/* Property Search Bar */}
          <div className="max-w-3xl mx-auto space-y-2 mt-6">
            <h2 className="text-xl md:text-2xl font-bold leading-tight">
              {"LET'S FIND "}
              <span className="text-gold-gradient">YOUR HOME</span>
            </h2>

            <div className="border border-primary/30 bg-background/60 backdrop-blur-sm flex items-center gap-0 p-0">
              {/* City Dropdown */}
              <div ref={cityRef} className="relative flex-shrink-0">
                <button
                  onClick={() => { setCityOpen(!cityOpen); setPriceOpen(false) }}
                  className="flex items-center justify-between gap-2 px-4 py-3 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-gold-gradient font-medium text-xs">{selectedCity || "DUBAI"}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${cityOpen ? "rotate-180" : ""}`} />
                </button>
                {cityOpen && (
                  <div className="absolute top-full left-0 w-48 bg-card border border-border z-50 shadow-xl">
                    {["Dubai", "Ras Al Khaimah", "Abu Dhabi"].map((city) => (
                      <button
                        key={city}
                        onClick={() => { setSelectedCity(city); setCityOpen(false) }}
                        className="w-full text-left px-4 py-2.5 text-xs text-foreground hover:bg-white/10 transition-colors"
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="h-8 w-px bg-border" />

              {/* Price Dropdown */}
              <div ref={priceRef} className="relative flex-shrink-0">
                <button
                  onClick={() => { setPriceOpen(!priceOpen); setCityOpen(false) }}
                  className="flex items-center justify-between gap-2 px-4 py-3 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-gold-gradient font-medium text-xs">{selectedPrice || "PRICE"}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${priceOpen ? "rotate-180" : ""}`} />
                </button>
                {priceOpen && (
                  <div className="absolute top-full left-0 w-48 bg-card border border-border z-50 shadow-xl">
                    {[
                      "Under AED 1M",
                      "AED 1M - 2M",
                      "AED 2M - 5M",
                      "AED 5M - 10M",
                      "AED 10M - 15M",
                      "AED 15M - 25M",
                      "Above AED 25M",
                    ].map((price) => (
                      <button
                        key={price}
                        onClick={() => { setSelectedPrice(price); setPriceOpen(false) }}
                        className="w-full text-left px-4 py-2.5 text-xs text-foreground hover:bg-white/10 transition-colors"
                      >
                        {price}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="h-8 w-px bg-border" />

              {/* Project Interested Input */}
              <div className="flex-1 flex items-center">
                <input
                  type="text"
                  value={projectSearch}
                  onChange={(e) => setProjectSearch(e.target.value)}
                  placeholder="PROJECT INTERESTED"
                  className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground/50 text-xs px-4 py-3"
                  onKeyDown={(e) => { if (e.key === "Enter") handleSearch() }}
                />
              </div>

              <div className="h-8 w-px bg-border" />

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="px-4 py-3 hover:bg-white/10 transition-colors"
                aria-label="Search properties"
              >
                <Search className="w-4 h-4 text-gold-gradient" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
