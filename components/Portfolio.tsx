"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const portfolioItems = [
    {
      title: "Dental Clinic Website Design",
      category: "Web Design",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LP2.png-5AU1ZgsG2CUQu9dXsIQnepgXqUhtao.jpeg",
      description: "Modern, responsive dental clinic website with appointment booking system and patient portal",
      link: "#",
    },
    {
      title: "Furniture E-commerce Platform",
      category: "E-commerce",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LP%201-rgEJCDnKAfUJVLlcv51JgzBDfU4dqg.png",
      description: "Full-featured e-commerce platform with advanced filtering, cart functionality, and checkout",
      link: "#",
    },
    {
      title: "Paintoball Blog",
      category: "Content Site",
      image: "/placeholder.svg?height=300&width=400",
      description: "High-traffic paintball information and review blog with affiliate monetization",
      link: "https://paintoball.com",
    },
    {
      title: "Pinloader APK Site",
      category: "Tech Blog",
      image: "/placeholder.svg?height=300&width=400",
      description: "Popular APK download and review platform with SEO optimization",
      link: "https://pinloader.net",
    },
    {
      title: "Thinkific Course Platform",
      category: "Education",
      image: "/placeholder.svg?height=300&width=400",
      description: "Educational platform with course management system and student portal",
      link: "#",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }

  return (
    <section id="portfolio" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge className="cyber-badge mb-4">Portfolio</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Featured <span className="text-cyber-aqua glow-text">Work</span> & Projects
          </h2>
          <p className="text-xl text-cyber-muted max-w-3xl mx-auto leading-relaxed">
            A showcase of successful websites, blogs, and digital marketing projects that demonstrate my expertise
            across various industries.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {portfolioItems.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="mx-4 cyber-card">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-64 md:h-80 overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/50 to-transparent"></div>
                        </div>
                        <div className="p-8 flex flex-col justify-center">
                          <Badge className="cyber-badge-secondary w-fit mb-4">{item.category}</Badge>
                          <h3 className="text-2xl font-bold mb-4 text-cyber-text">{item.title}</h3>
                          <p className="text-cyber-muted mb-6 leading-relaxed">{item.description}</p>
                          <Button className="cyber-button-secondary w-fit" asChild>
                            <Link href={item.link} target="_blank" rel="noopener noreferrer">
                              View Project
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 cyber-button-nav bg-transparent"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cyber-button-nav bg-transparent"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-cyber-cyan shadow-lg shadow-cyber-cyan/50"
                    : "bg-cyber-muted/30 hover:bg-cyber-muted/50"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Additional Portfolio Links */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="cyber-card group">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-cyber-text">Whiteboard Animation Portfolio</h3>
              <p className="text-cyber-muted mb-4 leading-relaxed">
                Collection of engaging whiteboard animations created for various clients and industries.
              </p>
              <Button className="cyber-button-secondary" asChild>
                <Link
                  href="https://www.dropbox.com/scl/fo/sfm2srtjkpi0vfyqq1vku"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Animations
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="cyber-card group">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-cyber-text">Blog Writing & Live Projects</h3>
              <p className="text-cyber-muted mb-4 leading-relaxed">
                Active blogs and content projects demonstrating SEO expertise and content strategy.
              </p>
              <div className="space-y-2">
                <Button variant="outline" className="cyber-button-secondary w-full bg-transparent" asChild>
                  <Link href="https://paintoball.com" target="_blank" rel="noopener noreferrer">
                    Paintoball.com
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="cyber-button-secondary w-full bg-transparent" asChild>
                  <Link href="https://pinloader.net" target="_blank" rel="noopener noreferrer">
                    Pinloader.net
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
