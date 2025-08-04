"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      company: "DentoBloom Dental Clinic",
      text: "Awais transformed our online presence completely. Our patient bookings increased by 150% within 6 months, and we now rank #1 for all our target keywords in the local area. His technical approach combined with marketing expertise is unmatched.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "GreenLeaf Landscaping",
      text: "Working with Awais was a game-changer for our business. He cut our ad costs by 40% while tripling our visibility! Our service requests have never been higher, and the ROI has been incredible.",
      rating: 5,
    },
    {
      name: "Jennifer Martinez",
      company: "Elite Shutters & Blinds",
      text: "The ROI from Awais's SEO work has been incredible. Our online sales increased by 275% and our conversion rate improved dramatically. His data-driven approach delivers real results.",
      rating: 5,
    },
    {
      name: "David Thompson",
      company: "SmartTech Repairs",
      text: "Awais helped us dominate local search results. We went from page 3 to #1 position for all our main keywords. Customer inquiries increased by 190% and our business has never been stronger.",
      rating: 5,
    },
    {
      name: "Lisa Wang",
      company: "BrightSmile Orthodontics",
      text: "Professional, knowledgeable, and results-driven. Awais delivered exactly what he promised and more. Our practice has grown significantly thanks to his comprehensive digital marketing expertise.",
      rating: 5,
    },
    {
      name: "Robert Kim",
      company: "Hainan Apex Traders",
      text: "Awais handled our complete digital transformation - from website development to marketing strategy. The results exceeded our expectations in every way. A true digital growth strategist.",
      rating: 5,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-magenta/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge className="cyber-badge mb-4">Testimonials</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            What <span className="text-cyber-cyan glow-text">Clients</span> Say
          </h2>
          <p className="text-xl text-cyber-muted max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what my clients have to say about the results we've achieved
            together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="cyber-card relative overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <Quote className="w-12 h-12 text-cyber-cyan/30 mb-6" />

              <div className="mb-8">
                <p className="text-lg md:text-xl leading-relaxed mb-6 text-cyber-text">
                  "{testimonials[currentTestimonial].text}"
                </p>

                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div>
                  <div className="font-semibold text-lg text-cyber-cyan">{testimonials[currentTestimonial].name}</div>
                  <div className="text-cyber-muted">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="cyber-button-nav bg-transparent"
                  onClick={prevTestimonial}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                {/* Dots Indicator */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? "bg-cyber-cyan shadow-lg shadow-cyber-cyan/50"
                          : "bg-cyber-muted/30 hover:bg-cyber-muted/50"
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  className="cyber-button-nav bg-transparent"
                  onClick={nextTestimonial}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyber-cyan glow-text mb-2">50+</div>
            <div className="text-cyber-muted">Happy Clients Worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyber-magenta glow-text mb-2">100%</div>
            <div className="text-cyber-muted">Client Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyber-aqua glow-text mb-2">3+</div>
            <div className="text-cyber-muted">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  )
}
