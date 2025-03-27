"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, useAnimation } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const controls = useAnimation()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email) {
      // Animate container
      controls.start({
        scale: [1, 1.03, 1],
        transition: { duration: 0.5 }
      })

      // Show success state
      setTimeout(() => {
        setIsSubmitted(true)
        setEmail("")
      }, 500)

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }
  }

  return (
    <motion.div
      className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-sm p-6"
      animate={controls}
    >
      <div className="text-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <Send className="h-5 w-5 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Stay Updated</h3>
        <p className="text-gray-600 text-sm mt-2">
          Get the latest articles and insights delivered straight to your inbox.
        </p>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-3">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-all duration-300 py-2"
          >
            Subscribe
          </Button>
          <p className="text-xs text-gray-500 mt-2 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      ) : (
        <motion.div
          className="bg-white rounded-lg p-4 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
          <h4 className="font-bold text-gray-900">Thanks for subscribing!</h4>
          <p className="text-sm text-gray-600">
            You'll start receiving our latest updates soon.
          </p>
        </motion.div>
      )}

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>🔒 No spam</span>
          <span>📱 Mobile-friendly</span>
          <span>🚀 Weekly updates</span>
        </div>
      </div>
    </motion.div>
  )
}
