"use client"

import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            <span className="text-gold-gradient">Ready to Explore Dubai's Best Property Opportunities?</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Share your requirements and I'll send you tailored off-plan and ready property options.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-gold-gradient text-primary-foreground hover:bg-white hover:text-background text-lg px-8 h-14 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50 duration-300"
              asChild
            >
              <a href="tel:+971528272886">Call Now</a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 h-14 border-primary text-foreground hover:bg-white hover:text-background transition-all hover:scale-105 bg-transparent duration-300"
              asChild
            >
              <a href="mailto:farahkhan244@gmail.com">Email</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
