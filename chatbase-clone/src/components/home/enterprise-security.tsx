import { ArrowRight, Database, Lock, Shield } from "lucide-react"
import Link from "next/link"

export function EnterpriseSecurity() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Enterprise-grade<br />
              security & privacy
            </h2>
            <p className="text-lg text-[#686868] mb-12">
              We take security and compliance seriously. Chatbase is SOC 2 Type II and GDPR compliant, trusted by thousands of businesses to build secure and compliant AI Agents.
            </p>

            <div className="flex items-center gap-6">
              <div className="h-20 w-20 rounded-full border-2 border-gray-200 flex items-center justify-center">
                <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="50" fill="#f5f5f7"/>
                  <path d="M30 35H70M30 35V65C30 67.7614 32.2386 70 35 70H65C67.7614 70 70 67.7614 70 65V35M30 35C30 32.2386 32.2386 30 35 30H65C67.7614 30 70 32.2386 70 35M45 50H55M45 60H55" stroke="#666" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="h-20 w-20 rounded-full border-2 border-gray-200 flex items-center justify-center">
                <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="50" fill="#f5f5f7"/>
                  <path d="M30 40L50 30L70 40V60L50 70L30 60V40Z" stroke="#666" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M40 45V55L50 60L60 55V45L50 40L40 45Z" stroke="#666" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M30 40L50 50M50 50V70M70 40L50 50" stroke="#666" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-[#f1f1f3]">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="50" fill="#f5f9ff"/>
                    <rect x="30" y="30" width="40" height="40" rx="5" fill="#3de1f5"/>
                    <path d="M45 60H55M45 50H55M35 30H65C67.7614 30 70 32.2386 70 35V65C70 67.7614 67.7614 70 65 70H35C32.2386 70 30 67.7614 30 65V35C30 32.2386 32.2386 30 35 30Z" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Your data stays yours</h3>
                  <p className="text-[#686868]">
                    Your data is only accessible to your AI agent and is never used to train models.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#f1f1f3]">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="50" fill="#f5f9ff"/>
                    <rect x="30" y="30" width="40" height="40" rx="5" fill="#3de1f5"/>
                    <path d="M35 45V40C35 37.2386 37.2386 35 40 35H60C62.7614 35 65 37.2386 65 40V45M40 65H60C62.7614 65 65 62.7614 65 60V50C65 47.2386 62.7614 45 60 45H40C37.2386 45 35 47.2386 35 50V60C35 62.7614 37.2386 65 40 65Z" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M45 55H55" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Data encryption</h3>
                  <p className="text-[#686868]">
                    All data is encrypted at rest and in transit. We use industry-standard encryption algorithms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#f1f1f3]">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="50" fill="#f5f9ff"/>
                    <rect x="30" y="30" width="40" height="40" rx="5" fill="#f182b7"/>
                    <path d="M30 40L50 30L70 40V60L50 70L30 60V40Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M30 40L50 50M50 50V70M70 40L50 50" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure integrations</h3>
                  <p className="text-[#686868]">
                    We use verified variables to ensure users can access only their own data in your systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-12 justify-start">
          <div className="h-8 w-8 bg-[#f5f5f7] rounded-full flex items-center justify-center">
            <Shield className="h-4 w-4 text-gray-500" />
          </div>
          <span className="text-[#686868]">Chatbase is committed to safeguarding your data.</span>
          <Link href="/security" className="flex items-center gap-1 text-black font-medium">
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
