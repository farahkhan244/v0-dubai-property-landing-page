"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"

const projects = [
  { name: "Palmiera Collective Oasis", developer: "Emaar" },
  { name: "The Valley", developer: "Emaar" },
  { name: "Emaar South", developer: "Emaar" },
  { name: "Emaar Beachfront", developer: "Emaar" },
  { name: "Mercedes Benz Places", developer: "Binghatti" },
  { name: "Binghatti Luxuria", developer: "Binghatti" },
  { name: "Binghatti Sky Terraces", developer: "Binghatti" },
  { name: "The Edit 3", developer: "" },
  { name: "Creatlane City", developer: "" },
  { name: "Solaya", developer: "" },
  { name: "Nad Al Sheba Gardens", developer: "" },
  { name: "Hado", developer: "" },
  { name: "Bella by Passo", developer: "" },
  { name: "Oystra", developer: "Zaha Hadid Architects" },
  { name: "Aqua Maya", developer: "" },
]

export default function FeaturedProjects() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleItems((prev) => (prev.includes(index) ? prev : [...prev, index]))
          }
        }
      },
      { threshold: 0.1 },
    )
    for (const ref of itemRefs.current) {
      if (ref) observer.observe(ref)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section id="featured-projects" className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 space-y-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient">Featured Off-Plan Projects</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Handpicked high-growth opportunities from Dubai's top developers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => { itemRefs.current[index] = el }}
              className={`bg-card border border-border p-5 text-center space-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.03] group ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
            >
              <h3 className="text-base font-bold text-foreground group-hover:text-gold-gradient transition-all duration-300">
                {project.name}
              </h3>
              {project.developer && (
                <p className="text-gold-gradient text-xs font-medium">by {project.developer}</p>
              )}
              <Button
                size="sm"
                className="bg-gold-gradient text-primary-foreground hover:opacity-90 transition-all duration-300 h-7 text-xs px-4"
                asChild
              >
                <a href="tel:+971551122732">Call Now</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
