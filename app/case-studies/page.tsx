import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, TrendingUp, Users, DollarSign, Clock } from "lucide-react"

const mainCaseStudies = [
  {
    title: "DentoBloom Dental Clinic",
    category: "Dental Practice",
    description: "Complete SEO overhaul and local search optimization for a growing dental practice.",
    metrics: [
      {
        label: "Organic Traffic",
        value: "+285%",
        icon: TrendingUp,
        color: "blue",
      },
      { label: "New Patients", value: "+150%", icon: Users, color: "purple" },
      {
        label: "Revenue Growth",
        value: "+200%",
        icon: DollarSign,
        color: "green",
      },
      { label: "Timeline", value: "6 months", icon: Clock, color: "blue" },
    ],
    results:
      "Transformed their online presence with comprehensive SEO strategy, resulting in significant increase in patient bookings and revenue.",
  },
  {
    title: "SmileCare Dental",
    category: "Dental Practice",
    description: "Local SEO and conversion optimization for established dental clinic.",
    metrics: [
      { label: "Local Rankings", value: "Top 3", icon: TrendingUp, color: "purple" },
      { label: "Phone Calls", value: "+180%", icon: Users, color: "green" },
      {
        label: "Appointment Bookings",
        value: "+220%",
        icon: DollarSign,
        color: "blue",
      },
      { label: "Timeline", value: "4 months", icon: Clock, color: "purple" },
    ],
    results:
      "Achieved top local search rankings and dramatically increased patient inquiries through targeted local SEO strategies.",
  },
  {
    title: "BrightSmile Orthodontics",
    category: "Dental Practice",
    description: "Complete digital marketing transformation including SEO, PPC, and conversion optimization.",
    metrics: [
      { label: "Website Traffic", value: "+320%", icon: TrendingUp, color: "green" },
      { label: "Lead Generation", value: "+250%", icon: Users, color: "blue" },
      { label: "Cost Per Lead", value: "-40%", icon: DollarSign, color: "purple" },
      { label: "Timeline", value: "8 months", icon: Clock, color: "green" },
    ],
    results:
      "Comprehensive digital marketing approach resulted in substantial growth in patient acquisition and reduced marketing costs.",
  },
  {
    title: "GreenLeaf Landscaping",
    category: "Home Services",
    description: "SEO and local search optimization for landscaping business in affiliate niche.",
    metrics: [
      {
        label: "Organic Visibility",
        value: "+400%",
        icon: TrendingUp,
        color: "blue",
      },
      { label: "Service Requests", value: "+300%", icon: Users, color: "purple" },
      {
        label: "Revenue Increase",
        value: "+180%",
        icon: DollarSign,
        color: "green",
      },
      { label: "Timeline", value: "5 months", icon: Clock, color: "blue" },
    ],
    results:
      "Dominated local search results for landscaping services, leading to significant business growth and expansion.",
  },
  {
    title: "SmartTech Repairs",
    category: "Technology Services",
    description: "Local SEO and reputation management for electronics repair service.",
    metrics: [
      {
        label: "Local Search Ranking",
        value: "#1 Position",
        icon: TrendingUp,
        color: "purple",
      },
      { label: "Customer Inquiries", value: "+190%", icon: Users, color: "green" },
      {
        label: "Service Bookings",
        value: "+160%",
        icon: DollarSign,
        color: "blue",
      },
      { label: "Timeline", value: "4 months", icon: Clock, color: "purple" },
    ],
    results:
      "Achieved top local search rankings and dramatically increased patient inquiries through targeted local SEO strategies.",
  },
  {
    title: "Elite Shutters & Blinds",
    category: "Home Improvement",
    description: "E-commerce SEO and conversion rate optimization for window treatment company.",
    metrics: [
      { label: "Online Sales", value: "+275%", icon: TrendingUp, color: "green" },
      { label: "Conversion Rate", value: "+85%", icon: Users, color: "blue" },
      {
        label: "Average Order Value",
        value: "+45%",
        icon: DollarSign,
        color: "purple",
      },
      { label: "Timeline", value: "7 months", icon: Clock, color: "green" },
    ],
    results:
      "Optimized e-commerce platform and SEO strategy resulted in dramatic increase in online sales and customer engagement.",
  },
  {
    title: "Hainan Apex Traders",
    category: "B2B Trading",
    description: "Complete B2B business built from scratch - website, marketing strategy, and growth implementation.",
    metrics: [
      {
        label: "Website Performance",
        value: "+500%",
        icon: TrendingUp,
        color: "blue",
      },
      { label: "Lead Quality", value: "+300%", icon: Users, color: "purple" },
      {
        label: "Business Growth",
        value: "+250%",
        icon: DollarSign,
        color: "green",
      },
      { label: "Timeline", value: "12 months", icon: Clock, color: "blue" },
    ],
    results:
      "Full-scale digital transformation including website development, marketing strategy, and growth implementation for international trading company.",
  },
  {
    title: "Local Service Business",
    category: "Multi-Service",
    description: "Comprehensive digital marketing strategy for growing service business.",
    metrics: [
      {
        label: "Multi-Channel Growth",
        value: "+350%",
        icon: TrendingUp,
        color: "purple",
      },
      { label: "Customer Base", value: "+200%", icon: Users, color: "green" },
      {
        label: "Revenue Streams",
        value: "+180%",
        icon: DollarSign,
        color: "blue",
      },
      { label: "Timeline", value: "9 months", icon: Clock, color: "purple" },
    ],
    results:
      "Implemented comprehensive digital marketing strategy across multiple channels, resulting in substantial business growth and expansion.",
  },
]

const blogCaseStudies = [
  {
    title: "Local Dental Clinic SEO Success",
    industry: "Healthcare / Local SEO",
    problem:
      "Low online presence, limited local search visibility, and minimal patient inquiries from digital channels",
    solution:
      "Complete Local SEO optimization including Google My Business optimization, local citations, on-page SEO with local keywords, and review management strategy",
    result:
      "50% increase in local search visibility within 2 months, 30% rise in new patient inquiries, improved local rankings for targeted keywords",
    isLocalSEO: true,
  },
  {
    title: "Paintoball.com - Affiliate Blog Success",
    industry: "Content / Affiliate Marketing",
    problem: "New affiliate blog with zero organic traffic and no search engine visibility",
    solution:
      "Comprehensive content strategy, keyword research, SEO-optimized articles, and affiliate monetization implementation",
    result:
      "Scaled to 20K+ monthly visitors, successful affiliate revenue generation, established authority in paintball niche",
    isLocalSEO: false,
  },
  {
    title: "Pinloader.net - APK Platform Growth",
    industry: "Technology / APK Downloads",
    problem: "Competitive APK niche with established players dominating search results",
    solution: "Technical SEO optimization, content strategy for app reviews, and user experience improvements",
    result:
      "Achieved significant organic growth, established as trusted APK resource, successful blog flip with profitable exit",
    isLocalSEO: false,
  },
  {
    title: "Thinkific Blog Content Success",
    industry: "Education / Content Marketing",
    problem: "Need for high-quality, SEO-optimized content to drive organic traffic and engagement",
    solution: "Strategic content creation focusing on 'How to Monetize Your Skills' and related educational topics",
    result:
      "Successfully ranked for target keywords, increased organic traffic, enhanced brand authority in education niche",
    isLocalSEO: false,
  },
  {
    title: "Reminiepro.com - Tech Blog Growth",
    industry: "Technology / Software",
    problem: "New tech blog needing to establish authority and drive organic traffic in competitive software niche",
    solution: "Technical content strategy, software review optimization, and user-focused SEO implementation",
    result:
      "Established strong organic presence, built authority in software niche, achieved consistent traffic growth",
    isLocalSEO: false,
  },
  {
    title: "E-commerce Product Review Blog",
    industry: "E-commerce / Content Marketing",
    problem: "Low product visibility and sales due to lack of detailed, SEO-friendly reviews",
    solution: "Developed a comprehensive product review blog with in-depth SEO analysis and conversion-focused content",
    result:
      "Increased organic traffic to product pages by 180%, boosted conversion rates by 25%, and improved customer trust",
    isLocalSEO: false,
  },
  {
    title: "Local Restaurant Blog & SEO",
    industry: "Food & Beverage / Local SEO",
    problem: "New restaurant struggling to attract local diners and establish online presence",
    solution:
      "Created a food blog with local recipes and dining guides, combined with aggressive local SEO for map pack rankings",
    result:
      "Achieved top 3 local pack rankings for key terms, 120% increase in reservation calls, and significant walk-in traffic",
    isLocalSEO: true,
  },
]

const getColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return {
        bg: "bg-blue-50",
        border: "border-blue-200",
        icon: "text-blue-500",
        value: "text-blue-900",
      }
    case "purple":
      return {
        bg: "bg-purple-50",
        border: "border-purple-200",
        icon: "text-purple-500",
        value: "text-purple-900",
      }
    case "green":
      return {
        bg: "bg-green-50",
        border: "border-green-200",
        icon: "text-green-500",
        value: "text-green-900",
      }
    default:
      return {
        bg: "bg-gray-50",
        border: "border-gray-200",
        icon: "text-gray-500",
        value: "text-gray-900",
      }
  }
}

export default function CaseStudiesPage() {
  return (
    <div className="container py-12 md:py-24">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our <span className="text-blue-600">Case Studies</span>
        </h1>
        <p className="text-gray-600 text-lg">Explore our success stories and see how we've helped businesses grow.</p>
      </section>

      {/* Main Case Studies Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Main <span className="text-blue-600">Case Studies</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainCaseStudies.map((study, index) => (
            <Card
              key={index}
              className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{study.description}</p>
                {/* Metrics in blocks */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {study.metrics.map((metric, metricIndex) => {
                    const colors = getColorClasses(metric.color)
                    return (
                      <div
                        key={metricIndex}
                        className={`text-center p-3 ${colors.bg} rounded-lg border ${colors.border} group-hover:border-opacity-70 transition-colors`}
                      >
                        <metric.icon className={`w-5 h-5 mx-auto mb-1 ${colors.icon}`} />
                        <div className={`font-bold text-lg ${colors.value}`}>{metric.value}</div>
                        <div className="text-xs text-gray-600">{metric.label}</div>
                      </div>
                    )
                  })}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">{study.results}</p>
                {study.category.includes("Dental") ||
                study.category.includes("Home Services") ||
                study.category.includes("Technology Services") ? (
                  <Badge className="bg-blue-600 text-white">
                    <MapPin className="w-3 h-3 mr-1" />
                    Local SEO
                  </Badge>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Blog Success Stories Section (New Section) */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          <span className="text-blue-600">Blog</span> Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {blogCaseStudies.map((study, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {study.industry}
                  </Badge>
                  {study.isLocalSEO && (
                    <Badge className="bg-blue-600 text-white">
                      <MapPin className="w-3 h-3 mr-1" />
                      Local SEO
                    </Badge>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-4">{study.title}</h3>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-1 text-sm">Problem:</h4>
                    <p className="text-sm text-gray-600">{study.problem}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-600 mb-1 text-sm">Solution:</h4>
                    <p className="text-sm text-gray-600">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-600 mb-1 text-sm">Result:</h4>
                    <p className="text-sm text-gray-700 font-medium">{study.result}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Performance Proof Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Our <span className="text-blue-600">Performance</span> Proof
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Example Performance Metrics */}
          <div>
            <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-900">+300%</div>
              <div className="text-sm text-gray-600">Organic Traffic Increase</div>
            </div>
          </div>
          <div>
            <div className="p-6 bg-green-50 rounded-lg border border-green-200">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-900">+150%</div>
              <div className="text-sm text-gray-600">New Customer Acquisition</div>
            </div>
          </div>
          <div>
            <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
              <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-900">+200%</div>
              <div className="text-sm text-gray-600">Revenue Growth</div>
            </div>
          </div>
          <div>
            <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-200">
              <Clock className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-900">6 Months</div>
              <div className="text-sm text-gray-600">Average Project Timeline</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
