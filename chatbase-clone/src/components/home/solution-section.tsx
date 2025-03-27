import { HowItWorksSteps } from "./how-it-works-steps"

export function SolutionSection() {
  return (
    <section className="py-16 md:py-24 bg-[#fafbfc]">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="flex items-center gap-2 mb-12">
          <div className="h-2 w-2 rounded-full bg-[#ff5277]"></div>
          <span className="text-sm font-medium">How it works</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-12">
              An end-to-end solution for conversational AI
            </h2>

            <HowItWorksSteps />
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm relative">
            <div className="mb-8">
              <p className="text-xl text-[#686868]">
                With Chatbase, your customers can effortlessly find answers, resolve issues, and take meaningful actions through seamless and engaging AI-driven conversations.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden border border-[#f1f1f3] mb-8">
              <div className="bg-white p-6 rounded-t-3xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 rounded-full bg-[#f5f5f7] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#666666"/>
                      <path d="M13 7H11V13H17V11H13V7Z" fill="#666666"/>
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-[#686868]">Can I book a meeting with Sales?</div>
                  <div className="ml-auto">
                    <div className="h-6 w-6 rounded-full overflow-hidden bg-gray-200">
                      <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3">
                <div className="h-2.5 w-full bg-gradient-to-r from-[#3de1f5] to-[#ff4d4d] rounded-full"></div>
              </div>
            </div>

            <button className="absolute bottom-10 right-10 h-14 w-14 rounded-full bg-[#f1f1f3] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19L8 12L15 5" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
