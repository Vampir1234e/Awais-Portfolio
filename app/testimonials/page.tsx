"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Michael Chen",
      company: "GreenLeaf Landscaping",
      text: "Awais helped us slash ad costs by 40% while tripling our visibility! Our service requests have never been higher, and the ROI has been incredible. He's a true digital growth strategist.",
      rating: 5,
    },
    {
      name: "Jennifer Martinez",
      company: "Elite Shutters & Blinds",
      text: "He ranked our blog to 20K+ visitors/month — then flipped it for a substantial profit. His understanding of SEO and content monetization is exceptional.",
      rating: 5,
    },
    {
      name: "Dr. Sarah Johnson",
      company: "DentoBloom Dental Clinic",
      text: "He builds systems, not just websites. Brilliant strategist who transformed our entire online presence. Patient bookings increased by 150% within 6 months.",
      rating: 5,
    },
    {
      name: "David Thompson",
      company: "SmartTech Repairs",
      text: "Awais doesn't just deliver results — he delivers systems that keep working. We went from page 3 to #1 position and our customer inquiries increased by 190%.",
      rating: 5,
    },
    {
      name: "Robert Kim",
      company: "Hainan Apex Traders",
      text: "Working with Awais was transformational. He built our entire digital presence from scratch and the results exceeded every expectation. A true professional.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            What <span className="text-blue-600">Clients</span> Say
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what my clients have to say about the results we've achieved
            together.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-8 md:p-12">
              <Quote className="w-12 h-12 text-blue-600/30 mb-6" />

              <div className="mb-8">
                <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
                  "{testimonials[currentTestimonial].text}"
                </p>

                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div>
                  <div className="font-semibold text-lg text-blue-600">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-300 hover:bg-gray-50 bg-transparent"
                  onClick={prevTestimonial}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-300 hover:bg-gray-50 bg-transparent"
                  onClick={nextTestimonial}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-blue-600">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Happy Clients Worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600">Client Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">3+</div>
            <div className="text-gray-600">Years of Excellence</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Ready to Join <span className="text-green-600">Happy Clients</span>?
            </h2>
            <p className="text-gray-600 mb-6">
              Let's discuss how I can help you achieve similar results for your business.
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
