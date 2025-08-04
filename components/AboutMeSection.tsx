import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, TrendingUp, Code, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutMeSection() {
  const aboutCards = [
    {
      icon: Briefcase,
      title: "Professional Journey",
      description:
        "From Mechanical Engineering to Digital Marketing mastery, combining analytical thinking with creative strategy to deliver exceptional results.",
      color: "blue",
    },
    {
      icon: TrendingUp,
      title: "Strategic Growth",
      description:
        "Specialized in scaling businesses through data-driven SEO, conversion funnels, and local search optimization that drives real revenue.",
      color: "green",
    },
    {
      icon: Code,
      title: "Technical Philosophy",
      description:
        "Every strategy is backed by technical precision, thorough analysis, and measurable outcomes. No guesswork, just proven methodologies.",
      color: "purple",
    },
    {
      icon: Heart,
      title: "Beyond the Metrics",
      description:
        "Building lasting partnerships with clients, understanding their unique challenges, and delivering solutions that create sustainable growth.",
      color: "blue",
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          icon: "text-blue-600",
          bg: "bg-blue-50",
          border: "border-blue-100",
        }
      case "green":
        return {
          icon: "text-green-600",
          bg: "bg-green-50",
          border: "border-green-100",
        }
      case "purple":
        return {
          icon: "text-purple-600",
          bg: "bg-purple-50",
          border: "border-purple-100",
        }
      default:
        return {
          icon: "text-blue-600",
          bg: "bg-blue-50",
          border: "border-blue-100",
        }
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Understanding the person behind the results - my approach, philosophy, and what drives me to deliver
            excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {aboutCards.map((card, index) => {
            const colors = getColorClasses(card.color)
            return (
              <Card
                key={index}
                className={`${colors.bg} ${colors.border} border shadow-sm hover:shadow-md transition-all duration-300 group`}
              >
                <CardContent className="p-8">
                  <card.icon className={`w-10 h-10 ${colors.icon} mb-4 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Local SEO Highlight */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-white text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Local SEO Specialty</h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            <strong>Local SEO is one of my strongest specialties</strong> — from optimizing Google Business Profiles to
            securing map pack rankings that drive real foot traffic. I've helped dozens of local businesses dominate
            their markets and increase revenue through strategic local search optimization.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white group" asChild>
            <Link href="/case-studies">
              See My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
