import { Card } from "@/components/ui/card"

export function HowItWorksSteps() {
  const steps = [
    {
      number: "01.",
      title: "Build & deploy your agent",
      description: "Train an agent on your business data, configure the actions it can take, then deploy it for your customers."
    },
    {
      number: "02.",
      title: "Agent solves your customers' problems",
      description: "The agent will answer questions and access external systems to gather data and take actions."
    },
    {
      number: "03.",
      title: "Refine & optimize",
      description: "This ensures your agent is improving over time."
    },
    {
      number: "04.",
      title: "Route complex issues to a human",
      description: "Seamlessly escalate certain queries to human agents when the AI agent is unable to solve the problem."
    },
    {
      number: "05.",
      title: "Review analytics & insights",
      description: "Since the agent is talking with customers all day, it's able to gather important insights about your customers."
    }
  ]

  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`relative ${index === 0 ? 'bg-white border border-[#f1f1f3] shadow-sm rounded-2xl p-6' : ''}`}
        >
          <div className="flex items-start">
            <div className={`text-lg ${index === 0 ? 'text-[#ff5277]' : 'text-[#d8d8d8]'} font-medium mr-6 w-12 flex-shrink-0`}>
              {step.number}
            </div>
            <div className="flex-1">
              <h3 className={`text-xl ${index === 0 ? 'font-semibold' : 'font-medium text-[#aaaaaa]'} mb-2`}>
                {step.title}
              </h3>
              {index === 0 && (
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
