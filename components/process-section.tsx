"use client"

import { Button } from "@/components/ui/button"
import { Phone, Search, Eye, FileCheck } from "lucide-react"

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Discovery Call",
    description: "We discuss your investment goals, budget, and preferences",
  },
  {
    icon: Search,
    number: "02",
    title: "Shortlisting Options",
    description: "I curate a selection of properties matching your criteria",
  },
  {
    icon: Eye,
    number: "03",
    title: "Viewings / Virtual Tours",
    description: "Visit properties or take virtual tours from anywhere",
  },
  {
    icon: FileCheck,
    number: "04",
    title: "Booking & Coordination",
    description: "Handle paperwork and coordinate with developers",
  },
]

export default function ProcessSection() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">How I Work With You</h2>
            <p className="text-xl text-muted-foreground">A streamlined process designed for your success</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-primary/30" />
                  )}
                  <div className="relative bg-card border border-border rounded-lg p-6 text-center space-y-4 hover:shadow-lg hover:shadow-primary/10 transition-all">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center relative">
                      <Icon className="w-8 h-8 text-primary" />
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex justify-center">
            <Button
              size="sm"
              className="bg-gold-gradient text-primary-foreground hover:opacity-90 text-xs h-9 px-8 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50 duration-300"
              onClick={scrollToForm}
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
