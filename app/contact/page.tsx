"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Instagram, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { GlassCard } from "@/components/shared/glass-card"
import { Footer } from "@/components/layout/footer"
import { FinalCTA } from "@/components/sections/final-cta"
import { CheckoutModal } from "@/components/shared/checkout-modal"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Anchor for top of page */}
      <div id="top" />
      
      {/* Header */}
      <header className="w-full py-4 px-4 md:px-8 lg:px-16 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
          <span className="text-xl font-bold text-foreground">
            HYBRID<span className="text-primary">.</span>
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Info */}
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Get in Touch
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground text-balance">
                Contact Alex
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Have questions about the Hybrid Performance program? Want to learn
                more about how it can work for your specific situation? Drop a
                message and I&apos;ll get back to you within 24 hours.
              </p>

              {/* Contact Info */}
              <div className="mt-10 space-y-6">
                <GlassCard className="flex items-center gap-4 p-4" hover={false}>
                  <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 border border-primary/20">
                    <Mail className="size-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="text-foreground">alex@hybridperformance.com</div>
                  </div>
                </GlassCard>

                <GlassCard className="flex items-center gap-4 p-4" hover={false}>
                  <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 border border-primary/20">
                    <Instagram className="size-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Instagram</div>
                    <div className="text-foreground">@alexrivera_hybrid</div>
                  </div>
                </GlassCard>

                <GlassCard className="flex items-center gap-4 p-4" hover={false}>
                  <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 border border-primary/20">
                    <Linkedin className="size-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">LinkedIn</div>
                    <div className="text-foreground">Alex Rivera</div>
                  </div>
                </GlassCard>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <GlassCard hover={false}>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="flex items-center justify-center size-16 rounded-full bg-primary/10 border border-primary/20 mx-auto mb-6">
                      <Send className="size-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      Message Sent!
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                    <Link href="/">
                      <Button variant="outline" className="gap-2">
                        <ArrowLeft className="size-4" />
                        Back to Home
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        required
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your fitness goals..."
                        rows={5}
                        required
                        className="bg-background resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-primary text-primary-foreground font-semibold cta-glow hover:scale-[1.02] transition-all duration-300"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </GlassCard>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <FinalCTA onCTAClick={() => setIsModalOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Checkout Modal */}
      <CheckoutModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  )
}
