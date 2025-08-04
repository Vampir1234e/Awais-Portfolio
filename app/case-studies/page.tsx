import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, TrendingUp, BarChart } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies - Syed Awais Mahboob",
  description:
    "Real case studies showing measurable results and business growth through strategic SEO and digital marketing.",
}

export default function CaseStudiesPage() {
  const mainCaseStudies = [
    {
      title: "DentoBloom Dental Clinic",
      industry: "Healthcare / Dental",
      image: "/placeholder.svg?height=300&width=400&text=Dental+Clinic",
      problem: "Low online visibility and minimal patient bookings from digital channels",
      solution: "Complete Local SEO overhaul, Google Business Profile optimization, and targeted content strategy",
      result: "285% increase in organic traffic, 150% more new patients, 200% revenue growth in 6 months",
      isLocalSEO: true,
    },
    {
      title: "GreenLeaf Landscaping",
      industry: "Home Services",
      image: "/placeholder.svg?height=300&width=400&text=Landscaping+Business",
      problem: "Struggling to compete with established local competitors in search results",
      solution: "Local SEO strategy focusing on map pack rankings and service area optimization",
      result: "400% increase in organic visibility, 300% more service requests, dominated local search results",
      isLocalSEO: true,
    },
    {
      title: "SmartTech Repairs",
      industry: "Technology Services",
      image: "/placeholder.svg?height=300&width=400&text=Tech+Repair+Shop",
      problem: "Poor local search rankings and low customer inquiry volume",
      solution: "Local SEO implementation with reputation management and citation building",
      result: "Achieved #1 local search position, 190% increase in customer inquiries, 160% more bookings",
      isLocalSEO: true,
    },
    {
      title: "Elite Shutters & Blinds",
      industry: "E-commerce / Home Improvement",
      image: "/placeholder.svg?height=300&width=400&text=Window+Treatments",
      problem: "Low e-commerce conversion rates and poor organic search performance",
      solution: "E-commerce SEO optimization, conversion rate improvements, and content marketing",
      result: "275% increase in online sales, 85% higher conversion rate, 45% increase in average order value",
      isLocalSEO: false,
    },
    {
      title: "BrightSmile Orthodontics",
      industry: "Healthcare / Dental",
      image: "/placeholder.svg?height=300&width=400&text=Orthodontics+Practice",
      problem: "High PPC costs with low ROI and limited organic presence",
      solution: "Comprehensive digital marketing with SEO, PPC optimization, and conversion funnels",
      result: "320% website traffic increase, 250% more leads, 40% reduction in PPC costs",
      isLocalSEO: true,
    },
    {
      title: "Hainan Apex Traders",
      industry: "B2B Trading",
      image: "/images/hainan-portfolio-1.webp",
      problem: "No digital presence and reliance on traditional business development methods",
      solution: "Complete digital transformation: website development, SEO strategy, and lead generation systems",
      result: "500% improvement in website performance, 300% better lead quality, 250% business growth",
      isLocalSEO: false,
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
  ]

  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            Proven <span className="text-green-600">Results</span> That Speak for Themselves
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real case studies from real clients showing measurable results and business growth through strategic SEO and
            digital marketing implementations.
          </p>
        </div>

        {/* Local SEO Highlight */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-white text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Local SEO Expertise</h2>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            <strong>Local SEO is one of my strongest specialties</strong> — from optimizing Google Business Profiles to
            securing map pack rankings that drive real foot traffic. These case studies showcase documented success.
          </p>
        </div>

        {/* Main Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {mainCaseStudies.map((study, index) => (
            <Card
              key={index}
              className="border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {study.industry}
                  </Badge>
                </div>
                {study.isLocalSEO && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white">
                      <MapPin className="w-3 h-3 mr-1" />
                      Local SEO
                    </Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{study.title}</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-1">Problem:</h4>
                    <p className="text-sm text-gray-600">{study.problem}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-600 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-600">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-600 mb-1">Result:</h4>
                    <p className="text-sm text-gray-700 font-medium">{study.result}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Blog Case Studies Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            <span className="text-blue-600">Blog</span> Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogCaseStudies.map((study, index) => (
              <Card
                key={index}
                className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
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
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            <span className="text-blue-600">Performance</span> Proof
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Dramatic SEO Growth</h3>
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden border border-gray-200 mb-4">
                  <Image
                    src="/images/search-console-proof-1.jpg"
                    alt="Dramatic SEO Growth"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  <strong>43.1K clicks, 355K impressions, 12.1% CTR</strong> - Exponential organic growth achieved
                  through strategic SEO implementation
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <BarChart className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Local SEO Success</h3>
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden border border-gray-200 mb-4">
                  <Image
                    src="/images/search-console-proof-2.jpg"
                    alt="Local SEO Results"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  <strong>22.5K clicks, 172K impressions, 13.1% CTR</strong> - Consistent local SEO performance for
                  dental and service businesses
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <BarChart className="w-6 h-6 text-purple-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Analytics Performance</h3>
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden border border-gray-200 mb-4">
                  <Image
                    src="/images/analytics-proof-1.jpg"
                    alt="Analytics Performance"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  <strong>17K users, 37K views, 20s engagement</strong> - Sustained traffic growth and user engagement
                  across blog projects
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Keyword Research Excellence</h3>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 mb-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Tools Used</div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>• Ahrefs for comprehensive keyword analysis</div>
                    <div>• SEMrush for competitor research</div>
                    <div>• Google Keyword Planner for search volume</div>
                    <div>• Custom keyword research spreadsheets</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Strategic keyword research</strong> - Foundation of all successful SEO campaigns with detailed
                  analysis and planning
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 italic mb-4">"...and many more successful projects completed."</p>
            <p className="text-gray-600">Each project brings unique challenges and opportunities for growth.</p>
            <div className="mt-6">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Start Your Success Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
