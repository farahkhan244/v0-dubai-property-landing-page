"use client"

import { Button } from "@/components/ui/button"
import SiteHeader from "@/components/site-header"
import { ArrowLeft } from "lucide-react"
import type { Project } from "@/lib/projects"
import Link from "next/link"
import LeadForm from "@/components/lead-form"
import Footer from "@/components/footer"

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <SiteHeader />

      {/* Hero Image */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute top-16 left-6 z-10">
          <Link href="/#featured-projects">
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-7 px-3 bg-background/60 backdrop-blur-sm border-border text-foreground hover:bg-white hover:text-background"
            >
              <ArrowLeft className="w-3 h-3 mr-1" />
              Back to Projects
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-6 left-0 right-0 text-center z-10">
          <div className="bg-gold-gradient text-primary-foreground px-3 py-0.5 text-[10px] font-medium inline-block mb-2">
            {project.developer}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gold-gradient">{project.name}</h1>
          <p className="text-sm text-muted-foreground mt-1">{project.location}</p>
        </div>
      </div>

      {/* Project Details */}
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          {/* Key Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-card border border-border p-4 text-center">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Starting Price</p>
              <p className="text-gold-gradient font-bold text-base">AED {project.startingPrice}</p>
            </div>
            <div className="bg-card border border-border p-4 text-center">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Property Type</p>
              <p className="text-foreground font-medium text-xs">{project.propertyType}</p>
            </div>
            <div className="bg-card border border-border p-4 text-center">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Approx. Size</p>
              <p className="text-foreground font-medium text-xs">{project.approxSize} sq ft</p>
            </div>
            <div className="bg-card border border-border p-4 text-center">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Handover</p>
              <p className="text-foreground font-medium text-xs">{project.handover}</p>
            </div>
          </div>

          {/* Payment Plan */}
          <div className="bg-card border border-border p-6 mb-8 text-center">
            <h3 className="text-gold-gradient font-bold text-sm mb-2 uppercase tracking-wider">Payment Plan</h3>
            <p className="text-foreground text-sm">{project.paymentPlan}</p>
          </div>

          {/* Project Image Gallery */}
          <div className="mb-8">
            <h3 className="text-gold-gradient font-bold text-lg mb-4 text-center">Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((img, i) => (
                <div key={i} className="overflow-hidden">
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`${project.name} - View ${i + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center space-y-3 py-6 border-t border-border">
            <h3 className="text-xl font-bold text-gold-gradient">{"Interested in " + project.name + "?"}</h3>
            <p className="text-sm text-muted-foreground">Contact Farheen Khan for exclusive pricing and availability</p>
            <div className="flex gap-3 justify-center">
              <Button
                size="sm"
                className="bg-gold-gradient text-primary-foreground hover:opacity-90 text-xs px-5 h-7 transition-all hover:scale-105 duration-300"
                asChild
              >
                <a href="https://wa.me/+971551122732" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-xs px-5 h-7 border-primary/50 text-foreground hover:bg-white hover:text-background bg-transparent transition-all hover:scale-105 duration-300"
                asChild
              >
                <a href="mailto:farheen@stageproperties.com">Email</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Form */}
      <LeadForm />

      {/* Footer */}
      <Footer />
    </main>
  )
}
