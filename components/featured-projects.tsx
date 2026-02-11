"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { projects, type Project } from "@/lib/projects"

const priceRanges: Record<string, [number, number]> = {
  "Under AED 1M": [0, 1000000],
  "AED 1M - 2M": [1000000, 2000000],
  "AED 2M - 5M": [2000000, 5000000],
  "AED 5M - 10M": [5000000, 10000000],
  "AED 10M - 15M": [10000000, 15000000],
  "AED 15M - 25M": [15000000, 25000000],
  "Above AED 25M": [25000000, Infinity],
}

export default function FeaturedProjects() {
  const router = useRouter()
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [filtered, setFiltered] = useState<Project[]>(projects)
  const [activeFilters, setActiveFilters] = useState(false)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleSearch = (e: Event) => {
      const detail = (e as CustomEvent).detail as { city: string; price: string; query: string }
      let result = [...projects]

      if (detail.city) {
        result = result.filter((p) => p.city === detail.city)
      }
      if (detail.price && priceRanges[detail.price]) {
        const [min, max] = priceRanges[detail.price]
        result = result.filter((p) => p.priceNumeric >= min && p.priceNumeric < max)
      }
      if (detail.query) {
        const q = detail.query.toLowerCase()
        result = result.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.developer.toLowerCase().includes(q) ||
            p.location.toLowerCase().includes(q),
        )
      }

      setFiltered(result)
      setActiveFilters(!!(detail.city || detail.price || detail.query))
      setVisibleItems([])
    }

    window.addEventListener("search-projects", handleSearch)
    return () => window.removeEventListener("search-projects", handleSearch)
  }, [])

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
  }, [filtered])

  const clearFilters = () => {
    setFiltered(projects)
    setActiveFilters(false)
    setVisibleItems([])
  }

  return (
    <section id="featured-projects" className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 space-y-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient">Featured Off-Plan Projects</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Handpicked high-growth opportunities from top developers
          </p>
          {activeFilters && (
            <div className="pt-2">
              <p className="text-xs text-muted-foreground mb-1">
                Showing {filtered.length} of {projects.length} projects
              </p>
              <button
                onClick={clearFilters}
                className="text-xs text-gold-gradient hover:underline transition-all"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-sm mb-3">No projects match your search criteria.</p>
            <button onClick={clearFilters} className="text-xs text-gold-gradient hover:underline">
              Show all projects
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, index) => (
              <div
                key={project.slug}
                data-index={index}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                onClick={() => router.push(`/projects/${project.slug}`)}
                className={`bg-card border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] group cursor-pointer ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 bg-gold-gradient text-primary-foreground px-2 py-0.5 text-[10px] font-medium">
                    {project.developer}
                  </div>
                  <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-foreground px-2 py-0.5 text-[10px] font-medium">
                    {project.handover}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-4 space-y-2">
                  <h3 className="text-sm font-bold text-foreground group-hover:text-gold-gradient transition-all duration-300 leading-tight">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <span className="text-[11px]">{project.location}</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">{project.propertyType}</p>
                  <div className="flex items-baseline gap-1 pt-1">
                    <span className="text-gold-gradient text-sm font-bold">AED {project.startingPrice}</span>
                    <span className="text-[10px] text-muted-foreground">starting</span>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] text-muted-foreground pt-1 border-t border-border/50">
                    <span className="pt-1.5">{project.approxSize} sq ft</span>
                    <span className="pt-1.5">|</span>
                    <span className="pt-1.5 flex-1 truncate">{project.paymentPlan.split(",")[0]}</span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-2 pt-2" onClick={(e) => e.stopPropagation()}>
                    <Button
                      size="sm"
                      className="flex-1 bg-gold-gradient text-primary-foreground hover:opacity-90 transition-all duration-300 h-7 text-[11px]"
                      asChild
                    >
                      <a href="https://wa.me/+971551122732" target="_blank" rel="noopener noreferrer">
                        WhatsApp
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/50 text-foreground hover:bg-white hover:text-background transition-all duration-300 h-7 text-[11px] bg-transparent"
                      asChild
                    >
                      <a href="mailto:farheen@stageproperties.com">Email</a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
