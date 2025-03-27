import { HeroSection } from "@/components/home/hero-section"
import { FeaturesGrid } from "@/components/home/features-grid"
import { SolutionSection } from "@/components/home/solution-section"
import { AgentPowers } from "@/components/home/agent-powers"
import { PlatformShowcase } from "@/components/home/platform-showcase"
import { CustomerBenefits } from "@/components/home/customer-benefits"
import { EnterpriseSecurity } from "@/components/home/enterprise-security"
import { BlogSection } from "@/components/home/blog-section"
import { DashboardPreview } from "@/components/home/dashboard-preview"
import { Testimonials } from "@/components/home/testimonials"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesGrid />
      <SolutionSection />
      <AgentPowers />
      <PlatformShowcase />
      <CustomerBenefits />
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Powerful Dashboard and Analytics
            </h2>
            <p className="text-xl text-gray-600">
              Get detailed insights and metrics to optimize your AI agents' performance and improve customer satisfaction.
            </p>
          </div>
          <DashboardPreview />
        </div>
      </section>
      <EnterpriseSecurity />
      <BlogSection />
      <Testimonials />
      <CTASection />
    </div>
  )
}
