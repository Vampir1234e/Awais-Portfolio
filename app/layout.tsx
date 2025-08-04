import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Syed Awais Mahboob - SEO Specialist & Digital Growth Strategist",
  description:
    "Professional SEO Specialist & Digital Growth Strategist helping businesses rank, convert & scale through data-driven strategies.",
  keywords: "SEO specialist, digital growth strategist, conversion funnels, web design, CRM automation",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
