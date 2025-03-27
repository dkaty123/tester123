import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#f54f9a] via-[#ff4d4d] to-[#ff8c00] opacity-90"></div>
      <div className="absolute inset-0 bg-noise"></div>

      <div className="mx-auto max-w-[1400px] relative z-10 px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Make customer experience your competitive edge
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Use Chatbase to deliver exceptional support experiences that set you apart from the competition.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/dashboard?next=create-new-chatbot">
            <Button
              size="lg"
              className="bg-black hover:bg-black/90 text-white rounded-md px-8 py-3 h-auto font-medium"
            >
              Build your agent
            </Button>
          </Link>

          <div className="flex items-center gap-2 text-sm text-white mt-2 sm:mt-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/70">
              <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="currentColor" fillOpacity="0.12"/>
              <path d="M5.5 9.5L7.5 11.5L12.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  )
}
