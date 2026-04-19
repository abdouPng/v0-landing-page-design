"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { CTAButton } from "@/components/shared/cta-button"

interface MobileNavProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCTAClick: () => void
}

const navLinks = [
  { label: "Program", href: "#features" },
  { label: "Results", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contact" },
]

export function MobileNav({ open, onOpenChange, onCTAClick }: MobileNavProps) {
  const handleLinkClick = () => {
    onOpenChange(false)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="bg-background border-border w-full sm:max-w-sm">
        <SheetHeader>
          <SheetTitle className="text-left text-xl font-bold text-foreground">
            HYBRID<span className="text-primary">.</span>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-6 mt-8 px-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto px-4 pb-8">
          <CTAButton onClick={onCTAClick} size="lg" className="w-full">
            Get Started - $197
          </CTAButton>
        </div>
      </SheetContent>
    </Sheet>
  )
}
