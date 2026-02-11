"use client"

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
    <section ref={sectionRef} className="relative py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Text */}
          <div
            className={`flex-1 space-y-3 text-center md:text-left transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient leading-tight">
              {"Discover Abu Dhabi's Latest Off-Plan Launches"}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
              Carefully selected developments from trusted developers, offering strong long-term value and lifestyle
              appeal.
            </p>
          </div>

          {/* Right Image with fade effect */}
          <div
            className={`flex-1 relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="/abu-dhabi-skyline.jpg"
                alt="Abu Dhabi skyline with modern towers along the Corniche"
                className="w-full h-64 md:h-80 object-cover"
              />
              {/* Left fade overlay to merge with background */}
              <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
