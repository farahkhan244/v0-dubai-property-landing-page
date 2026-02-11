"use client"

import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  return (
    <section className="py-14 bg-background relative overflow-hidden">
      {/* Dubai skyline background with light opacity */}
      <div className="absolute inset-0 z-0">
        <img
          src="/dubai-landmark-cta.jpg"
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-balance">
            <span className="text-gold-gradient">{"Ready to Explore Dubai's Best Property Opportunities?"}</span>
          </h2>

          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            {"Share your requirements and I'll send you tailored off-plan and ready property options."}
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
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
              <a href="mailto:farheen@stageproperties.com">Email</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
