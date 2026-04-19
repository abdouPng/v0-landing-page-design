"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Check, Shield, Clock, Zap } from "lucide-react"
import { GlassCard } from "./glass-card"

interface CheckoutModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const benefits = [
  "Full 90-Day Hybrid Blueprint",
  "12-Week Mobility Matrix",
  "HD Video Exercise Library",
  "Private Progress Dashboard",
  "Weekly Check-in Templates",
  "Lifetime Updates",
]

export function CheckoutModal({ open, onOpenChange }: CheckoutModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Hybrid Performance Program
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Transform your body in 90 days with science-based training
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <GlassCard hover={false} className="p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground line-through">$397</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-primary">$197</span>
                <span className="text-muted-foreground">one-time</span>
              </div>
            </div>

            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <Check className="size-5 text-primary shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="size-4 text-primary" />
              <span>30-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-primary" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-primary" />
              <span>Lifetime Updates</span>
            </div>
          </div>

          <Button
            className="w-full h-12 bg-primary text-primary-foreground font-semibold text-lg cta-glow hover:scale-[1.02] transition-all duration-300"
            onClick={() => {
              // Placeholder for checkout flow
              alert("Checkout flow placeholder - integrate Stripe here")
            }}
          >
            Complete Purchase - $197
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Secure checkout. 256-bit SSL encryption.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
