import type { ReactNode } from "react"
import { FeatureNavbar } from "@/src/components/feature-navbar"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="content-theme min-h-screen">
      <FeatureNavbar current="content" />
      <main className="pt-16">
        {children}
      </main>
    </div>
  )
}
