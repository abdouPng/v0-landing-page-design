"use client"

import Image from "next/image"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { GlassCard } from "@/components/shared/glass-card"
import { Trophy, Users, GraduationCap } from "lucide-react"

const stats = [
  {
    icon: Trophy,
    value: "10+",
    label: "Years Experience",
  },
  {
    icon: Users,
    value: "500+",
    label: "Clients Transformed",
  },
  {
    icon: GraduationCap,
    value: "D1",
    label: "Athletic Background",
  },
]

export function CoachIntro() {
  return (
    <SectionWrapper id="coach">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="animate-fade-up relative aspect-[3/4] lg:aspect-square rounded-2xl overflow-hidden">
          <Image
            src="/images/coach-portrait.jpg"
            alt="Alex Rivera - Hybrid Performance Coach"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div>
          <span className="animate-fade-up text-sm font-medium text-primary uppercase tracking-wider">
            Meet Your Coach
          </span>
          <h2 className="animate-fade-up stagger-1 mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Alex Rivera
          </h2>
          <p className="animate-fade-up stagger-2 mt-6 text-lg text-muted-foreground leading-relaxed">
            Former Division 1 athlete turned elite performance coach. After 10 years
            of training executives and entrepreneurs, I&apos;ve developed the Hybrid
            Performance system - a science-based approach that delivers results
            without sacrificing your career or lifestyle.
          </p>
          <p className="animate-fade-up stagger-3 mt-4 text-lg text-muted-foreground leading-relaxed">
            My clients aren&apos;t just looking to get in shape - they want to perform
            at the highest level in every area of life. That&apos;s exactly what this
            program delivers.
          </p>

          {/* Stats Grid */}
          <div className="animate-fade-up stagger-4 mt-10 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <GlassCard key={stat.label} className="p-4 text-center">
                <stat.icon className="size-6 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
