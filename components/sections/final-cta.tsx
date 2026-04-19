"use client"

import { SectionWrapper } from "@/components/shared/section-wrapper"
import { CTAButton } from "@/components/shared/cta-button"

interface FinalCTAProps {
  onCTAClick: () => void
}

export function FinalCTA({ onCTAClick }: FinalCTAProps) {
  return (
    <SectionWrapper className="relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      
      <div className="relative text-center">
        <h2 className="animate-fade-up text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
          Stop Guessing.{" "}
          <span className="text-primary">Start Executing.</span>
        </h2>
        
        <p className="animate-fade-up stagger-1 mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          You&apos;ve seen what&apos;s possible. The system is proven. The only question
          left is: are you ready to commit to becoming the strongest version of
          yourself?
        </p>

        <div className="animate-fade-up stagger-2 mt-10 flex flex-col items-center gap-4">
          <CTAButton onClick={onCTAClick} size="lg" className="animate-subtle-pulse">
            Get Started Now - $197
          </CTAButton>
          
          <p className="text-sm text-muted-foreground">
            One-time payment • Lifetime access • 30-day guarantee
          </p>
        </div>

        {/* Final trust indicators */}
        <div className="animate-fade-up stagger-3 mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary" />
            <span>Instant Access</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary" />
            <span>HD Video Library</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary" />
            <span>Private Dashboard</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary" />
            <span>Lifetime Updates</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
