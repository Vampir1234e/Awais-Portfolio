import { Card, CardContent } from "@/components/ui/card"
import { Wrench, TrendingUp, Globe, Award, Brain, Target, BarChart } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Syed Awais Mahboob",
  description:
    "Learn about my journey from Mechanical Engineering to becoming an SEO Specialist & Digital Growth Strategist.",
}

export default function AboutPage() {
  const skills = [
    "SEO Optimization",
    "Web Design",
    "Funnel Strategy",
    "CRM Automation",
    "Content Strategy",
    "Data Analytics",
  ]

  const values = [
    {
      icon: Brain,
      title: "Problem-Solver",
      description: "I approach every challenge with analytical thinking and creative solutions.",
    },
    {
      icon: Target,
      title: "Growth-Minded",
      description: "Focused on sustainable growth strategies that deliver long-term results.",
    },
    {
      icon: BarChart,
      title: "Data-Driven",
      description: "Every decision is backed by data analysis and measurable outcomes.",
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            From <span className="text-blue-600">Engineering</span> to{" "}
            <span className="text-green-600">Digital Growth</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My unique journey from Mechanical Engineering to becoming a Digital Growth Strategist, combining technical
            precision with creative marketing expertise.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">My Journey</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Starting with a <span className="text-blue-600 font-medium">Mechanical Engineering</span> background, I
                discovered my passion for digital marketing and SEO. This unique combination allows me to approach
                marketing challenges with technical precision and analytical thinking.
              </p>
              <p>
                During my transition, I successfully{" "}
                <span className="text-green-600 font-medium">flipped SEO-optimized blogs</span> in the APK and info
                niches, demonstrating my ability to create, optimize, and monetize digital properties from the ground
                up.
              </p>
              <p>
                Over the past <span className="text-blue-600 font-medium">3+ years</span>, I've helped{" "}
                <span className="text-green-600 font-medium">50+ clients worldwide</span> achieve their digital
                marketing goals through data-driven strategies and technical expertise.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
              <CardContent className="p-6 text-center">
                <Wrench className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2 text-gray-900">Technical Foundation</h4>
                <p className="text-sm text-gray-600">Mechanical Engineering background</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2 text-gray-900">Blog Success</h4>
                <p className="text-sm text-gray-600">APK & info niche expertise</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
              <CardContent className="p-6 text-center">
                <Globe className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2 text-gray-900">Global Reach</h4>
                <p className="text-sm text-gray-600">50+ clients worldwide</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2 text-gray-900">Proven Results</h4>
                <p className="text-sm text-gray-600">8+ case studies</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            My <span className="text-blue-600">Core Values</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow group text-center"
              >
                <CardContent className="p-8">
                  <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Highlight */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              <span className="text-blue-600">3+ Years</span> of Excellence
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">8+</div>
                <div className="text-gray-600">Case Studies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
