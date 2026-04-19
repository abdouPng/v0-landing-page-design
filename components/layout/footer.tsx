import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-8 px-4 md:px-8 lg:px-16 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright & Links */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <span className="text-sm text-muted-foreground">
            © 2026 Hybrid Performance. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <Link
              href="/contact#top"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="size-5" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
