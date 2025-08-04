import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, DollarSign, Clock } from "lucide-react"

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "DentoBloom Dental Clinic",
      category: "Dental Practice",
      description: "Complete SEO overhaul and local search optimization for a growing dental practice.",
      metrics: [
        { label: "Organic Traffic", value: "+285%", icon: TrendingUp, color: "cyber-cyan" },
        { label: "New Patients", value: "+150%", icon: Users, color: "cyber-magenta" },
        { label: "Revenue Growth", value: "+200%", icon: DollarSign, color: "cyber-aqua" },
        { label: "Timeline", value: "6 months", icon: Clock, color: "cyber-cyan" },
      ],
      results:
        "Transformed their online presence with comprehensive SEO strategy, resulting in significant increase in patient bookings and revenue.",
    },
    {
      title: "SmileCare Dental",
      category: "Dental Practice",
      description: "Local SEO and conversion optimization for established dental clinic.",
      metrics: [
        { label: "Local Rankings", value: "Top 3", icon: TrendingUp, color: "cyber-magenta" },
        { label: "Phone Calls", value: "+180%", icon: Users, color: "cyber-aqua" },
        { label: "Appointment Bookings", value: "+220%", icon: DollarSign, color: "cyber-cyan" },
        { label: "Timeline", value: "4 months", icon: Clock, color: "cyber-magenta" },
      ],
      results:
        "Achieved top local search rankings and dramatically increased patient inquiries through targeted local SEO strategies.",
    },
    {
      title: "BrightSmile Orthodontics",
      category: "Dental Practice",
      description: "Complete digital marketing transformation including SEO, PPC, and conversion optimization.",
      metrics: [
        { label: "Website Traffic", value: "+320%", icon: TrendingUp, color: "cyber-aqua" },
        { label: "Lead Generation", value: "+250%", icon: Users, color: "cyber-cyan" },
        { label: "Cost Per Lead", value: "-40%", icon: DollarSign, color: "cyber-magenta" },
        { label: "Timeline", value: "8 months", icon: Clock, color: "cyber-aqua" },
      ],
      results:
        "Comprehensive digital marketing approach resulted in substantial growth in patient acquisition and reduced marketing costs.",
    },
    {
      title: "GreenLeaf Landscaping",
      category: "Home Services",
      description: "SEO and local search optimization for landscaping business in affiliate niche.",
      metrics: [
        { label: "Organic Visibility", value: "+400%", icon: TrendingUp, color: "cyber-cyan" },
        { label: "Service Requests", value: "+300%", icon: Users, color: "cyber-magenta" },
        { label: "Revenue Increase", value: "+180%", icon: DollarSign, color: "cyber-aqua" },
        { label: "Timeline", value: "5 months", icon: Clock, color: "cyber-cyan" },
      ],
      results:
        "Dominated local search results for landscaping services, leading to significant business growth and expansion.",
    },
    {
      title: "SmartTech Repairs",
      category: "Technology Services",
      description: "Local SEO and reputation management for electronics repair service.",
      metrics: [
        { label: "Local Search Ranking", value: "#1 Position", icon: TrendingUp, color: "cyber-magenta" },
        { label: "Customer Inquiries", value: "+190%", icon: Users, color: "cyber-aqua" },
        { label: "Service Bookings", value: "+160%", icon: DollarSign, color: "cyber-cyan" },
        { label: "Timeline", value: "4 months", icon: Clock, color: "cyber-magenta" },
      ],
      results:
        "Achieved top local search rankings and significantly increased customer inquiries through strategic local SEO implementation.",
    },
    {
      title: "Elite Shutters & Blinds",
      category: "Home Improvement",
      description: "E-commerce SEO and conversion rate optimization for window treatment company.",
      metrics: [
        { label: "Online Sales", value: "+275%", icon: TrendingUp, color: "cyber-aqua" },
        { label: "Conversion Rate", value: "+85%", icon: Users, color: "cyber-cyan" },
        { label: "Average Order Value", value: "+45%", icon: DollarSign, color: "cyber-magenta" },
        { label: "Timeline", value: "7 months", icon: Clock, color: "cyber-aqua" },
      ],
      results:
        "Optimized e-commerce platform and SEO strategy resulted in dramatic increase in online sales and customer engagement.",
    },
    {
      title: "Hainan Apex Traders",
      category: "B2B Trading",
      description: "Complete B2B business built from scratch - website, marketing strategy, and growth implementation.",
      metrics: [
        { label: "Website Performance", value: "+500%", icon: TrendingUp, color: "cyber-cyan" },
        { label: "Lead Quality", value: "+300%", icon: Users, color: "cyber-magenta" },
        { label: "Business Growth", value: "+250%", icon: DollarSign, color: "cyber-aqua" },
        { label: "Timeline", value: "12 months", icon: Clock, color: "cyber-cyan" },
      ],
      results:
        "Full-scale digital transformation including website development, marketing strategy, and growth implementation for international trading company.",
    },
    {
      title: "Local Service Business",
      category: "Multi-Service",
      description: "Comprehensive digital marketing strategy for growing service business.",
      metrics: [
        { label: "Multi-Channel Growth", value: "+350%", icon: TrendingUp, color: "cyber-magenta" },
        { label: "Customer Base", value: "+200%", icon: Users, color: "cyber-aqua" },
        { label: "Revenue Streams", value: "+180%", icon: DollarSign, color: "cyber-cyan" },
        { label: "Timeline", value: "9 months", icon: Clock, color: "cyber-magenta" },
      ],
      results:
        "Implemented comprehensive digital marketing strategy across multiple channels, resulting in substantial business growth and expansion.",
    },
  ]

  return (
    <section id="case-studies" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-aqua/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge className="cyber-badge mb-4">Case Studies</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Proven <span className="text-cyber-magenta glow-text">Results</span> That Speak for Themselves
          </h2>
          <p className="text-xl text-cyber-muted max-w-3xl mx-auto leading-relaxed">
            Real case studies from real clients showing measurable results and business growth through strategic SEO and
            digital marketing implementations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="cyber-card group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="cyber-badge-secondary">{study.category}</Badge>
                </div>
                <CardTitle className="text-xl text-cyber-text">{study.title}</CardTitle>
                <CardDescription className="text-base text-cyber-muted">{study.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {study.metrics.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="text-center p-3 bg-cyber-dark/50 rounded-lg border border-cyber-cyan/10 group-hover:border-cyber-cyan/30 transition-colors"
                    >
                      <metric.icon className={`w-5 h-5 mx-auto mb-1 text-${metric.color}`} />
                      <div className={`font-bold text-lg text-${metric.color} glow-text`}>{metric.value}</div>
                      <div className="text-xs text-cyber-muted">{metric.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-cyber-muted leading-relaxed">{study.results}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
