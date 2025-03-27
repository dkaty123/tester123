"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RecentPosts() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 5

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const recentPosts = [
    {
      id: 1,
      title: "Sampling Labs Launches New AI Agent Dashboard for Enterprise",
      excerpt: "Our latest dashboard provides unprecedented insights into AI agent performance with real-time analytics and customizable reporting.",
      category: "Product Updates",
      date: "April 5, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      slug: "sampling-labs-launches-new-ai-agent-dashboard"
    },
    {
      id: 2,
      title: "How to Train Your AI Agent for Industry-Specific Knowledge",
      excerpt: "Learn how to customize your AI agents with domain-specific knowledge to better serve customers in specialized industries.",
      category: "Tutorials",
      date: "April 2, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop",
      slug: "train-ai-agent-for-industry-specific-knowledge"
    },
    {
      id: 3,
      title: "The ROI of AI Customer Support: Real Numbers from Our Clients",
      excerpt: "We break down the actual return on investment our clients have seen after implementing Sampling Labs AI agents for customer support.",
      category: "Case Studies",
      date: "March 29, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1472&auto=format&fit=crop",
      slug: "roi-of-ai-customer-support-real-numbers"
    },
    {
      id: 4,
      title: "Ethical Considerations When Deploying AI in Customer-Facing Roles",
      excerpt: "A comprehensive guide to navigating the ethical landscape of using AI agents for customer interactions.",
      category: "Best Practices",
      date: "March 26, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1473&auto=format&fit=crop",
      slug: "ethical-considerations-ai-customer-facing-roles"
    },
    {
      id: 5,
      title: "Multilingual Support: How Our AI Handles Global Customers",
      excerpt: "Discover how Sampling Labs AI agents can communicate effectively with customers in over 95 languages.",
      category: "Features",
      date: "March 23, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop",
      slug: "multilingual-support-ai-handles-global-customers"
    },
    {
      id: 6,
      title: "Combining Human and AI Support: The Hybrid Model",
      excerpt: "How to create an effective customer support system that leverages both human agents and AI assistants.",
      category: "Strategy",
      date: "March 20, 2025",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop",
      slug: "combining-human-and-ai-support-hybrid-model"
    },
    {
      id: 7,
      title: "Preparing Your Data for AI Agent Training: A Step-by-Step Guide",
      excerpt: "A detailed walkthrough of how to structure and clean your existing support data to train more effective AI agents.",
      category: "Tutorials",
      date: "March 17, 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop",
      slug: "preparing-data-for-ai-agent-training"
    },
  ]

  const totalPages = Math.ceil(recentPosts.length / postsPerPage)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = recentPosts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({
      top: document.getElementById('recent-posts').offsetTop - 100,
      behavior: 'smooth'
    })
  }

  return (
    <div id="recent-posts">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Recent Articles</h2>

      <div className="space-y-8">
        {currentPosts.map((post, index) => (
          <article
            key={post.id}
            className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 100 + 100}ms` }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="relative md:w-1/3 h-48 md:h-auto overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent opacity-60 md:hidden"></div>
                <div className="absolute top-4 left-4 md:hidden">
                  <span className="px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5 md:p-6 md:w-2/3">
                <div className="hidden md:block mb-3">
                  <span className="px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 group"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 p-0 rounded-full"
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <Button
                key={index}
                variant={currentPage === index + 1 ? "default" : "outline"}
                size="sm"
                className={`h-8 w-8 p-0 rounded-full ${
                  currentPage === index + 1 ? "bg-blue-600 hover:bg-blue-700" : ""
                }`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 p-0 rounded-full"
              onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
