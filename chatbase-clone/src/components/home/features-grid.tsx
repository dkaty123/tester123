export function FeaturesGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-2 w-2 rounded-full bg-[#ff5277]"></div>
          <span className="text-sm font-medium">Highlights</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              The complete platform for AI support agents
            </h2>
          </div>
          <div>
            <p className="text-xl text-[#686868]">
              Chatbase is designed for building AI support agents that solve your customers' hardest problems while improving business outcomes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-[#f1f1f3]">
            <div className="mb-8">
              <div className="h-24 w-24 mb-4 rounded-2xl flex items-center justify-center bg-black relative">
                <span className="text-5xl font-bold text-white">C</span>
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-r from-[#ff4d4d] to-[#f182b7]"></div>
              </div>

              <div className="flex flex-wrap gap-3 mb-16">
                <div className="h-12 w-12 rounded-xl bg-white border border-[#f1f1f3] flex items-center justify-center">
                  <span className="font-bold">A\</span>
                </div>
                <div className="h-12 w-12 rounded-xl bg-white border border-[#f1f1f3] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#4285F4"/>
                    <circle cx="12" cy="12" r="10" fill="url(#paint0_linear)"/>
                    <defs>
                      <linearGradient id="paint0_linear" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#EA4335"/>
                        <stop offset="0.5" stopColor="#4285F4"/>
                        <stop offset="1" stopColor="#34A853"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="h-12 w-12 rounded-xl bg-white border border-[#f1f1f3] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4 6V12C4 15.31 7.58 19.16 12 21C16.42 19.16 20 15.31 20 12V6L12 2Z" fill="#045C6C"/>
                  </svg>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">Purpose-built for LLMs</h3>
            <p className="text-[#686868]">
              Language models with reasoning capabilities for effective responses to complex queries.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#f1f1f3]">
            <div className="flex flex-col items-center justify-center mb-16 h-48">
              <div className="flex items-center gap-2 mb-4 p-2 bg-white rounded-lg border border-[#f1f1f3]">
                <button className="p-1">B</button>
                <button className="p-1">I</button>
                <button className="p-1">U</button>
                <button className="p-1">S</button>
              </div>

              <div className="flex gap-1 mb-16">
                <div className="h-5 w-5 rounded-full bg-green-500"></div>
                <div className="h-5 w-5 rounded-full bg-lime-400"></div>
                <div className="h-5 w-5 rounded-full bg-yellow-300"></div>
              </div>

              <button className="px-4 py-2 bg-black rounded-full text-white mb-4 relative overflow-hidden">
                Create agent
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff4d4d] to-[#f182b7]"></div>
              </button>

              <div className="flex items-center gap-2">
                <div className="h-4 w-8 bg-green-400 rounded-full relative">
                  <div className="h-3 w-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                </div>
                <span className="text-xs text-[#888888]">Reply with AI</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">Designed for simplicity</h3>
            <p className="text-[#686868]">
              Create, manage, and deploy AI Agents easily, even without technical skills.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#f1f1f3]">
            <div className="flex justify-center items-center mb-16 h-48">
              <div className="relative w-32 h-32">
                <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-r from-[#ff4d4d] to-orange-500 rounded-b-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-black rounded-2xl">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">Engineered for security</h3>
            <p className="text-[#686868]">
              Enjoy peace of mind with robust encryption and strict compliance standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
