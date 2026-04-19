import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Alex Rivera: Hybrid Performance | 90-Day Executive Fitness Program',
  description: 'Build an athletic physique on a professional schedule. Science-based hypertrophy and mobility system designed for 45-minute sessions. Transform your body in 90 days.',
  keywords: ['fitness coach', 'executive fitness', 'hybrid training', '90-day program', 'hypertrophy', 'mobility', 'Alex Rivera'],
  authors: [{ name: 'Alex Rivera' }],
  creator: 'Alex Rivera',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Alex Rivera: Hybrid Performance | 90-Day Executive Fitness Program',
    description: 'Build an athletic physique on a professional schedule. Science-based hypertrophy and mobility system designed for 45-minute sessions.',
    siteName: 'Hybrid Performance',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Rivera: Hybrid Performance',
    description: 'Build an athletic physique on a professional schedule.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#10b981',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" data-scroll-behavior="smooth">
      <body className="font-sans antialiased min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
