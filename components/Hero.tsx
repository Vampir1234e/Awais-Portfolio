import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <Users className="w-4 h-4 mr-2" />
                50+ Happy Clients Worldwide
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Hi, I'm Syed Awais Mahboob
                </h1>
                <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600">
                  SEO Specialist & Digital Growth Strategist
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                  Helping businesses rank, convert, and scale through data-driven SEO, funnels, and automation.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white group" asChild>
                <Link href="/contact">
                  Let's Work Together
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                asChild
              >
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">8+</div>
                <div className="text-sm text-gray-600">Case Studies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Profile image */}
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pp.jpg-lCldWKO41Ok3JbM68YB8g8cjrCEYRH.jpeg"
                  alt="Syed Awais Mahboob - SEO Specialist & Digital Growth Strategist"
                  width={400}
                  height={400}
                  className="relative rounded-full border-4 border-blue-200 shadow-xl"
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-100/20 to-green-100/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
