"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      interests: formData.getAll("interests"),
      message: formData.get("message"),
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Form data:", data)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="lead-form" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6 py-12 animate-scale-in glass-card rounded-2xl p-12">
            <div className="w-20 h-20 mx-auto rounded-full bg-gold-gradient flex items-center justify-center animate-pulse">
              <svg className="w-10 h-10 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-foreground">Thank You!</h3>
            <p className="text-xl text-muted-foreground">
              I've received your inquiry and will get back to you within 24 hours with tailored property options.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="lead-form" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Let's Talk About Your Investment Goals</h2>
            <p className="text-xl text-muted-foreground">
              Share your requirements and receive personalized property recommendations
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 space-y-6 border border-border hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="bg-background/50 backdrop-blur-sm border-border text-foreground transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="bg-background/50 backdrop-blur-sm border-border text-foreground transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">
                Phone *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+971 50 123 4567"
                defaultValue="+971 "
                className="bg-background/50 backdrop-blur-sm border-border text-foreground transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="space-y-3">
              <Label className="text-foreground">Interested In</Label>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 group">
                  <Checkbox
                    id="offplan-apartments"
                    name="interests"
                    value="offplan-apartments"
                    className="transition-all duration-300 data-[state=checked]:bg-gold-gradient"
                  />
                  <label
                    htmlFor="offplan-apartments"
                    className="text-sm text-foreground cursor-pointer group-hover:text-primary transition-colors duration-300"
                  >
                    Off-plan Apartments
                  </label>
                </div>
                <div className="flex items-center space-x-2 group">
                  <Checkbox
                    id="offplan-villas"
                    name="interests"
                    value="offplan-villas"
                    className="transition-all duration-300 data-[state=checked]:bg-gold-gradient"
                  />
                  <label
                    htmlFor="offplan-villas"
                    className="text-sm text-foreground cursor-pointer group-hover:text-primary transition-colors duration-300"
                  >
                    Off-plan Villas & Townhouses
                  </label>
                </div>
                <div className="flex items-center space-x-2 group">
                  <Checkbox
                    id="ready-properties"
                    name="interests"
                    value="ready-properties"
                    className="transition-all duration-300 data-[state=checked]:bg-gold-gradient"
                  />
                  <label
                    htmlFor="ready-properties"
                    className="text-sm text-foreground cursor-pointer group-hover:text-primary transition-colors duration-300"
                  >
                    Ready Properties
                  </label>
                </div>
                <div className="flex items-center space-x-2 group">
                  <Checkbox
                    id="holiday-homes"
                    name="interests"
                    value="holiday-homes"
                    className="transition-all duration-300 data-[state=checked]:bg-gold-gradient"
                  />
                  <label
                    htmlFor="holiday-homes"
                    className="text-sm text-foreground cursor-pointer group-hover:text-primary transition-colors duration-300"
                  >
                    Holiday Homes
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Message / Requirements
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your investment goals, preferred locations, or any specific requirements..."
                rows={4}
                className="bg-background/50 backdrop-blur-sm border-border text-foreground transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gold-gradient text-primary-foreground hover:opacity-90 text-lg h-14 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/50 duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
