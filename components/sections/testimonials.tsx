"use client"

import Image from "next/image"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { GlassCard } from "@/components/shared/glass-card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Mark S.",
    role: "CEO, Tech Startup",
    image: "/images/testimonial-mark.jpg",
    quote:
      "I've tried every program out there. This is the first one that actually fits my schedule AND delivers results. Down 25lbs and stronger than I've been in years.",
    rating: 5,
  },
  {
    name: "Sarah D.",
    role: "Investment Banker",
    image: "/images/testimonial-sarah.jpg",
    quote:
      "The mobility work alone was worth it. My back pain is gone, and I finally have the energy to keep up with my kids after 14-hour days.",
    rating: 5,
  },
  {
    name: "James L.",
    role: "Entrepreneur",
    image: "/images/testimonial-james.jpg",
    quote:
      "Alex's system is no-BS. Clear instructions, efficient workouts, real results. I've built more muscle in 90 days than in the last 2 years of gym wandering.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <div className="text-center mb-16">
        <span className="animate-fade-up text-sm font-medium text-primary uppercase tracking-wider">
          Real Results
        </span>
        <h2 className="animate-fade-up stagger-1 mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
          Trusted by High Performers
        </h2>
        <p className="animate-fade-up stagger-2 mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Join 500+ executives and entrepreneurs who&apos;ve transformed their bodies
          without sacrificing their careers.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <GlassCard
            key={testimonial.name}
            className={`animate-fade-up stagger-${index + 1}`}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="size-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-foreground leading-relaxed mb-6">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="relative size-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  )
}
