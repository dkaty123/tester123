"use client"

import { useState, useEffect } from "react"
import { SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BlogHero() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    setIsInView(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-[#edf1f7] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Insights & Resources from Sampling Labs
          </h1>
          <p
            className={`text-lg md:text-xl text-gray-600 mb-8 transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Discover the latest trends, best practices, and expert advice on AI agents, customer support,
            and creating exceptional customer experiences.
          </p>

          <div
            className={`max-w-2xl mx-auto relative transition-all duration-700 delay-400 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-5 pr-16 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-700"
              />
              <Button
                className="absolute right-1 top-1 h-12 w-12 rounded-full bg-gradient-to-r from-[#3de1f5] to-[#ff4d4d] hover:opacity-90 transition-all duration-300"
              >
                <SearchIcon className="w-5 h-5 text-white" />
              </Button>
            </div>
          </div>

          <div
            className={`mt-8 flex flex-wrap justify-center gap-3 transition-all duration-700 delay-600 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-sm font-medium text-gray-600 mr-2">Popular topics:</span>
            <a href="#" className="text-sm font-medium px-4 py-2 rounded-full bg-white hover:bg-gray-100 text-gray-700 transition-all duration-300 hover:shadow-md">AI Agents</a>
            <a href="#" className="text-sm font-medium px-4 py-2 rounded-full bg-white hover:bg-gray-100 text-gray-700 transition-all duration-300 hover:shadow-md">Customer Support</a>
            <a href="#" className="text-sm font-medium px-4 py-2 rounded-full bg-white hover:bg-gray-100 text-gray-700 transition-all duration-300 hover:shadow-md">Automation</a>
            <a href="#" className="text-sm font-medium px-4 py-2 rounded-full bg-white hover:bg-gray-100 text-gray-700 transition-all duration-300 hover:shadow-md">Data Security</a>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-[#ff4d4d]/5 blur-3xl" />
      <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] rounded-full bg-[#3de1f5]/5 blur-3xl" />
      <div className="absolute top-[20%] left-[10%] w-[150px] h-[150px] rounded-full bg-gradient-to-r from-[#ff4d4d]/5 to-[#3de1f5]/5 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[200px] h-[200px] rounded-full bg-gradient-to-r from-[#3de1f5]/5 to-[#ff4d4d]/5 blur-3xl animate-pulse-slow" />
    </section>
  )
}
