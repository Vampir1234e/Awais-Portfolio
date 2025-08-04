import Hero from "@/components/Hero"
import KeyAchievements from "@/components/KeyAchievements"
import AboutMeSection from "@/components/AboutMeSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Syed Awais Mahboob - SEO Specialist & Digital Growth Strategist",
  description:
    "Professional SEO Specialist & Digital Growth Strategist with 3+ years experience. 50+ happy clients worldwide.",
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <KeyAchievements />
      <AboutMeSection />
    </main>
  )
}
