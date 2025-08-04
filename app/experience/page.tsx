import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, TrendingUp, Users, Award, Target, BarChart } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experience - Syed Awais Mahboob",
  description: "Results-focused experience and proven track record in digital marketing and SEO.",
}

export default function ExperiencePage() {
  const resultStats = [
    {
      icon: Award,
      title: "99% Job Success Rate",
      description: "Consistently delivering exceptional results that exceed client expectations",
      color: "green",
    },
    {
      icon: TrendingUp,
      title: "8+ Successful Case Studies",
      description: "Documented proof of measurable business growth and ROI improvements",
      color: "blue",
    },
    {
      icon: Users,
      title: "50+ Happy Clients",
      description: "Building lasting partnerships with businesses across various industries",
      color: "purple",
    },
    {
      icon: Target,
      title: "Specialized Focus Areas",
      description: "SEO optimization, conversion funnels, and local business scaling expertise",
      color: "blue",
    },
  ]

  const experiences = [
    {
      title: "Digital Marketing Expert & Operations Manager",
      company: "Nawab Capital Inc.",
      description:
        "Leading comprehensive digital marketing strategies, SEO campaigns, analytics oversight, and project management for multiple client portfolios.",
      achievements: [
        "Managed 20+ client SEO campaigns simultaneously",
        "Achieved 43.1K clicks and 355K impressions for key projects",
        "Implemented data-driven marketing strategies with 99% success rate",
        "Delivered consistent ROI improvements across all projects",
      ],
      verified: true,
    },
    {
      title: "SEO Blog Entrepreneur & Content Strategist",
      company: "Independent Projects (Paintoball.com, Pinloader.net)",
      description:
        "Successfully built, optimized, and monetized multiple high-traffic blogs in APK and info niches through strategic SEO and affiliate marketing.",
      achievements: [
        "Scaled Paintoball.com to 20K+ monthly visitors",
        "Achieved profitable exits through strategic blog flipping",
        "Generated 17K users and 37K views across projects",
        "Mastered affiliate SEO monetization strategies",
      ],
      verified: true,
    },
    {
      title: "Website & Brand Development Specialist",
      company: "Hainan Apex Traders",
      description:
        "Complete digital transformation project including website development, brand strategy, and comprehensive social media marketing implementation.",
      achievements: [
        "Built complete B2B digital presence from scratch",
        "Developed brand identity and marketing materials",
        "Implemented comprehensive digital marketing strategies",
        "Achieved 500% improvement in online performance",
      ],
      verified: true,
    },
    {
      title: "Local SEO & Business Growth Consultant",
      company: "Multiple Local Businesses (Dental Clinics, Service Providers)",
      description:
        "Specialized in helping local businesses dominate their markets through strategic local SEO, Google Business Profile optimization, and conversion improvements.",
      achievements: [
        "Achieved 50% increase in local search visibility",
        "Generated 30% rise in new patient inquiries for dental clients",
        "Secured 22.5K clicks and 172K impressions for local businesses",
        "Implemented review management and reputation strategies",
      ],
      verified: true,
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
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            100% Focused on <span className="text-blue-600">Results</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My experience is measured not in years, but in the success stories I've created and the measurable impact
            I've delivered for every client.
          </p>
        </div>

        {/* Results Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resultStats.map((stat, index) => {
            const colors = getColorClasses(stat.color)
            return (
              <Card
                key={index}
                className={`${colors.bg} ${colors.border} border shadow-sm hover:shadow-md transition-all duration-300 group text-center`}
              >
                <CardContent className="p-6">
                  <stat.icon
                    className={`w-8 h-8 ${colors.icon} mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  />
                  <h3 className="font-bold text-gray-900 mb-2">{stat.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Local SEO Highlight */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-white text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Local SEO Specialization</h2>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            <strong>Local SEO is one of my strongest specialties</strong> — from optimizing Google Business Profiles to
            securing map pack rankings that drive real foot traffic. The proof is in the Google Search Console results
            below.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Key <span className="text-blue-600">Experience</span> Areas
          </h2>

          {experiences.map((exp, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-900 mb-2">{exp.title}</CardTitle>
                    <CardDescription className="text-lg text-gray-700 font-medium">{exp.company}</CardDescription>
                  </div>
                  {exp.verified && (
                    <Badge className="bg-green-100 text-green-800 border-green-200 mt-4 lg:mt-0">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Verified Case Study Available
                    </Badge>
                  )}
                </div>
                <p className="text-gray-600 leading-relaxed mt-4">{exp.description}</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Proof Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            <span className="text-blue-600">Google Search Console</span> Proof
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
                  <strong>43.1K clicks, 355K impressions, 12.1% CTR</strong> - Exponential growth achieved through
                  strategic SEO
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
                  <strong>22.5K clicks, 172K impressions, 13.1% CTR</strong> - Consistent local SEO performance
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
                  <strong>17K users, 37K views, 20s engagement</strong> - Sustained engagement across blog projects
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-green-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Proven Methodology</h3>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">99%</div>
                    <div className="text-sm text-gray-600 mb-4">Success Rate</div>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>• Data-driven strategies</div>
                      <div>• Proven methodologies</div>
                      <div>• Measurable results</div>
                      <div>• Client satisfaction guaranteed</div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Consistent excellence</strong> - Every project backed by proven strategies and measurable
                  outcomes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Ready for <span className="text-green-600">Similar Results</span>?
            </h2>
            <p className="text-gray-600 mb-6">
              Let's discuss how my proven experience can help drive measurable growth for your business.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Start Your Success Story
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
