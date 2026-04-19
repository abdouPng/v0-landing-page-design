"use client"

import { SectionWrapper } from "@/components/shared/section-wrapper"
import { GlassCard } from "@/components/shared/glass-card"
import { CTAButton } from "@/components/shared/cta-button"
import { FileText, Bone, Play } from "lucide-react"

interface FeaturesProps {
  onCTAClick: () => void
}

const features = [
  {
    icon: FileText,
    title: "The Blueprint",
    subtitle: "90-Day Hybrid Program",
    description:
      "A complete periodized training system combining strength, hypertrophy, and conditioning. Designed for 45-minute sessions that fit your schedule.",
    highlights: ["Progressive overload tracking", "Auto-regulated intensity", "Weekly periodization"],
  },
  {
    icon: Bone,
    title: "Mobility Matrix",
    subtitle: "12-Week Flexibility Protocol",
    description:
      "Targeted mobility work that eliminates pain points and improves athletic performance. Perfect for desk-bound professionals.",
    highlights: ["Daily 10-min routines", "Joint-specific protocols", "Recovery optimization"],
  },
  {
    icon: Play,
    title: "The Dashboard",
    subtitle: "Private Video Portal",
    description:
      "HD video demonstrations for every exercise with form cues and common mistakes. Plus progress tracking to keep you accountable.",
    highlights: ["150+ HD video demos", "Progress analytics", "Lifetime access"],
  },
]

export function Features({ onCTAClick }: FeaturesProps) {
  return (
    <SectionWrapper id="features" className="bg-card/30">
      <div className="text-center mb-16">
        <span className="animate-fade-up text-sm font-medium text-primary uppercase tracking-wider">
          What You Get
        </span>
        <h2 className="animate-fade-up stagger-1 mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
          Everything You Need to Transform
        </h2>
        <p className="animate-fade-up stagger-2 mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A complete system designed to build strength, mobility, and an athletic
          physique - all in 45 minutes a day.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <GlassCard
            key={feature.title}
            className={`animate-fade-up stagger-${index + 1} flex flex-col`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 border border-primary/20">
                <feature.icon className="size-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-primary">{feature.subtitle}</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 flex-grow">
              {feature.description}
            </p>

            <ul className="space-y-2">
              {feature.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2 text-sm">
                  <span className="size-1.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>

      {/* CTA */}
      <div className="animate-fade-up mt-16 text-center">
        <CTAButton onClick={onCTAClick} size="lg">
          Get Instant Access - $197
        </CTAButton>
        <p className="mt-4 text-sm text-muted-foreground">
          One-time payment. Lifetime access. No subscriptions.
        </p>
      </div>
    </SectionWrapper>
  )
}
