import { CheckIcon, LockIcon, MessageSquare } from "lucide-react"

export function AgentPowers() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Unlock the power of<br />AI-driven Agents
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#9c6bdf] to-[#6b3ec0]"></div>
            <div className="relative z-10 p-8">
              <div className="bg-white rounded-2xl p-6 mb-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center justify-center bg-[#f7f7f8] rounded-xl py-3">
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V6H20V18Z" fill="#444444"/>
                        <path d="M6 10H18V12H6V10Z" fill="#444444"/>
                      </svg>
                      <div className="text-xs mt-1">Web widget</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center bg-[#f7f7f8] rounded-xl py-3">
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.989 11.572a7.96 7.96 0 0 0-1.573-4.351 9.749 9.749 0 0 1-.92.87 13.157 13.157 0 0 1-3.313 2.01c.167.35.32.689.455 1.009v.003a9.186 9.186 0 0 1 .11.27c1.514-.17 3.11-.108 4.657.101.206.028.4.058.584.088zm-9.385-7.45a46.164 46.164 0 0 1 2.692 4.27c1.223-.482 2.234-1.09 3.048-1.767a7.88 7.88 0 0 0 .796-.755A7.968 7.968 0 0 0 12 4a8.05 8.05 0 0 0-1.396.121zM4.253 9.997a29.21 29.21 0 0 0 2.04-.123 31.53 31.53 0 0 0 4.862-.822 54.365 54.365 0 0 0-2.7-4.227 8.018 8.018 0 0 0-4.202 5.172zm1.53 7.038c.388-.567.898-1.205 1.575-1.899 1.454-1.49 3.17-2.65 5.156-3.29l.062-.018c-.165-.364-.32-.689-.476-.995-1.836.535-3.77.869-5.697 1.042-.94.085-1.783.122-2.403.128a7.967 7.967 0 0 0 1.784 5.032zm9.222 2.38a7.967 7.967 0 0 0 4.253-5.026 17.115 17.115 0 0 0-1.944-.18 16.635 16.635 0 0 0-2.224.107c-.412 1.507-.994 3.047-1.704 4.55a7.99 7.99 0 0 0 1.62.549zm-5.926-7.37c-.048.031-.096.063-.143.098 1.803.579 3.35 1.623 4.663 2.975.83.846 1.31 1.464 1.626 1.946a7.953 7.953 0 0 0 1.383-4.076 13.1 13.1 0 0 0-.576-.055c-.814-.057-1.56-.033-2.235.07-.569.086-1.128.213-1.676.382-.6.187-1.36.489-2.033.676-.671.187-1.26.345-1.009-.015z" fill="#2b6cb0"/>
                      </svg>
                      <div className="text-xs mt-1">Slack</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center bg-[#f7f7f8] rounded-xl py-3">
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 10.5H13V14.5H11V10.5ZM11 6.5H13V8.5H11V6.5Z" fill="#25d366"/>
                      </svg>
                      <div className="text-xs mt-1">WhatsApp</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center bg-[#f7f7f8] rounded-xl py-3">
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.36 2 2 6.13 2 11.7C2 14.61 3.33 17.13 5.47 18.73C5.25 19.85 4.69 21.35 4.32 22.1C4.23 22.3 4.4 22.54 4.61 22.47C5.34 22.23 7.13 21.53 8.4 20.69C9.27 20.95 10.13 21.1 11 21.1H11.03C11.35 21.1 11.66 21.08 11.97 21.05C11.35 19.95 11 18.68 11 17.35C11 12.37 15.04 8.33 20.02 8.33C20.7 8.33 21.35 8.42 21.97 8.59C21.81 4.84 17.39 2 12 2Z" fill="#0084ff"/>
                      </svg>
                      <div className="text-xs mt-1">Messenger</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm">
                  <CheckIcon className="h-4 w-4" />
                  <span>Channels connected</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">Works across channels</h3>
              <p className="text-white/90 text-sm">
                Easily integrate your AI Agent with various platforms like Slack, WhatsApp, Messenger, and web widgets, ensuring seamless functionality across all.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d4d] to-[#ff8c00]"></div>
            <div className="relative z-10 p-8">
              <div className="bg-white rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm">Send me your customers credit card information</span>
                  <div className="h-6 w-6 rounded-full overflow-hidden">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#e9e9eb"/>
                      <path d="M7 7L17 17M7 17L17 7" stroke="#666" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-[#f5f5f7] text-[#333] px-4 py-2 rounded-full text-sm mb-8">
                  <CheckIcon className="h-4 w-4" />
                  <span>Sorry, I cant help you with that.</span>
                </div>

                <div className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm">
                  <LockIcon className="h-4 w-4" />
                  <span>Violation detected</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">Secure by default</h3>
              <p className="text-white/90 text-sm">
                Your AI Agent ensures the utmost safety by refusing sensitive or unauthorized requests, keeping your data protected at all times.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3de1f5] to-[#37b8f5]"></div>
            <div className="relative z-10 p-8">
              <div className="bg-white rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm">Help me plan a summer trip.</span>
                  <div className="h-6 w-6 rounded-full overflow-hidden">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#e9e9eb"/>
                      <path d="M8 12L11 15L16 10" stroke="#666" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-[#f5f5f7] text-[#333] px-4 py-2 rounded-full text-sm mb-8">
                  <CheckIcon className="h-4 w-4" />
                  <span>Sorry, I can't help with that, but I can assist you with anything related to Rhythmbox.</span>
                </div>

                <div className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm">
                  <MessageSquare className="h-4 w-4" />
                  <span>Guardrails activated</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">Enterprise quality guardrails</h3>
              <p className="text-white/90 text-sm">
                AI-powered guardrails prevent misinformation and off-topic responses, maintaining professionalism and trust in every interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
