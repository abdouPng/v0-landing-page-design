"use client"

import { SectionWrapper } from "@/components/shared/section-wrapper"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How much time do I need per day?",
    answer:
      "Each workout is designed to be completed in 45 minutes or less. The mobility routines add an optional 10 minutes. You can train 4-5 days per week depending on your schedule and recovery capacity.",
  },
  {
    question: "Do I need a gym membership or special equipment?",
    answer:
      "The program is designed for a standard commercial gym with basic equipment: barbells, dumbbells, cables, and a few machines. No specialized equipment required. I also include home workout alternatives for travel.",
  },
  {
    question: "What if I'm a complete beginner?",
    answer:
      "The program includes beginner, intermediate, and advanced progressions for every exercise. The HD video library covers proper form from the ground up, and the auto-regulation system ensures you're working at the right intensity for your level.",
  },
  {
    question: "How is this different from other fitness programs?",
    answer:
      "Most programs are designed for people with unlimited time. Hybrid Performance is built specifically for professionals who need maximum results in minimum time. Every element is optimized for efficiency without sacrificing effectiveness.",
  },
  {
    question: "What if it doesn't work for me?",
    answer:
      "You're covered by our 30-day money-back guarantee. If you follow the program and don't see measurable progress, I'll refund your purchase in full. No hoops to jump through.",
  },
]

export function FAQ() {
  return (
    <SectionWrapper id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="animate-fade-up text-sm font-medium text-primary uppercase tracking-wider">
            Questions
          </span>
          <h2 className="animate-fade-up stagger-1 mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Frequently Asked
          </h2>
        </div>

        <Accordion type="single" collapsible className="animate-fade-up stagger-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-border"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  )
}
