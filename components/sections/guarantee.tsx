"use client"

import { SectionWrapper } from "@/components/shared/section-wrapper"
import { CTAButton } from "@/components/shared/cta-button"
import { Shield } from "lucide-react"

interface GuaranteeProps {
  onCTAClick: () => void
}

export function Guarantee({ onCTAClick }: GuaranteeProps) {
  return (
    <SectionWrapper className="bg-card/30">
      <div className="animate-fade-up max-w-3xl mx-auto">
        <div className="relative rounded-2xl border-2 border-primary/30 bg-card p-8 md:p-12 text-center overflow-hidden">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
          
          <div className="relative">
            {/* Shield Icon */}
            <div className="flex items-center justify-center size-16 rounded-full bg-primary/10 border border-primary/20 mx-auto mb-6">
              <Shield className="size-8 text-primary" />
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              30-Day Performance Guarantee
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Try the complete Hybrid Performance system for 30 days. If you don&apos;t
              see measurable progress in strength, mobility, or body composition -
              I&apos;ll refund every penny. No questions asked.
            </p>

            <CTAButton onClick={onCTAClick} size="lg">
              Start Risk-Free Today
            </CTAButton>

            <p className="mt-6 text-sm text-muted-foreground">
              Join 500+ professionals who made the commitment.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
