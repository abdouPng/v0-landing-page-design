"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CTAButtonProps {
  onClick?: () => void
  variant?: "primary" | "secondary"
  size?: "default" | "lg"
  className?: string
  children?: React.ReactNode
}

export function CTAButton({
  onClick,
  variant = "primary",
  size = "default",
  className,
  children,
}: CTAButtonProps) {
  const isPrimary = variant === "primary"

  return (
    <Button
      onClick={onClick}
      size={size === "lg" ? "lg" : "default"}
      className={cn(
        "font-semibold transition-all duration-300",
        isPrimary && [
          "bg-primary text-primary-foreground",
          "cta-glow",
          "hover:scale-105",
        ],
        !isPrimary && [
          "bg-secondary text-secondary-foreground",
          "border border-border",
          "hover:bg-secondary/80 hover:border-primary/50",
        ],
        size === "lg" && "h-12 px-8 text-base",
        className
      )}
    >
      {children || (
        <>
          Get Started - <span className="font-bold">$197</span>
        </>
      )}
    </Button>
  )
}
