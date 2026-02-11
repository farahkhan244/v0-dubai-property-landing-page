"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { projects } from "@/lib/projects"

const waterfrontSlugs = ["emaar-beachfront", "bella-by-passo", "solaya", "hado", "aqua-maya"]
const waterfrontProjects = projects.filter((p) => waterfrontSlugs.includes(p.slug))

export default function WaterfrontSection() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4 space-y-6">
        <div
          className={`text-center space-y-1 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient">Exclusive Waterfront Residences</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Premium beachfront and waterfront living in the most sought-after coastal communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {waterfrontProjects.map((project, index) => (
              <div
                key={project.slug}
                onClick={() => router.push(`/projects/${project.slug}`)}
                className={`bg-card border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] group cursor-pointer h-full ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 150}ms`, transition: "all 700ms" }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-sm font-bold text-foreground group-hover:text-gold-gradient transition-all duration-300">
                      {project.name}
                    </h3>
                    <p className="text-[10px] text-muted-foreground">{project.location}</p>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gold-gradient text-sm font-bold">AED {project.startingPrice}</span>
                    <span className="text-[10px] text-muted-foreground">{project.handover}</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">{project.propertyType} | {project.approxSize} sq ft</p>
                  <div className="flex gap-2 pt-1" onClick={(e) => e.stopPropagation()}>
                    <Button
                      size="sm"
                      className="flex-1 bg-gold-gradient text-primary-foreground hover:opacity-90 h-7 text-[11px]"
                      asChild
                    >
                      <a href="https://wa.me/+971551122732" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/50 text-foreground hover:bg-white hover:text-background h-7 text-[11px] bg-transparent"
                      asChild
                    >
                      <a href="mailto:farheen@stageproperties.com">Email</a>
                    </Button>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}
