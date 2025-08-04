import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Education - Syed Awais Mahboob",
  description: "Academic background and professional certifications of Syed Awais Mahboob.",
}

export default function EducationPage() {
  const education = [
    {
      degree: "BSc Mechanical Engineering",
      institution: "NFC-IEFR (UET Lahore)",
      period: "2019 – 2023",
      grade: "CGPA 3.42/4.0",
      projects: ["Jet Model (AutoCAD)", "Bobcat Loader (SolidWorks)", "Final Year Project: Hybrid Bike Engine (CD-70)"],
    },
    {
      degree: "F.Sc Pre-Engineering",
      institution: "KIPS College Faisalabad",
      period: "2017 – 2019",
      grade: "830/1100",
      projects: [],
    },
    {
      degree: "Matriculation",
      institution: "Lasalle High School Faisalabad",
      period: "2015 – 2017",
      grade: "924/1100",
      projects: [],
    },
  ]

  const certifications = [
    { name: "SEO", provider: "iSkills", year: "2023" },
    { name: "Conversion Funnel Mastery", provider: "Digital Marketer", year: "2023" },
    { name: "Data & Analytics", provider: "Digital Marketer", year: "2023" },
    { name: "Go High-Level CRM", provider: "Certified", year: "April 2024" },
    { name: "AutoCAD", provider: "PSD", year: "2022" },
    { name: "Freelancing", provider: "DigiSkills", year: "2022" },
    { name: "CPD in Biodegradable Materials", provider: "Professional Development", year: "2023" },
  ]

  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            Education & <span className="text-blue-600">Certifications</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My academic foundation in engineering combined with professional certifications in digital marketing and
            SEO.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
            <GraduationCap className="mr-3 text-blue-600" />
            Academic Background
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{edu.degree}</CardTitle>
                      <CardDescription className="text-lg text-gray-600 mt-1">{edu.institution}</CardDescription>
                    </div>
                    <div className="mt-2 sm:mt-0 text-right">
                      <div className="flex items-center text-gray-500 mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        {edu.grade}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                {edu.projects.length > 0 && (
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Projects:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {edu.projects.map((project, projectIndex) => (
                        <li key={projectIndex}>{project}</li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
            <Award className="mr-3 text-blue-600" />
            Professional Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Award className="w-6 h-6 text-blue-600 mt-1" />
                    <Badge variant="outline" className="text-xs">
                      {cert.year}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.provider}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
