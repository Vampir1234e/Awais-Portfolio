import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, TrendingUp, Globe, Award } from "lucide-react"

export default function About() {
  const skills = [
    "SEO Optimization",
    "Web Design",
    "Whiteboard Animation",
    "Analytics",
    "CRM Automation",
    "Content Strategy",
  ]

  return (
    <section id="about" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge className="cyber-badge mb-4">About Me</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Engineering Precision Meets <span className="text-cyber-cyan glow-text">Digital Excellence</span>
          </h2>
          <p className="text-xl text-cyber-muted max-w-3xl mx-auto leading-relaxed">
            With a solid foundation in Mechanical Engineering and 3+ years of specialized experience in SEO and Digital
            Marketing, I bring a unique analytical approach to growing businesses online.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-cyber-text">My Journey</h3>
            <div className="space-y-4 text-cyber-muted leading-relaxed">
              <p>
                Starting with a <span className="text-cyber-cyan">Mechanical Engineering</span> background, I discovered
                my passion for digital marketing and SEO. This unique combination allows me to approach marketing
                challenges with technical precision and analytical thinking.
              </p>
              <p>
                Over the past <span className="text-cyber-magenta">3+ years</span>, I've successfully helped{" "}
                <span className="text-cyber-aqua">50+ clients worldwide</span> achieve their digital marketing goals. My
                expertise spans from technical SEO implementations to comprehensive digital marketing strategies.
              </p>
              <p>
                I've also <span className="text-cyber-cyan">flipped SEO-optimized blogs</span> in the info and APK
                niches, demonstrating my ability to create, optimize, and monetize digital properties from the ground
                up.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-semibold text-cyber-text mb-4">Core Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} className="cyber-badge-skill">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="cyber-card group">
              <CardContent className="p-6 text-center">
                <Wrench className="w-8 h-8 text-cyber-cyan mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2 text-cyber-text">Technical Background</h4>
                <p className="text-sm text-cyber-muted">Mechanical Engineering foundation</p>
              </CardContent>
            </Card>

            <Card className="cyber-card group">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-cyber-magenta mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2 text-cyber-text">Blog Success</h4>
                <p className="text-sm text-cyber-muted">Info & APK niche expertise</p>
              </CardContent>
            </Card>

            <Card className="cyber-card group">
              <CardContent className="p-6 text-center">
                <Globe className="w-8 h-8 text-cyber-aqua mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2 text-cyber-text">Global Reach</h4>
                <p className="text-sm text-cyber-muted">50+ clients worldwide</p>
              </CardContent>
            </Card>

            <Card className="cyber-card group">
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 text-cyber-cyan mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2 text-cyber-text">Proven Results</h4>
                <p className="text-sm text-cyber-muted">3+ years experience</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Highlight Section */}
        <div className="mt-16 text-center">
          <div className="cyber-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-cyber-cyan glow-text">SEO</span> +{" "}
                <span className="text-cyber-magenta glow-text">Funnel Building</span> +{" "}
                <span className="text-cyber-aqua glow-text">CRM Automation</span>
              </h3>
              <p className="text-lg text-cyber-muted">
                50+ happy clients, 3+ years of results, from local businesses to international brands
              </p>
            </CardContent>
          </div>
        </div>
      </div>
    </section>
  )
}
