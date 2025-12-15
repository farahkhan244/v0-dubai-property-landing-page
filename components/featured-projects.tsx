"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Banknote, Calendar } from "lucide-react"

const projects = [
  {
    name: "The Crestmark",
    location: "Dubai Marina",
    startingPrice: "AED 1.2M",
    features: ["Post-handover plan", "Waterfront living", "8% ROI"],
    image: "/luxury-dubai-marina-apartment-tower.jpg",
    handover: "Q4 2026",
  },
  {
    name: "Azura Heights",
    location: "Dubai Hills Estate",
    startingPrice: "AED 950K",
    features: ["60/40 payment plan", "Golf course views", "High appreciation"],
    image: "/modern-dubai-hills-residential-tower.jpg",
    handover: "Q2 2027",
  },
  {
    name: "Seascape Residences",
    location: "Palm Jumeirah",
    startingPrice: "AED 2.8M",
    features: ["Beachfront access", "Premium finishes", "7% rental yield"],
    image: "/palm-jumeirah-luxury-beachfront-apartment.jpg",
    handover: "Q1 2027",
  },
  {
    name: "Urban Oasis",
    location: "Meydan",
    startingPrice: "AED 780K",
    features: ["Flexible payment", "Next to racecourse", "Smart home ready"],
    image: "/meydan-modern-apartment-building.jpg",
    handover: "Q3 2026",
  },
  {
    name: "Skyline Towers",
    location: "Business Bay",
    startingPrice: "AED 1.1M",
    features: ["Burj Khalifa views", "70/30 plan", "High ROI potential"],
    image: "/business-bay-dubai-luxury-tower.jpg",
    handover: "Q4 2026",
  },
  {
    name: "Verde Villas",
    location: "Dubai South",
    startingPrice: "AED 1.6M",
    features: ["Private gardens", "Family community", "Near Expo site"],
    image: "/dubai-modern-villa-community.jpg",
    handover: "Q2 2027",
  },
]

export default function FeaturedProjects() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="featured-projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Featured Off-Plan Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked high-growth opportunities from Dubai's top developers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gold-gradient text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  Off-Plan
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{project.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 py-3 border-y border-border/50">
                  <div className="flex items-center gap-2">
                    <Banknote className="w-5 h-5 text-primary" />
                    <span className="text-lg font-semibold text-foreground">{project.startingPrice}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.handover}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-gradient" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full bg-gold-gradient text-primary-foreground hover:opacity-90 transition-all hover:scale-[1.02] duration-300 h-8 text-xs"
                  asChild
                >
                  <a href="tel:+971528272886">Call Now</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
