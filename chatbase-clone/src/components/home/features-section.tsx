import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Database,
  BarChart3,
  Zap,
  ShieldCheck,
  GitCompare,
  ArrowUpRight,
  Globe,
  Workflow
} from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Sync with real-time data",
      description: "Connect your agent to systems like order management tools, CRMs, and more to seamlessly access data ranging from order details to active subscriptions and beyond."
    },
    {
      icon: <Zap className="h-6 w-6 text-chatbase-cyan" />,
      title: "Take actions on your systems",
      description: "Configure actions that your agent can perform within your systems or through one of our integrations, like updating a customer's subscription or changing their address."
    },
    {
      icon: <GitCompare className="h-6 w-6 text-chatbase-purple" />,
      title: "Compare AI models",
      description: "Experiment with various models and configurations to make sure you have the best setup for your use case."
    },
    {
      icon: <ArrowUpRight className="h-6 w-6 text-amber-500" />,
      title: "Smart escalation",
      description: "Give your agent instructions in natural language on when to escalate queries to a human agents."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-green-500" />,
      title: "Advanced reporting",
      description: "Gain insights and optimize agent performance with detailed analytics."
    },
    {
      icon: <Workflow className="h-6 w-6 text-blue-500" />,
      title: "Works with your tools",
      description: "Integrate diverse data sources to enrich your agent's knowledge and capabilities."
    },
    {
      icon: <Globe className="h-6 w-6 text-indigo-500" />,
      title: "API",
      description: "APIs, client libraries, and components to deeply integrate support into your product."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-rose-500" />,
      title: "Whitelabel",
      description: "Remove any Chatbase branding form the chat widget."
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Build the perfect customer-facing AI agent
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chatbase gives you all the tools you need to train your perfect AI agent and connect it to your systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="bg-muted/30 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                  {feature.icon}
                </div>
                <CardTitle className="text-base">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Works with your tools</h3>
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {['Make', 'Zendesk', 'Notion', 'Slack', 'Stripe', 'Salesforce', 'Calendly', 'WhatsApp', 'Zapier', 'Messenger'].map((tool) => (
              <div key={tool} className="text-sm font-medium text-muted-foreground px-4 py-2 rounded-md bg-muted/30">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
