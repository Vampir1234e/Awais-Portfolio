"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageCircle, Send, MapPin, Clock, Linkedin } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            Let's Discuss Your <span className="text-blue-600">Project</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to take your business to the next level? Let's discuss how I can help you achieve your digital
            marketing goals and drive real results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Send Me a Message</CardTitle>
              <CardDescription className="text-gray-600">
                Fill out the form below and I'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, and how I can help..."
                    rows={5}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <Link
                        href="mailto:awais@digitechora.com"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        awais@digitechora.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium text-gray-900">WhatsApp</div>
                      <Link
                        href="https://wa.me/923092570005"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-green-600 transition-colors"
                      >
                        Chat on WhatsApp
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-gray-900">LinkedIn</div>
                      <Link
                        href="https://linkedin.com/in/syed-awais-652a9b193/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        Connect on LinkedIn
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="font-medium text-gray-900">Location</div>
                      <div className="text-gray-600">Pakistan (Remote Worldwide)</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium text-gray-900">Response Time</div>
                      <div className="text-gray-600">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                    <Link href="https://wa.me/923092570005" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Chat
                    </Link>
                  </Button>

                  <Button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
                    <Link href="mailto:awais@digitechora.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </Link>
                  </Button>

                  <Button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
                    <Link
                      href="https://linkedin.com/in/syed-awais-652a9b193/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn Profile
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Ready to Get Started?</h3>
              <p className="mb-4 text-gray-600">
                Let's schedule a free consultation to discuss your project and goals.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href="https://wa.me/923092570005" target="_blank" rel="noopener noreferrer">
                  Schedule Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
