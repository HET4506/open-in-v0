import type { ReactNode } from "react"
import { FeatureNavbar } from "@/src/components/feature-navbar"

export default function ChatbotLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <FeatureNavbar current="chatbot" />
      {children}
    </>
  )
}
