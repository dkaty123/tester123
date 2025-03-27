import { Check, Clock, UserCircle2, ArrowUpRight, Brain } from "lucide-react"

export function CustomerBenefits() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-2 w-2 rounded-full bg-[#ff5277]"></div>
          <span className="text-sm font-medium">Benefits</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Works like the best customer service agents
            </h2>
          </div>
          <div>
            <p className="text-xl text-[#686868]">
              Chatbase is designed to work with your existing tools and workflows.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
          <div className="md:col-span-3">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#ff4d4d] to-[#ff8c00] p-1">
              <div className="bg-white p-8 rounded-3xl">
                <h3 className="text-2xl font-bold mb-8">Plan details</h3>

                <div className="space-y-6 mb-12">
                  <div className="h-4 w-3/4 bg-gray-100 rounded-full"></div>
                  <div className="h-3 w-1/2 bg-gray-100 rounded-full"></div>

                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-[#686868]">Renew date:</span>
                    <span className="font-medium">23 Jan, 2025</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[#686868]">Status:</span>
                    <span className="text-red-500 font-medium">Expired</span>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-black text-white rounded-full px-4 py-2 text-sm flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    <span>Checking plan details...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[#fff1f8] flex items-center justify-center flex-shrink-0 mt-1">
                  <UserCircle2 className="h-5 w-5 text-[#ff5277]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Personalized answers</h4>
                  <p className="text-[#686868]">
                    Your agent knows the logged in user and can retrieve their information to provide personalized answers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[#f5f5f7] flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="h-5 w-5 text-[#686868]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Instant actions</h4>
                  <p className="text-[#686868]">
                    Actions are performed in real-time, allowing customers to get immediate assistance without waiting.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[#f5f5f7] flex items-center justify-center flex-shrink-0 mt-1">
                  <Brain className="h-5 w-5 text-[#686868]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Empathetic & on-brand</h4>
                  <p className="text-[#686868]">
                    Your agent maintains your brand voice and responds with empathy to create a positive customer experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[#f5f5f7] flex items-center justify-center flex-shrink-0 mt-1">
                  <ArrowUpRight className="h-5 w-5 text-[#686868]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Smart escalations</h4>
                  <p className="text-[#686868]">
                    When needed, your agent knows when to escalate complex issues to human agents seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
