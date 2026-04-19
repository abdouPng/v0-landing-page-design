'use client'

import Image from "next/image"
import { CTAButton } from "@/components/shared/cta-button"
import { GradientMesh } from "@/components/shared/gradient-mesh"
import { ArrowDown, Play } from "lucide-react"

interface HeroProps {
  onCTAClick: () => void
}

export function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Heavy Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-gym-vignette.jpg"
          alt="Elite Personal Trainer in Modern Gym"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Heavy Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-transparent to-background/80" />
      </div>

      {/* Animated Green Mesh Gradient */}
      <GradientMesh />

      {/* Main Content Grid */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Typography */}
          <div className="flex flex-col justify-center">
            {/* Intro Description Badge */}
            <div className="animate-fade-up mb-5 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <p className="text-sm font-medium tracking-widest uppercase text-primary">
                Hybrid Performance &mdash; By Alex Rivera
              </p>
            </div>

            {/* Intro Description */}
            <p className="animate-fade-up stagger-1 text-sm md:text-base text-muted-foreground/80 max-w-md leading-relaxed mb-5 border-l-2 border-primary/40 pl-4">
              Trusted by over 500 high-performing professionals worldwide. Our science-backed methodology
              bridges the gap between elite athletic training and the demands of a demanding career &mdash;
              so you never have to choose between peak performance and peak results.
            </p>

            {/* Headline */}
            <h1 className="animate-fade-up stagger-2 font-sans text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white text-balance mb-6">
              EVOLVE BEYOND LIMITS.
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-up stagger-3 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mb-8">
              Elite fitness programs tailored to your lifestyle. Engineered for performance, designed for results.
            </p>

            {/* CTA Button */}
            <div className="animate-fade-up stagger-4 mb-8">
              <button
                onClick={onCTAClick}
                className="relative inline-flex items-center justify-center h-14 px-8 text-base font-semibold text-primary-foreground bg-primary rounded-lg transition-all duration-300 hover:scale-105 cta-glow"
                style={{
                  boxShadow: '0 0 30px rgba(34, 197, 94, 0.5), 0 0 60px rgba(34, 197, 94, 0.3)',
                }}
              >
                Get Started
                <ArrowDown className="size-4 ml-2" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="animate-fade-up stagger-3 flex flex-col sm:flex-row gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold text-lg">500+</span>
                <span className="text-muted-foreground">Clients Transformed</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold text-lg">10+</span>
                <span className="text-muted-foreground">Years Experience</span>
              </div>
            </div>
          </div>

          {/* Right Column - Floating Glass Card */}
          <div className="hidden lg:flex justify-end">
            <div className="animate-fade-in stagger-2 relative">
              {/* Glassmorphism Card */}
              <div className="glass-card rounded-2xl p-6 backdrop-blur-2xl border border-card-glass-border w-full max-w-sm overflow-hidden">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-primary">Latest Program</span>
                  <span className="inline-flex items-center justify-center size-8 bg-primary/10 rounded-full">
                    <Play className="size-4 text-primary fill-primary" />
                  </span>
                </div>

                {/* Program Preview */}
                <div className="mb-4 rounded-lg overflow-hidden border border-card-glass-border/50">
                  <div className="relative w-full pt-[56.25%] bg-card/50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="size-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <Play className="size-6 text-primary fill-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Program Details */}
                <h3 className="text-base font-bold text-foreground mb-2">
                  Hypertrophy Accelerator
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  90-day intensive protocol combining heavy strength with metabolic conditioning.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-card-glass-border/50">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">12</div>
                    <div className="text-xs text-muted-foreground">Weeks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">45m</div>
                    <div className="text-xs text-muted-foreground">Per Session</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">4x</div>
                    <div className="text-xs text-muted-foreground">Per Week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ArrowDown className="size-6 text-muted-foreground" />
      </div>
    </section>
  )
}
