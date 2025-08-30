import Link from "next/link"

type FeatureKey = "mapping" | "cities" | "simulator" | "content" | "chatbot"

const FEATURES: { key: FeatureKey; label: string; href: string }[] = [
  { key: "mapping", label: "Mapping", href: "/mapping" },
  { key: "cities", label: "Cities", href: "/cities" },
  { key: "simulator", label: "Simulator", href: "/simulator" },
  { key: "content", label: "Content", href: "/content" },
  { key: "chatbot", label: "Chatbot", href: "/chatbot" },
]

// Per-feature subtle tint that matches each page's primary color
const TINTS: Record<FeatureKey, string> = {
  mapping: "bg-sky-500/10",
  cities: "bg-emerald-500/10",
  simulator: "bg-cyan-500/10",
  content: "bg-amber-500/10",
  chatbot: "bg-teal-500/10",
}

export function FeatureNavbar({ current }: { current: FeatureKey }) {
  const otherFeatures = FEATURES.filter((f) => f.key !== current)
  const tintClass = TINTS[current]

  return (
    <div className="sticky top-0 z-50 w-full">
      <nav role="navigation" aria-label="Feature navigation" className="mx-auto mt-3 max-w-5xl px-3">
        <div
          className={`
            flex items-center justify-between
            rounded-2xl
            bg-white/95
            backdrop-blur-md
            ring-1 ring-slate-900/10
            px-4 py-2
            shadow-lg
          `}
        >
          {/* Left: Home link */}
          <div className="flex items-center">
            <Link
              href="/"
              className="
                text-sm text-slate-900 hover:text-slate-700 font-semibold
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30
                transition-colors
              "
            >
              Home
            </Link>
          </div>

          {/* Right: Other feature links */}
          <div className="flex items-center gap-1">
            {otherFeatures.map((f) => (
              <Link
                key={f.key}
                href={f.href}
                className="
                  rounded-md px-3 py-1.5 text-sm font-medium
                  text-slate-700 hover:text-slate-900
                  hover:bg-slate-100
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30
                  transition-colors
                "
              >
                {f.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}
