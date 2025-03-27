import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Bot, Database, BarChart3, Users, RefreshCcw } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: <Bot className="h-7 w-7 text-primary" />,
      title: "Build & deploy your agent",
      description: "Train an agent on your business data, configure the actions it can take, then deploy it for your customers."
    },
    {
      icon: <Database className="h-7 w-7 text-chatbase-cyan" />,
      title: "Agent solves your customers' problems",
      description: "The agent will answer questions and access external systems to gather data and take actions."
    },
    {
      icon: <RefreshCcw className="h-7 w-7 text-chatbase-purple" />,
      title: "Refine & optimize",
      description: "This ensures your agent is improving over time."
    },
    {
      icon: <Users className="h-7 w-7 text-amber-500" />,
      title: "Route complex issues to a human",
      description: "Seamlessly escalate certain queries to human agents when the AI agent is unable to solve the problem or when issues require human review."
    },
    {
      icon: <BarChart3 className="h-7 w-7 text-green-500" />,
      title: "Review analytics & insights",
      description: "Since the agent is talking with customers all day, it's able to gather important insights and analytics about your customers & business."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            An end-to-end solution for conversational AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            With Chatbase, your customers can effortlessly find answers, resolve issues, and take meaningful actions through seamless and engaging AI-driven conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="shadow-sm bg-background">
              <CardHeader className="pb-3">
                <div className="bg-muted/50 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  {step.icon}
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-2">
            <Separator className="w-32" />
            <span className="text-muted-foreground">Features</span>
            <Separator className="w-32" />
          </div>
        </div>
      </div>
    </section>
  )
}
