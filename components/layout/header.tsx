"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTAButton } from "@/components/shared/cta-button"
import { MobileNav } from "./mobile-nav"
import { cn } from "@/lib/utils"

interface HeaderProps {
  onCTAClick: () => void
}

export function Header({ onCTAClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "header-glass py-3" : "bg-transparent py-4"
        )}
      >
        <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">
              HYBRID<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Program
            </a>
            <a
              href="#testimonials"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Results
            </a>
            <a
              href="#faq"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </a>
            <a
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <CTAButton onClick={onCTAClick} size="default">
              Get Started
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </Button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        open={isMobileMenuOpen}
        onOpenChange={setIsMobileMenuOpen}
        onCTAClick={() => {
          setIsMobileMenuOpen(false)
          onCTAClick()
        }}
      />
    </>
  )
}
