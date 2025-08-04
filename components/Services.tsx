import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Target, Palette, Settings, Video, FileText } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Complete SEO services including local, on-page, and off-page optimization to dominate search rankings.",
      features: ["Local SEO", "On-page SEO", "Off-page SEO", "Technical SEO"],
      color: "cyber-cyan",
    },
    {
      icon: Target,
      title: "Conversion Funnels",
      description: "High-converting sales funnels that turn visitors into customers and maximize your ROI.",
      features: ["Landing Pages", "Sales Funnels", "A/B Testing", "Conversion Optimization"],
      color: "cyber-magenta",
    },
    {
      icon: FileText,
      title: "Content Strategy",
      description: "Strategic content creation and optimization that drives traffic and generates revenue.",
      features: ["Content Planning", "SEO Writing", "Blog Strategy", "Content Optimization"],
      color: "cyber-aqua",
    },
    {
      icon: Palette,
      title: "Web Design & Optimization",
      description: "Modern, fast-loading websites designed to convert visitors into paying customers.",
      features: ["Responsive Design", "Speed Optimization", "UI/UX Design", "Mobile-First"],
      color: "cyber-cyan",
    },
    {
      icon: Video,
      title: "Whiteboard Animation",
      description: "Engaging whiteboard animations that explain your products and services effectively.",
      features: ["Script Writing", "Storyboarding", "Professional Voiceover", "Custom Animations"],
      color: "cyber-magenta",
    },
    {
      icon: Settings,
      title: "CRM Automation",
      description: "Complete CRM setup and automation using Go HighLevel to streamline your business processes.",
      features: ["Go HighLevel Setup", "Email Automation", "Lead Management", "Sales Pipeline"],
      color: "cyber-aqua",
    },
  ]

  return (
    <section id="services" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-magenta/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge className="cyber-badge mb-4">Services</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Comprehensive <span className="text-cyber-cyan glow-text">Digital Solutions</span>
          </h2>
          <p className="text-xl text-cyber-muted max-w-3xl mx-auto leading-relaxed">
            From SEO to conversion optimization, I provide end-to-end digital marketing services to help your business
            grow and succeed online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="cyber-card group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-${service.color}/10 border border-${service.color}/20`}
                >
                  <service.icon className={`w-6 h-6 text-${service.color}`} />
                </div>
                <CardTitle className="text-xl text-cyber-text">{service.title}</CardTitle>
                <CardDescription className="text-base text-cyber-muted">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-cyber-muted">
                      <div className={`w-1.5 h-1.5 rounded-full mr-3 bg-${service.color} glow-dot`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
