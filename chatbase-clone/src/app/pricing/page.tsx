import { PricingAddons } from "@/components/pricing/pricing-addons"
import { PlanComparison } from "@/components/pricing/plan-comparison"
import { PricingPlans } from "@/components/pricing/pricing-plans"
import { Metadata } from "next"
import { CTASection } from "@/components/home/cta-section"
import { FaqAccordion } from "@/components/pricing/faq-accordion"

export const metadata: Metadata = {
  title: "Pricing | Chatbase",
  description: "Predictable pricing, scalable plans. Designed for every stage of your journey.",
}

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      <PricingPlans />
      <PricingAddons />
      <PlanComparison />
      <FaqAccordion />
      <CTASection />
    </div>
  )
}
