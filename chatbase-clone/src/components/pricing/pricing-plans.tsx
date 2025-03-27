"use client"

import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import { useState } from "react"
import { ButtonProps } from "@/components/ui/button"

const PricingTier = ({
  icon,
  name,
  price,
  popular = false,
  features = [],
  ctaText = "Subscribe",
  ctaVariant = "outline"
}: {
  icon: React.ReactNode,
  name: string,
  price: string,
  popular?: boolean,
  features?: string[],
  ctaText?: string,
  ctaVariant?: Pick<ButtonProps, "variant">["variant"]
}) => {
  return (
    <div className={`bg-white border rounded-3xl p-8 ${popular ? 'border-gradient-to-r from-[#ff4d4d] to-[#f182b7]' : 'border-[#f1f1f3]'}`}>
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-xl font-bold">{name}</h3>
        {popular && (
          <span className="bg-black text-white text-xs px-2 py-1 rounded-full">Popular</span>
        )}
      </div>

      <div className="mb-8">
        <div className="flex items-baseline">
          <span className="text-5xl font-bold">{price}</span>
          <span className="text-sm text-[#686868] ml-1">per month</span>
        </div>
      </div>

      <Button
        className={`w-full mb-8 ${popular ? 'border-none bg-black text-white hover:bg-black/90' : ''}`}
        variant={ctaVariant}
      >
        {ctaText}
      </Button>

      <div className="space-y-4">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Predictable pricing<br />
            scalable plans
          </h2>
          <p className="text-xl text-[#686868]">
            Designed for every stage of your journey.
          </p>
        </div>

        <div className="flex justify-center mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PricingTier
            icon={<div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8V16M8 12H16" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>}
            name="Free"
            price="$0"
            ctaText="Get started"
            features={[
              "Access to fast models",
              "100 message credits/month",
              "400 KB per AI agent",
              "1 team member",
              "1 AI agent",
              "Limit of 10 links to train on"
            ]}
          />

          <PricingTier
            icon={<div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
              <Star className="h-3 w-3 text-blue-500" />
            </div>}
            name="Hobby"
            price="$40"
            features={[
              "Everything in Free +",
              "Access to advanced models",
              "2,000 message credits/month",
              "1 AI agent",
              "5 AI Actions per AI agent",
              "33 MB per AI agent"
            ]}
          />

          <PricingTier
            icon={<div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>}
            name="Standard"
            price="$150"
            popular={true}
            ctaVariant="default"
            features={[
              "Everything in Hobby +",
              "12,000 message credits/month",
              "10 AI Actions per AI agent",
              "3 team members",
              "2 AI agents"
            ]}
          />

          <PricingTier
            icon={<div className="h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 8L2 22" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 15H9" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>}
            name="Pro"
            price="$500"
            features={[
              "Everything in Standard +",
              "40,000 message credits/month",
              "15 AI Actions per AI agent",
              "5+ team members",
              "3 AI agents",
              "Advanced analytics"
            ]}
          />
        </div>
      </div>
    </section>
  )
}
