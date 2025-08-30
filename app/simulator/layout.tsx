import type { ReactNode } from "react"
import { FeatureNavbar } from "@/src/components/feature-navbar"

export default function SimulatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="simulator-theme min-h-screen">
      <FeatureNavbar current="simulator" />
      <main className="pt-16">
        {children}
      </main>
    </div>
  )
}
