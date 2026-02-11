"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const projectInterested = formData.get("projectInterested") as string
    const message = formData.get("message") as string

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Project Interested: ${projectInterested || "Not specified"}`,
      `Message: ${message || "No message"}`,
    ].join("\n")

    const mailtoLink = `mailto:farheen@stageproperties.com?subject=${encodeURIComponent("New Website Lead – Stage Properties")}&body=${encodeURIComponent(body)}`
    window.open(mailtoLink, "_self")

    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <section id="lead-form" className="py-10 bg-secondary/30">
        <div className="w-full px-0">
          <div className="text-center space-y-4 py-6 animate-scale-in px-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-gold-gradient flex items-center justify-center animate-pulse">
              <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
            <p className="text-base text-muted-foreground">
              {"I've received your inquiry and will get back to you within 24 hours."}
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="lead-form" className="py-10 bg-secondary/30">
      <div className="w-full px-0">
        <div className="text-center mb-5 space-y-1 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gold-gradient">{"Let's Talk About Your Investment Goals"}</h2>
          <p className="text-sm text-muted-foreground">
            Share your requirements and receive personalized property recommendations
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card p-5 md:p-6 space-y-4 border-t border-b border-border"
        >
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-foreground text-xs">Full Name *</Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="bg-background/50 border-border text-foreground text-sm h-9"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email" className="text-foreground text-xs">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                className="bg-background/50 border-border text-foreground text-sm h-9"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="phone" className="text-foreground text-xs">Phone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+971 50 123 4567"
                defaultValue="+971 "
                className="bg-background/50 border-border text-foreground text-sm h-9"
              />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-1">
            <Label htmlFor="projectInterested" className="text-foreground text-xs">Project Interested In</Label>
            <Input
              id="projectInterested"
              name="projectInterested"
              placeholder="e.g. Palmiera Collective Oasis, Emaar Beachfront..."
              className="bg-background/50 border-border text-foreground text-sm h-9"
            />
          </div>

          <div className="max-w-5xl mx-auto space-y-1">
            <Label htmlFor="message" className="text-foreground text-xs">Message / Requirements</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your investment goals..."
              rows={2}
              className="bg-background/50 border-border text-foreground text-sm"
            />
          </div>

          <div className="max-w-5xl mx-auto flex justify-center">
            <Button
              type="submit"
              size="sm"
              className="bg-gold-gradient text-primary-foreground hover:opacity-90 text-xs h-7 px-6 transition-all hover:scale-[1.02] duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
