"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export default function AbuDhabiSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-background overflow-hidden">
      <div className="flex flex-col md:flex-row items-stretch min-h-[400px]">
        {/* Left Text */}
        <div
          className={`flex-1 flex flex-col items-center md:items-start justify-center px-8 md:px-12 py-12 space-y-4 text-center md:text-left transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient leading-tight">
            {"Discover Abu Dhabi's Latest Off-Plan Launches"}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
            Carefully selected developments from trusted developers, offering strong long-term value and lifestyle appeal.
          </p>
          <Button
            size="sm"
            className="bg-gold-gradient text-primary-foreground hover:opacity-90 text-xs px-5 h-7 transition-all hover:scale-105 duration-300"
            asChild
          >
            <a href="https://wa.me/+971551122732" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </Button>
        </div>

        {/* Right Image - equal to section height */}
        <div
          className={`flex-1 relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          <img
            src="/abu-dhabi-skyline.jpg"
            alt="Abu Dhabi skyline with modern towers along the Corniche"
            className="w-full h-full min-h-[300px] md:min-h-0 object-cover"
          />
          {/* Left fade overlay to merge with background */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
