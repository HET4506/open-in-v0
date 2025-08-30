import type { ReactNode } from "react"
import { FeatureNavbar } from "@/src/components/feature-navbar"

export default function MappingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mapping-theme min-h-screen">
      <FeatureNavbar current="mapping" />
      <main className="pt-16">
        {children}
      </main>
    </div>
  )
}
