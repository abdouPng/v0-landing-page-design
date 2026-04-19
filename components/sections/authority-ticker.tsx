"use client"

const publications = [
  { name: "Men's Health", id: 1 },
  { name: "Forbes", id: 2 },
  { name: "Wall Street Journal", id: 3 },
  { name: "GQ", id: 4 },
  { name: "Business Insider", id: 5 },
]

export function AuthorityTicker() {
  return (
    <section className="w-full py-12 border-y border-border overflow-hidden">
      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mb-6">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-wider">
          As Featured In
        </p>
      </div>

      {/* Ticker Container */}
      <div className="relative">
        <div className="flex animate-ticker">
          {/* First set of logos */}
          {[...publications, ...publications].map((pub, index) => (
            <div
              key={`${pub.id}-${index}`}
              className="flex items-center justify-center px-12 md:px-16"
            >
              <span className="text-2xl md:text-3xl font-bold text-muted-foreground/40 whitespace-nowrap tracking-tight">
                {pub.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
