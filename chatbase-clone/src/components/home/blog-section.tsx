"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useAnimation } from "framer-motion"

export function BlogSection() {
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    setIsVisible(true)

    if (isVisible) {
      controls.start(i => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1,
          duration: 0.5,
          ease: [0.6, 0.05, -0.01, 0.9]
        }
      }))
    }
  }, [isVisible, controls])

  const featuredPosts = [
    {
      id: 1,
      title: "How AI Agents are Transforming Customer Support in 2025",
      category: "AI Technology",
      date: "April 3, 2025",
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1470&auto=format&fit=crop",
      slug: "how-ai-agents-are-transforming-customer-support"
    },
    {
      id: 2,
      title: "The Future of Work: Collaboration Between Humans and AI Agents",
      category: "Future of Work",
      date: "March 28, 2025",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop",
      slug: "future-of-work-collaboration-humans-ai-agents"
    },
    {
      id: 3,
      title: "5 Ways to Optimize Your Customer Support AI for Better Results",
      category: "Best Practices",
      date: "March 21, 2025",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1470&auto=format&fit=crop",
      slug: "5-ways-to-optimize-customer-support-ai"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-blue-50 blur-[80px] opacity-70"></div>
          <div className="absolute -bottom-[200px] -left-[200px] w-[400px] h-[400px] rounded-full bg-purple-50 blur-[60px] opacity-70"></div>
        </div>

        <div className="relative">
          <motion.div
            className="max-w-2xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-500">
                Latest Insights
              </span> from Our Blog
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated with the latest trends, industry insights, and best practices in AI customer support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                custom={index}
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-blue-600 text-sm font-medium">
                      Read article <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link href="/blog">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all group"
              >
                <span>View all articles</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
