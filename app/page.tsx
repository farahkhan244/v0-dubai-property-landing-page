import HeroSection from "@/components/hero-section"
import FeaturedProjects from "@/components/featured-projects"
import LeadForm from "@/components/lead-form"
import AbuDhabiSection from "@/components/abu-dhabi-section"
import WaterfrontSection from "@/components/waterfront-section"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturedProjects />
      <LeadForm />
      <AbuDhabiSection />
      <WaterfrontSection />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
