"use client"

import Image from "next/image"
import { CTAButton } from "@/components/shared/cta-button"
import { GradientMesh } from "@/components/shared/gradient-mesh"
import { ArrowDown } from "lucide-react"

interface HeroProps {
  onCTAClick: () => void
}

export function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-coach.jpg"
          alt="Alex Rivera - Hybrid Performance Coach"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Animated Gradient Mesh Background */}
      <GradientMesh />

      {/* Content */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Limited Spots Available
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up stagger-1 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground text-balance">
              Build an Athletic Physique on a{" "}
              <span className="text-primary">Professional Schedule</span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-up stagger-2 mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              The 90-day science-based hypertrophy and mobility system designed for
              busy professionals. Real results in just 45 minutes a day.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-up stagger-3 mt-8 flex flex-col sm:flex-row gap-4">
              <CTAButton onClick={onCTAClick} size="lg">
                Start Your Transformation - $197
              </CTAButton>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Learn More
                <ArrowDown className="size-4" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="animate-fade-up stagger-4 mt-12 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-primary font-semibold">500+</span>
                <span>Clients Transformed</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-primary font-semibold">10+</span>
                <span>Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="size-6 text-muted-foreground" />
      </div>
    </section>
  )
}
