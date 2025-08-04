import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Target, Palette, Settings, Video, FileText } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services - Syed Awais Mahboob",
  description:
    "Comprehensive digital marketing services including SEO, funnel optimization, web design, and CRM automation.",
}

export default function ServicesPage() {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Complete SEO services to dominate search rankings and drive organic traffic.",
      features: ["On-page SEO", "Off-page SEO", "Local SEO", "Technical SEO"],
      color: "blue",
    },
    {
      icon: Target,
      title: "Funnel Strategy & Optimization",
      description: "High-converting sales funnels that turn visitors into customers and maximize ROI.",
      features: ["Landing Pages", "Sales Funnels", "A/B Testing", "Conversion Optimization"],
      color: "green",
    },
    {
      icon: Palette,
      title: "Web Design",
      description: "Modern, fast-loading websites designed to convert visitors into paying customers.",
      features: ["Responsive Design", "Speed Optimization", "UI/UX Design", "Mobile-First"],
      color: "purple",
    },
    {
      icon: FileText,
      title: "Content Strategy & Blogging",
      description: "Strategic content creation that drives traffic and generates revenue.",
      features: ["Content Planning", "SEO Writing", "Blog Strategy", "Content Optimization"],
      color: "blue",
    },
    {
      icon: Settings,
      title: "CRM Automation (Go HighLevel)",
      description: "Complete CRM setup and automation to streamline your business processes.",
      features: ["Go HighLevel Setup", "Email Automation", "Lead Management", "Sales Pipeline"],
      color: "green",
    },
    {
      icon: Video,
      title: "Whiteboard Animation",
      description: "Engaging whiteboard animations that explain your products and services effectively.",
      features: ["Script Writing", "Storyboarding", "Professional Voiceover", "Custom Animations"],
      color: "purple",
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          icon: "text-blue-600",
          bg: "bg-blue-100",
          border: "border-blue-200",
          dot: "bg-blue-600",
        }
      case "green":
        return {
          icon: "text-green-600",
          bg: "bg-green-100",
          border: "border-green-200",
          dot: "bg-green-600",
        }
      case "purple":
        return {
          icon: "text-purple-600",
          bg: "bg-purple-100",
          border: "border-purple-200",
          dot: "bg-purple-600",
        }
      default:
        return {
          icon: "text-blue-600",
          bg: "bg-blue-100",
          border: "border-blue-200",
          dot: "bg-blue-600",
        }
    }
  }

  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            Comprehensive <span className="text-blue-600">Digital Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From SEO to conversion optimization, I provide end-to-end digital marketing services to help your business
            grow and succeed online.
          </p>
          {/* Local SEO Highlight */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-6 text-white text-center mt-8 max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed">
              <strong>Local SEO is one of my strongest specialties</strong> — from optimizing Google Business Profiles
              to securing map pack rankings that drive real foot traffic.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color)
            return (
              <Card
                key={index}
                className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${colors.bg} ${colors.border} border`}
                  >
                    <service.icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-base text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full mr-3 ${colors.dot}`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Ready to <span className="text-green-600">Transform</span> Your Business?
            </h2>
            <p className="text-gray-600 mb-6">
              Let's discuss how these services can help you achieve your digital marketing goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started Today
              </a>
              <a
                href="/case-studies"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
