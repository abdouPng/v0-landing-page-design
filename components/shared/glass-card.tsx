import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-xl p-6 lg:p-8",
        hover && "transition-all duration-300 hover:scale-[1.02] hover:border-primary/30",
        className
      )}
    >
      {children}
    </div>
  )
}
