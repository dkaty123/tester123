"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export function BlogCategories() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const categories = [
    { name: "AI Technology", count: 12, slug: "ai-technology" },
    { name: "Tutorials", count: 8, slug: "tutorials" },
    { name: "Case Studies", count: 6, slug: "case-studies" },
    { name: "Product Updates", count: 5, slug: "product-updates" },
    { name: "Best Practices", count: 9, slug: "best-practices" },
    { name: "Industry Insights", count: 7, slug: "industry-insights" },
    { name: "Future of Work", count: 4, slug: "future-of-work" },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>

      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={category.slug}>
            <Link
              href={`/blog/category/${category.slug}`}
              className="relative flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="hoverBackground"
                  className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
              <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                {category.name}
              </span>
              <span className="inline-flex items-center justify-center h-6 min-w-6 px-2 text-xs font-medium rounded-full bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                {category.count}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-3">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Link href="/blog/tag/ai-agents" className="px-3 py-1 text-sm bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 rounded-full transition-colors">
            #ai-agents
          </Link>
          <Link href="/blog/tag/customer-experience" className="px-3 py-1 text-sm bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 rounded-full transition-colors">
            #customer-experience
          </Link>
          <Link href="/blog/tag/support" className="px-3 py-1 text-sm bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 rounded-full transition-colors">
            #support
          </Link>
          <Link href="/blog/tag/automation" className="px-3 py-1 text-sm bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 rounded-full transition-colors">
            #automation
          </Link>
          <Link href="/blog/tag/machine-learning" className="px-3 py-1 text-sm bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 rounded-full transition-colors">
            #machine-learning
          </Link>
        </div>
      </div>
    </div>
  )
}
