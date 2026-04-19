"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  animate?: boolean
}

export function SectionWrapper({
  children,
  className,
  id,
  animate = true,
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!animate) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-fade-up, .animate-fade-in").forEach((el) => {
              el.classList.add("in-view")
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [animate])

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn("w-full py-20 lg:py-28 px-4 md:px-8 lg:px-16", className)}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}
