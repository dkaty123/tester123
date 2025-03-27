"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function FeaturedPosts() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const featuredPosts = [
    {
      id: 1,
      title: "How AI Agents are Transforming Customer Support in 2025",
      excerpt: "Discover how businesses are leveraging AI agents to provide 24/7 support, reduce costs, and improve customer satisfaction.",
      category: "AI Technology",
      date: "April 3, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1470&auto=format&fit=crop",
      slug: "how-ai-agents-are-transforming-customer-support"
    },
    {
      id: 2,
      title: "The Future of Work: Collaboration Between Humans and AI Agents",
      excerpt: "Explore how AI and humans are working together to create more efficient workflows and better customer experiences.",
      category: "Future of Work",
      date: "March 28, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop",
      slug: "future-of-work-collaboration-humans-ai-agents"
    },
    {
      id: 3,
      title: "5 Ways to Optimize Your Customer Support AI for Better Results",
      excerpt: "Learn practical strategies to improve your AI agent's performance and deliver exceptional customer support experiences.",
      category: "Best Practices",
      date: "March 21, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1470&auto=format&fit=crop",
      slug: "5-ways-to-optimize-customer-support-ai"
    }
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Articles</h2>
        <Link
          href="/blog/featured"
          className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center group"
        >
          View all featured
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredPosts.map((post, index) => (
          <div
            key={post.id}
            className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden transform hover:-translate-y-1 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 100 + 100}ms` }}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 group"
              >
                Read more
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
