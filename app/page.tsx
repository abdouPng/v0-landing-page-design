"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { AuthorityTicker } from "@/components/sections/authority-ticker"
import { CoachIntro } from "@/components/sections/coach-intro"
import { Features } from "@/components/sections/features"
import { Testimonials } from "@/components/sections/testimonials"
import { Guarantee } from "@/components/sections/guarantee"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"
import { CheckoutModal } from "@/components/shared/checkout-modal"
import { ScrollToTop } from "@/components/shared/scroll-to-top"

export default function Home() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const handleCTAClick = () => {
    setIsCheckoutOpen(true)
  }

  return (
    <>
      <Header onCTAClick={handleCTAClick} />
      
      <main>
        <Hero onCTAClick={handleCTAClick} />
        <AuthorityTicker />
        <CoachIntro />
        <Features onCTAClick={handleCTAClick} />
        <Testimonials />
        <Guarantee onCTAClick={handleCTAClick} />
        <FAQ />
        <FinalCTA onCTAClick={handleCTAClick} />
      </main>

      <Footer />

      <CheckoutModal open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen} />
      <ScrollToTop />
    </>
  )
}
