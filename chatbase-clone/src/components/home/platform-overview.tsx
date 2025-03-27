import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, MessageSquare, Shield } from "lucide-react"

export function PlatformOverview() {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Purpose-built for LLMs",
      description: "Language models with reasoning capabilities for effective responses to complex queries."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-chatbase-cyan" />,
      title: "Designed for simplicity",
      description: "Create, manage, and deploy AI Agents easily, even without technical skills."
    },
    {
      icon: <Shield className="h-8 w-8 text-chatbase-purple" />,
      title: "Engineered for security",
      description: "Enjoy peace of mind with robust encryption and strict compliance standards."
    }
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            The complete platform for AI support agents
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chatbase is designed for building AI support agents that solve your customers' hardest problems while improving business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
