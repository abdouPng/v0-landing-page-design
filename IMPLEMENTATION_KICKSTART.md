# Alex Rivera: Hybrid Performance - Implementation Kickstart

## Project Overview

A high-conversion, single-page landing page for "Alex Rivera: Hybrid Performance" fitness coaching program. Premium Fitness Tech aesthetic with dark mode Zinc palette and Electric Emerald accent.

---

## Design Token System

### Color Palette

```css
/* Primary Background & Surface */
--background: 240 10% 3.9%;        /* Near black - main bg */
--foreground: 0 0% 98%;            /* White - primary text */

/* Card & Surface Variants */
--card: 240 10% 6%;                /* Elevated surface */
--card-foreground: 0 0% 98%;
--card-glass: 240 10% 8% / 0.6;    /* Glass effect base */

/* Muted Elements */
--muted: 240 5% 18%;               /* Subtle backgrounds */
--muted-foreground: 240 5% 65%;    /* Secondary text */

/* Accent - Electric Emerald */
--primary: 158 64% 40%;            /* #10b981 - CTA buttons */
--primary-foreground: 0 0% 100%;
--primary-glow: 158 64% 40% / 0.4; /* Button glow effect */

/* Borders & Rings */
--border: 240 5% 18%;              /* Subtle borders */
--ring: 158 64% 40%;               /* Focus rings - emerald */

/* Semantic */
--destructive: 0 62% 50%;
--destructive-foreground: 0 0% 98%;

/* Utility */
--radius: 0.75rem;
```

### Typography Scale (Geist Sans)

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 (Hero) | 4rem / 5rem (lg) | 800 | 1.1 |
| H2 (Section) | 2.5rem / 3rem (lg) | 700 | 1.2 |
| H3 (Card) | 1.25rem | 600 | 1.4 |
| Body | 1rem | 400 | 1.6 |
| Body Large | 1.125rem | 400 | 1.6 |
| Small/Caption | 0.875rem | 400 | 1.5 |

### Spacing Scale

- Section padding: `py-20 lg:py-28`
- Container max-width: Full width with `px-4 md:px-8 lg:px-16`
- Card padding: `p-6 lg:p-8`
- Gap between elements: `gap-6` / `gap-8` / `gap-12`

---

## Component Architecture

```
/app
  ├── page.tsx                    # Main landing page (imports sections)
  ├── contact/page.tsx            # Contact Marcus page
  ├── layout.tsx                  # Root layout with metadata
  └── globals.css                 # Design tokens & base styles

/components
  ├── layout/
  │   ├── header.tsx              # Sticky header with mobile menu
  │   ├── footer.tsx              # Minimalist footer
  │   └── mobile-nav.tsx          # Mobile navigation drawer
  │
  ├── sections/
  │   ├── hero.tsx                # Hero section with CTA
  │   ├── authority-ticker.tsx    # Logo carousel
  │   ├── coach-intro.tsx         # Meet Your Coach + stats
  │   ├── features.tsx            # 3-column program features
  │   ├── testimonials.tsx        # Social proof cards
  │   ├── guarantee.tsx           # Risk-free guarantee box
  │   ├── faq.tsx                 # FAQ accordion
  │   └── final-cta.tsx           # Bottom CTA section
  │
  ├── ui/                         # shadcn components (existing)
  │
  └── shared/
      ├── cta-button.tsx          # Reusable CTA with glow effect
      ├── glass-card.tsx          # Reusable glass morphism card
      ├── section-wrapper.tsx     # Consistent section layout
      ├── checkout-modal.tsx      # CTA checkout modal
      └── scroll-to-top.tsx       # Smooth scroll button
```

### File Size Guidelines

- Each component file: ~100-400 lines max
- Section components: ~200-400 lines
- Shared/UI components: ~50-150 lines
- Page files: ~100-200 lines (composition only)

---

## Section Breakdown

### 1. Header (Sticky)

- **Desktop**: Logo (left) + "Buy Now" button (right)
- **Mobile**: Logo (left) + Hamburger icon (right)
- **Behavior**: Transparent on top, glass blur on scroll
- **Animation**: Fade in background on scroll

### 2. Hero Section

- **Layout**: Full-width, min-height 90vh
- **Content**: H1 + subtext + CTA button + hero image
- **Image**: Generated fitness coach placeholder
- **CTA**: Opens checkout modal
- **Animation**: Staggered fade-in on load

### 3. Authority Ticker

- **Layout**: Full-width horizontal row
- **Content**: Grayscale logos (Men's Health, Forbes, WSJ)
- **Style**: Low opacity (30-40%), subtle separator lines
- **Animation**: Subtle infinite scroll or static display

### 4. Meet Your Coach

- **Layout**: Two-column (image + text) + 3 stat cards below
- **Stats**: "10+ Years", "500+ Clients", "D1 Background"
- **Cards**: Glass effect with emerald accent icons
- **Animation**: Fade-in on scroll

### 5. Program Features

- **Layout**: 3-column grid (responsive: 1 col mobile, 2 tablet, 3 desktop)
- **Cards**: Glass cards with Lucide icons
- **Content**: Blueprint, Mobility Matrix, Dashboard
- **CTA**: Secondary CTA button below grid
- **Animation**: Staggered reveal on scroll

### 6. Testimonials

- **Layout**: 3-column grid (responsive)
- **Cards**: Glass cards with 5-star rating, quote, attribution
- **Images**: Generated avatar placeholders
- **Animation**: Fade-up on scroll

### 7. Guarantee Section

- **Layout**: Centered, high-contrast box
- **Style**: Emerald border/accent, dark interior
- **Content**: "30-Day Performance Guarantee" messaging
- **Animation**: Scale-in on scroll

### 8. FAQ Section

- **Layout**: Centered, max-width container
- **Component**: shadcn Accordion
- **Content**: 3 placeholder questions
- **Animation**: Smooth accordion transitions

### 9. Final CTA

- **Layout**: Full-width, centered
- **Content**: "Stop Guessing. Start Executing." + CTA button
- **Style**: Gradient or subtle background treatment
- **Animation**: Pulse effect on button

### 10. Footer

- **Layout**: Two-column (copyright left, social right)
- **Content**: © 2026, Privacy Policy link, Instagram, LinkedIn icons
- **Style**: Minimal, muted colors

---

## Animation Strategy

### Scroll Animations (Intersection Observer)

| Element | Animation | Trigger |
|---------|-----------|---------|
| Section headers | Fade up + slide | 20% in view |
| Cards | Staggered fade up | 15% in view |
| Stats | Counter animation | 50% in view |
| Images | Subtle parallax | Continuous |

### Micro-interactions

- **CTA Buttons**: Glow pulse on hover, scale 1.02
- **Cards**: Subtle lift + border glow on hover
- **Links**: Underline animation on hover
- **Icons**: Rotate/bounce on hover

### Page Transitions

- **Modal**: Fade + scale in/out
- **Mobile menu**: Slide from right
- **Back to top**: Fade in after 300px scroll

---

## CTA Placement Strategy

| Location | Type | Context |
|----------|------|---------|
| Hero | Primary | Main conversion point |
| After Features | Secondary | Post-value proposition |
| After Guarantee | Primary | Post-objection removal |
| Final Section | Primary | Last chance conversion |
| Sticky Header | Compact | Always visible (desktop) |

**Total CTAs**: 5 (minimum 3 as requested)

---

## Responsive Breakpoints

| Breakpoint | Width | Layout Adjustments |
|------------|-------|-------------------|
| Mobile | < 640px | Single column, hamburger menu, stacked cards |
| Tablet | 640-1024px | 2-column grids, compact spacing |
| Desktop | > 1024px | Full 3-column grids, generous spacing |

---

## SEO Strategy

### Meta Tags

- **Title**: "Alex Rivera: Hybrid Performance | 90-Day Executive Fitness Program"
- **Description**: "Build an athletic physique on a professional schedule. Science-based hypertrophy and mobility system designed for 45-minute sessions."
- **Keywords**: fitness coach, executive fitness, hybrid training, 90-day program

### Structured Data

- Person schema for Alex Rivera
- Product schema for the program
- FAQ schema for accordion content

### Performance

- Next.js Image optimization
- Font preloading (Geist)
- Lazy loading for below-fold images
- Minimal JavaScript bundle

---

## Image Generation Plan

| Image | Description | Dimensions |
|-------|-------------|------------|
| Hero | Professional fitness coach in modern gym | 1200x800 |
| Coach Portrait | Alex Rivera headshot/portrait | 600x800 |
| Testimonial 1 | Mark S. professional headshot | 100x100 |
| Testimonial 2 | Sarah D. professional headshot | 100x100 |
| Testimonial 3 | James L. professional headshot | 100x100 |
| Logo placeholders | Men's Health, Forbes, WSJ (text-based) | SVG |

---

## Implementation Order

### Phase 1: Foundation

1. Update `globals.css` with design tokens
2. Update `layout.tsx` with Geist font + SEO metadata
3. Create `section-wrapper.tsx` shared component
4. Create `glass-card.tsx` shared component
5. Create `cta-button.tsx` with glow effect

### Phase 2: Layout Components

6. Create `header.tsx` with sticky behavior
7. Create `mobile-nav.tsx` drawer
8. Create `footer.tsx`
9. Create `scroll-to-top.tsx`

### Phase 3: Sections (Top to Bottom)

10. Create `hero.tsx` + generate hero image
11. Create `authority-ticker.tsx`
12. Create `coach-intro.tsx` + generate coach image
13. Create `features.tsx`
14. Create `testimonials.tsx` + generate avatars
15. Create `guarantee.tsx`
16. Create `faq.tsx`
17. Create `final-cta.tsx`

### Phase 4: Interactive Elements

18. Create `checkout-modal.tsx`
19. Add scroll animations
20. Add micro-interactions

### Phase 5: Pages & Polish

21. Compose `page.tsx` with all sections
22. Create `contact/page.tsx`
23. Final responsive testing
24. Performance optimization

---

## Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| State Management | None (props only) | Prototype phase, no complex state |
| Animation Library | CSS + Intersection Observer | Lightweight, no extra dependencies |
| Form Handling | None | No email capture on this page |
| Image Optimization | Next.js Image | Built-in, automatic |
| Icons | Lucide React | Already in shadcn stack |

---

## Notes

- All content is placeholder - client will provide final copy
- Images are generated placeholders - will be replaced
- FAQs are examples - will be edited later
- Color contrast will be tested and adjusted if needed
- Glass effects may need opacity tweaks based on testing

---

**Ready for implementation.**
