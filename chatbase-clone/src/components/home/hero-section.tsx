"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckIcon, SendIcon } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [typedText, setTypedText] = useState("I want")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section className="pt-16 pb-16 md:pt-20 md:pb-16 lg:py-24 overflow-hidden bg-[#fafbfc]">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight text-[#111112] animate-fade-up">
              AI Agents for<br />
              magical customer<br />
              experiences
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground animate-fade-up-delay-1">
              Chatbase is the complete platform for building & deploying AI Agents for your business to handle customer support & drive more revenue.
            </p>
            <div className="pt-2 animate-fade-up-delay-2">
              <Link
                href="/dashboard?next=create-new-chatbot"
                className="relative inline-flex items-center overflow-hidden group"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#ff0080] via-[#ff4d4d] to-[#ff8c00] opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Button
                  size="lg"
                  className="relative z-10 bg-black hover:bg-black text-white rounded-lg px-6 py-3 h-auto text-base font-medium group-hover:scale-[1.03] transition-transform duration-300"
                >
                  Build your agent
                </Button>
              </Link>
              <div className="mt-3 flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
                  <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="currentColor" fillOpacity="0.12"/>
                  <path d="M5.5 9.5L7.5 11.5L12.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm text-gray-500">No credit card required</span>
              </div>
            </div>

            <div className="pt-8 animate-fade-up-delay-3">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by 9000+ business worldwide
              </p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="text-[#4a4b4d] font-semibold hover-up">SIEMENS</div>
                <div className="text-[#4a4b4d] font-semibold hover-up">POSTMAN</div>
                <div className="text-[#4a4b4d] font-semibold hover-up">alpian</div>
                <div className="text-[#4a4b4d] font-semibold hover-up">Opal</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up-delay-2">
            <div className="relative bg-[#f8f9fa] rounded-3xl shadow-lg p-8 max-w-md mx-auto transform transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px]">
              <div className="flex flex-col h-[380px]">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#f54f9a] flex items-center justify-center text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="currentColor"/>
                      <path d="M8 12H16M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="ml-3 text-base font-medium">
                    AI Assistant
                  </div>
                </div>

                <div className="p-4 mb-4 rounded-2xl bg-[#f1f1f3] text-[#111112]">
                  <p>Hi! I'm an AI assistant. How can I help you today?</p>
                </div>

                <div className="mt-auto">
                  <div className="relative">
                    <input
                      type="text"
                      value={typedText + (showCursor ? "|" : "")}
                      className="w-full h-12 px-4 pr-12 border border-[#e5e7eb] rounded-2xl bg-white outline-none text-[#111112]"
                      readOnly
                    />
                    <Button
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full h-8 w-8 p-0 bg-black hover:bg-black text-white transition-transform duration-300 hover:scale-110"
                    >
                      <SendIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="bg-gradient-to-r from-[#3de1f5] to-[#ff4d4d] h-2 w-full rounded-full mt-4 opacity-70 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 animate-pulse-soft"></div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[-60px] right-[-20px] flex items-center animate-float">
                <Button size="icon" className="rounded-full h-12 w-12 p-0 bg-[#f1f1f3] hover:bg-[#e5e7eb] text-[#111112] transition-all duration-300 hover:scale-110">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 9H14M10 13H14M10 17H14M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              </div>
            </div>

            {/* Chat bubble */}
            <div className="absolute bottom-[-80px] right-10 p-4 px-6 bg-white rounded-2xl shadow-lg max-w-[300px] hidden md:block animate-fade-up-delay-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-400 text-xl">👋</span>
                <p className="font-medium text-sm">Hi! I am Chatbase AI, ask me anything about Chatbase!</p>
              </div>
              <p className="text-xs text-gray-500">By the way, you can create an agent like me for your website! 😊</p>
            </div>

            {/* Floating elements for decoration */}
            <div className="absolute top-[-80px] right-[-80px] w-[200px] h-[200px] rounded-full bg-[#ffdefc]/30 blur-3xl animate-pulse-soft"></div>
            <div className="absolute bottom-[-60px] left-[-60px] w-[150px] h-[150px] rounded-full bg-[#cff6ff]/30 blur-3xl animate-pulse-soft"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
