"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MessageCircle, Send, MapPin, Clock, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-aqua/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge className="cyber-badge mb-4">Contact</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Let's Talk About Your <span className="text-cyber-magenta glow-text">Next Project</span>
          </h2>
          <p className="text-xl text-cyber-muted max-w-3xl mx-auto leading-relaxed">
            Ready to take your business to the next level? Let's discuss how I can help you achieve your digital
            marketing goals and drive real results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="text-cyber-text">Send Me a Message</CardTitle>
              <CardDescription className="text-cyber-muted">
                Fill out the form below and I'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-cyber-text">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="cyber-input"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-cyber-text">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="cyber-input"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-cyber-text">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, and how I can help..."
                    rows={5}
                    className="cyber-input"
                  />
                </div>

                <Button type="submit" className="w-full cyber-button-primary">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="cyber-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-cyber-text">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyber-cyan" />
                    <div>
                      <div className="font-medium text-cyber-text">Email</div>
                      <Link
                        href="mailto:shahawais1415@gmail.com"
                        className="text-cyber-muted hover:text-cyber-cyan transition-colors"
                      >
                        shahawais1415@gmail.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyber-magenta" />
                    <div>
                      <div className="font-medium text-cyber-text">Phone</div>
                      <Link
                        href="tel:+923092570005"
                        className="text-cyber-muted hover:text-cyber-magenta transition-colors"
                      >
                        +92 309 2570005
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-cyber-aqua" />
                    <div>
                      <div className="font-medium text-cyber-text">WhatsApp</div>
                      <Link
                        href="https://wa.me/923092570005"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyber-muted hover:text-cyber-aqua transition-colors"
                      >
                        Chat on WhatsApp
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-cyber-cyan" />
                    <div>
                      <div className="font-medium text-cyber-text">LinkedIn</div>
                      <Link
                        href="https://linkedin.com/in/syed-awais-652a9b193/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyber-muted hover:text-cyber-cyan transition-colors"
                      >
                        Connect on LinkedIn
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyber-magenta" />
                    <div>
                      <div className="font-medium text-cyber-text">Location</div>
                      <div className="text-cyber-muted">Pakistan (Remote Worldwide)</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-cyber-aqua" />
                    <div>
                      <div className="font-medium text-cyber-text">Response Time</div>
                      <div className="text-cyber-muted">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-cyber-text">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full cyber-button-primary" asChild>
                    <Link href="https://wa.me/923092570005" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Chat
                    </Link>
                  </Button>

                  <Button className="w-full cyber-button-secondary" asChild>
                    <Link href="mailto:shahawais1415@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </Link>
                  </Button>

                  <Button className="w-full cyber-button-secondary" asChild>
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

            <Card className="cyber-card-highlight">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-cyber-text">Ready to Get Started?</h3>
                <p className="mb-4 text-cyber-muted">
                  Let's schedule a free consultation to discuss your project and goals.
                </p>
                <Button className="cyber-button-primary" asChild>
                  <Link href="https://wa.me/923092570005" target="_blank" rel="noopener noreferrer">
                    Schedule Free Consultation
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
