"use client"
import { LandingHeader } from "@/components/landing/landing-header"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { RolesSection } from "@/components/landing/roles-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"

export default function LandingPage() {
  return (
    <BackgroundBeamsWithCollision className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-white">
      <LandingHeader />
      <HeroSection />
      <FeaturesSection />
      <RolesSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </BackgroundBeamsWithCollision>
  )
}
