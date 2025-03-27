"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useState } from "react"

type PlanConfiguration = {
  "Message credits (monthly)": string;
  "Agents": string;
  "AI Actions per agent": string;
  "Agent size (characters)": string;
  "Team members": string;
  "Embed on unlimited websites": boolean;
  "Links to train on": string;
}

type Plan = {
  name: string;
  price: string;
  cta: string;
  popular: boolean;
  configuration: PlanConfiguration;
}

export function PlanComparison() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const plans: Plan[] = [
    {
      name: "Free",
      price: "$0",
      cta: "Get started",
      popular: false,
      configuration: {
        "Message credits (monthly)": "100",
        "Agents": "1",
        "AI Actions per agent": "0",
        "Agent size (characters)": "400 KB",
        "Team members": "1",
        "Embed on unlimited websites": true,
        "Links to train on": "10 Links",
      }
    },
    {
      name: "Hobby",
      price: "$40",
      cta: "Subscribe",
      popular: false,
      configuration: {
        "Message credits (monthly)": "2000",
        "Agents": "1",
        "AI Actions per agent": "5",
        "Agent size (characters)": "33 MB",
        "Team members": "1",
        "Embed on unlimited websites": true,
        "Links to train on": "Unlimited links",
      }
    },
    {
      name: "Standard",
      price: "$150",
      cta: "Subscribe",
      popular: true,
      configuration: {
        "Message credits (monthly)": "12,000",
        "Agents": "2",
        "AI Actions per agent": "10",
        "Agent size (characters)": "33 MB",
        "Team members": "3",
        "Embed on unlimited websites": true,
        "Links to train on": "Unlimited links",
      }
    },
    {
      name: "Pro",
      price: "$500",
      cta: "Subscribe",
      popular: false,
      configuration: {
        "Message credits (monthly)": "40,000",
        "Agents": "3",
        "AI Actions per agent": "15",
        "Agent size (characters)": "33 MB",
        "Team members": "5+\n$25 / extra member per month",
        "Embed on unlimited websites": true,
        "Links to train on": "Unlimited links",
      }
    }
  ]

  const sections = [
    {
      title: "Configuration",
      items: [
        "Message credits (monthly)",
        "Agents",
        "AI Actions per agent",
        "Agent size (characters)",
        "Team members",
        "Embed on unlimited websites",
      ] as (keyof PlanConfiguration)[]
    },
    {
      title: "Training",
      items: [
        "Links to train on",
      ] as (keyof PlanConfiguration)[]
    }
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Compare all our plans
        </h2>

        <div className="rounded-3xl border border-[#f1f1f3] overflow-hidden">
          <div className="grid grid-cols-5">
            {/* Header row with plan selectors */}
            <div className="col-span-1 p-6 border-b border-r border-[#f1f1f3]">
              <div className="inline-flex p-1 bg-[#f5f5f7] rounded-full">
                <button
                  className={`px-8 py-2 rounded-full text-sm font-medium ${billingCycle === 'monthly' ? 'bg-white shadow-sm' : 'text-[#686868]'}`}
                  onClick={() => setBillingCycle('monthly')}
                >
                  Monthly
                </button>
                <button
                  className={`px-8 py-2 rounded-full text-sm font-medium ${billingCycle === 'yearly' ? 'bg-white shadow-sm' : 'text-[#686868]'}`}
                  onClick={() => setBillingCycle('yearly')}
                >
                  Yearly
                </button>
              </div>
            </div>

            {/* Plan columns */}
            {plans.map((plan, planIndex) => (
              <div
                key={planIndex}
                className={`col-span-1 p-6 border-b ${planIndex < plans.length - 1 ? 'border-r' : ''} border-[#f1f1f3] ${plan.popular ? 'bg-[#fdfdfd]' : ''}`}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-2 flex items-center gap-2">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    {plan.popular && (
                      <span className="bg-black text-white text-xs px-2 py-1 rounded-full">Popular</span>
                    )}
                  </div>

                  <div className="mb-4">
                    <div className="text-3xl font-bold">{plan.price}</div>
                    <div className="text-sm text-[#686868]">per month</div>
                  </div>

                  <Button
                    className={`mb-auto ${plan.popular ? 'bg-black text-white hover:bg-black/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Section rows */}
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <div className="grid grid-cols-5">
                <div className="col-span-1 p-6 bg-[#fdfdfd] border-b border-r border-[#f1f1f3]">
                  <h4 className="text-lg font-semibold">{section.title}</h4>
                </div>

                {plans.map((plan, planIndex) => (
                  <div
                    key={planIndex}
                    className={`col-span-1 p-6 border-b ${planIndex < plans.length - 1 ? 'border-r' : ''} border-[#f1f1f3] ${plan.popular ? 'bg-[#fdfdfd]' : ''}`}
                  />
                ))}
              </div>

              {/* Items within each section */}
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="grid grid-cols-5">
                  <div className="col-span-1 p-6 border-b border-r border-[#f1f1f3]">
                    <div className="text-sm">{item}</div>
                  </div>

                  {plans.map((plan, planIndex) => {
                    const value = plan.configuration[item]
                    return (
                      <div
                        key={planIndex}
                        className={`col-span-1 p-6 border-b ${planIndex < plans.length - 1 ? 'border-r' : ''} border-[#f1f1f3] ${plan.popular ? 'bg-[#fdfdfd]' : ''}`}
                      >
                        {typeof value === 'boolean' ? (
                          value ? <Check className="h-5 w-5 text-black" /> : null
                        ) : (
                          <div className="text-sm whitespace-pre-line">{value}</div>
                        )}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
