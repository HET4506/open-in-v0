import type { ReactNode } from "react"
import { FeatureNavbar } from "@/src/components/feature-navbar"

export default function CitiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="cities-theme min-h-screen">
      <FeatureNavbar current="cities" />
      <main className="pt-16">
        {children}
      </main>
    </div>
  )
}
