"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Ahmed Al-Mansoori",
    location: "Abu Dhabi, UAE",
    text: "Farheen helped me find the perfect off-plan investment in Dubai Marina. Her knowledge of payment plans and ROI potential was invaluable. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    location: "London, UK",
    text: "As an overseas investor, I was nervous about buying property in Dubai. Farheen made the entire process seamless and transparent. Excellent service!",
    rating: 5,
  },
  {
    name: "Raj Patel",
    location: "Mumbai, India",
    text: "Working with Farheen was a game-changer. She understood exactly what I was looking for and delivered options that exceeded my expectations.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    location: "Madrid, Spain",
    text: "Professional, knowledgeable, and always available. Farheen guided us through every step of purchasing our villa in Dubai Hills. Thank you!",
    rating: 5,
  },
  {
    name: "Mohammed Al-Rashid",
    location: "Riyadh, Saudi Arabia",
    text: "Farheen's expertise in off-plan properties is outstanding. She helped me build a diverse portfolio with excellent growth potential.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">What Clients Say</h2>
            <p className="text-xl text-muted-foreground">Trusted by investors from around the world</p>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-lg p-8 md:p-12">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-primary fill-primary" />
                ))}
              </div>

              <blockquote className="text-xl text-foreground text-center mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="text-center">
                <p className="font-semibold text-foreground text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-muted-foreground">{testimonials[currentIndex].location}</p>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="border-primary hover:bg-primary/10 bg-transparent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-primary w-8" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="border-primary hover:bg-primary/10 bg-transparent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
