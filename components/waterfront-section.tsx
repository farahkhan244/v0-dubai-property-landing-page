"use client"

import { useEffect, useRef, useState } from "react"

export default function WaterfrontSection() {
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
    <section ref={sectionRef} className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4 space-y-10">
        {/* Exclusive Waterfront Residences */}
        <div
          className={`text-center space-y-2 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient">Exclusive Waterfront Residences</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Premium beachfront and waterfront living in the most sought-after coastal communities
          </p>
        </div>

        {/* Al Marjan Island */}
        <div
          className={`relative overflow-hidden rounded-sm transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <img
            src="/al-marjan-island-waterfront.jpg"
            alt="Al Marjan Island luxury waterfront residences with turquoise waters"
            className="w-full h-72 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gold-gradient mb-1">
              Al Marjan Island
            </h3>
            <p className="text-sm text-white/80">Iconic Waterfront Living</p>
          </div>
        </div>
      </div>
    </section>
  )
}
