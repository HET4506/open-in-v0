"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/src/components/ui/animated-background"

type City = {
  name: string
  country: string
  population: string
  blurb: string
  imageAlt: string
  imageUrl: string
}

const CITIES: City[] = [
  {
    name: "Tokyo",
    country: "Japan",
    population: "37.4M metro",
    blurb:
      "A hypermodern megacity blending ancient tradition with cutting‑edge innovation and ultra‑efficient transit.",
    imageAlt: "Tokyo skyline at night",
    imageUrl: "/tokyo-skyline.png",
  },
  {
    name: "New York",
    country: "USA",
    population: "19.6M metro",
    blurb: "The city of endless energy—finance, media, and culture converge across its iconic five boroughs.",
    imageAlt: "New York skyline at sunset",
    imageUrl: "/new-york-skyline.png",
  },
  {
    name: "London",
    country: "United Kingdom",
    population: "14.8M metro",
    blurb: "A global capital of finance and the arts, layered with history and world‑class public spaces.",
    imageAlt: "London skyline with the Thames",
    imageUrl: "/london-skyline.png",
  },
  {
    name: "Paris",
    country: "France",
    population: "11.3M metro",
    blurb: "Design, gastronomy, and culture—paired with evolving tech ecosystems and sustainable urban policy.",
    imageAlt: "Paris skyline with Eiffel Tower",
    imageUrl: "/paris-skyline.png",
  },
  {
    name: "Singapore",
    country: "Singapore",
    population: "5.9M",
    blurb: "A model for smart, green urbanism—dense, efficient, and remarkably well‑connected.",
    imageAlt: "Singapore Marina Bay skyline",
    imageUrl: "/singapore-skyline.png",
  },
]

function CityCard({ city }: { city: City }) {
  return (
    <div
      className="hover-light rounded-xl overflow-hidden border border-primary/20 bg-[hsl(var(--card))] text-foreground transition-transform duration-300 hover:scale-[1.02]"
      role="article"
      aria-label={`${city.name}, ${city.country}`}
    >
      <div className="relative w-full h-40">
        {/* Images: use static path, not blob URL */}
        <Image
          src={city.imageUrl || "/placeholder.svg"}
          alt={city.imageAlt}
          fill
          sizes="(min-width: 1024px) 320px, 100vw"
          className="object-cover"
          priority={false}
        />
      </div>
      <div className="p-5 bg-[hsl(var(--card))]">
        <div className="flex items-baseline justify-between">
          <h3 className="text-lg font-semibold tracking-wide">{city.name}</h3>
          <span className="text-xs text-muted-foreground">{city.country}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{city.population}</p>
        <p className="mt-3 text-sm leading-relaxed text-pretty">{city.blurb}</p>
        <div className="mt-4">
          <Button
            className="glow-button rounded-full px-4 py-2 text-sm border-primary/30 bg-transparent hover:bg-primary/20"
            variant="outline"
          >
            Explore
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function CitiesPage() {
  return (
    <AnimatedBackground className="min-h-screen">
      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-light tracking-[0.25em] text-foreground drop-shadow-lg mb-3 animate-glow-pulse">
            CITIES
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            A minimal look at five global hubs—consistent with our hydrosphere theme and atmospheric effects.
          </p>
        </header>

        <section
          aria-labelledby="top-cities"
          className="atmospheric-bg rounded-2xl p-6 md:p-8 border border-primary/10"
        >
          <h2 id="top-cities" className="sr-only">
            Top five cities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {CITIES.map((c) => (
              <CityCard key={c.name} city={c} />
            ))}
          </div>
        </section>
      </main>
    </AnimatedBackground>
  )
}
