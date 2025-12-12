import HeroSection from "@/components/hero-section"
import LeadForm from "@/components/lead-form"
import AboutSection from "@/components/about-section"
import FeaturedProjects from "@/components/featured-projects"
import SecondaryProperties from "@/components/secondary-properties"
import WhyInvestDubai from "@/components/why-invest-dubai"
import ProcessSection from "@/components/process-section"
import Testimonials from "@/components/testimonials"
import DevelopersStrip from "@/components/developers-strip"
import FAQSection from "@/components/faq-section"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <LeadForm />
      <AboutSection />
      <FeaturedProjects />
      <SecondaryProperties />
      <WhyInvestDubai />
      <ProcessSection />
      <Testimonials />
      <DevelopersStrip />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
