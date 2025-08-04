import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Award, Target } from "lucide-react"

export default function KeyAchievements() {
  const achievements = [
    {
      icon: Users,
      number: "50+",
      label: "Happy Clients",
      description: "Worldwide success stories",
      color: "blue",
    },
    {
      icon: Award,
      number: "8+",
      label: "Case Studies",
      description: "Proven results documented",
      color: "green",
    },
    {
      icon: TrendingUp,
      number: "285%",
      label: "Average Growth",
      description: "In organic traffic",
      color: "purple",
    },
    {
      icon: Target,
      number: "99%",
      label: "Success Rate",
      description: "Client satisfaction guaranteed",
      color: "blue",
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          icon: "text-blue-600",
          number: "text-blue-600",
          bg: "bg-blue-50",
          border: "border-blue-100",
        }
      case "green":
        return {
          icon: "text-green-600",
          number: "text-green-600",
          bg: "bg-green-50",
          border: "border-green-100",
        }
      case "purple":
        return {
          icon: "text-purple-600",
          number: "text-purple-600",
          bg: "bg-purple-50",
          border: "border-purple-100",
        }
      default:
        return {
          icon: "text-blue-600",
          number: "text-blue-600",
          bg: "bg-blue-50",
          border: "border-blue-100",
        }
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            Key <span className="text-blue-600">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Numbers that speak louder than words - real results from real projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const colors = getColorClasses(achievement.color)
            return (
              <Card
                key={index}
                className={`${colors.bg} ${colors.border} border shadow-sm hover:shadow-md transition-all duration-300 group`}
              >
                <CardContent className="p-6 text-center">
                  <achievement.icon
                    className={`w-8 h-8 ${colors.icon} mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  />
                  <div className={`text-3xl font-bold ${colors.number} mb-2`}>{achievement.number}</div>
                  <div className="font-semibold text-gray-900 mb-1">{achievement.label}</div>
                  <div className="text-sm text-gray-600">{achievement.description}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
