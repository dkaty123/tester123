import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Facebook, Linkedin, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"

// This is a sample blog post data - in a real app, this would come from a CMS or API
const getBlogPostData = (slug) => {
  // Sample blog post data
  const posts = {
    "how-ai-agents-are-transforming-customer-support": {
      title: "How AI Agents are Transforming Customer Support in 2025",
      description: "Discover how businesses are leveraging AI agents to provide 24/7 support, reduce costs, and improve customer satisfaction.",
      date: "April 3, 2025",
      readTime: "5 min read",
      author: {
        name: "Dr. Sarah Johnson",
        role: "AI Research Director",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      category: "AI Technology",
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1470&auto=format&fit=crop",
      content: `
        <p class="text-lg">The landscape of customer support is being rapidly transformed by the integration of AI agents. As we move through 2025, businesses are increasingly turning to sophisticated AI solutions to enhance their customer service operations.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">The Evolution of AI in Customer Support</h2>
        <p>Customer support has evolved dramatically over the past decade. What began as simple chatbots with limited capabilities has transformed into conversational AI agents capable of understanding context, handling complex inquiries, and even detecting emotional states.</p>
        <p>Modern AI agents are powered by large language models (LLMs) that have been fine-tuned specifically for customer service scenarios. These models are continuously learning from millions of customer interactions, allowing them to provide increasingly accurate and helpful responses.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Key Benefits of AI Agents in Customer Support</h2>
        <h3 class="text-xl font-semibold mt-6 mb-3">1. 24/7 Availability</h3>
        <p>One of the most significant advantages of AI agents is their ability to provide round-the-clock support. Unlike human agents who need breaks and work in shifts, AI can handle customer inquiries at any time of day, ensuring customers never have to wait for assistance.</p>

        <h3 class="text-xl font-semibold mt-6 mb-3">2. Cost Efficiency</h3>
        <p>Implementing AI agents can substantially reduce operational costs. While there's an initial investment, the long-term savings are significant as businesses can handle a higher volume of queries without proportionally increasing staff.</p>

        <h3 class="text-xl font-semibold mt-6 mb-3">3. Consistency in Service</h3>
        <p>AI agents deliver consistent responses to similar queries, eliminating the variability that can occur with human agents. This consistency helps maintain brand voice and ensures all customers receive the same high-quality information.</p>

        <h3 class="text-xl font-semibold mt-6 mb-3">4. Multilingual Support</h3>
        <p>Modern AI agents can communicate fluently in multiple languages, breaking down language barriers and allowing businesses to serve a global customer base without the need for specialized language teams.</p>

        <h3 class="text-xl font-semibold mt-6 mb-3">5. Scalability</h3>
        <p>During peak periods or sudden increases in inquiry volume, AI agents can scale instantly to meet demand without the need for additional resources or training.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Real-World Applications</h2>
        <p>Leading companies across various industries are already implementing advanced AI agents to transform their customer support:</p>
        <ul class="list-disc pl-6 mt-2 mb-4 space-y-2">
          <li><strong>E-commerce:</strong> AI agents handle order status inquiries, process returns, and make product recommendations based on customer preferences.</li>
          <li><strong>Banking and Finance:</strong> Secure AI agents assist with account inquiries, transaction history, and even fraud detection.</li>
          <li><strong>Healthcare:</strong> AI supports appointment scheduling, medication reminders, and preliminary symptom assessment.</li>
          <li><strong>Telecommunications:</strong> Technical issues, service upgrades, and billing inquiries are efficiently managed by AI systems.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">The Human-AI Collaboration</h2>
        <p>The most effective customer support strategies involve collaboration between AI agents and human representatives. AI handles routine inquiries and initial interactions, freeing human agents to focus on complex issues that require empathy, creative problem-solving, or specialized knowledge.</p>
        <p>This hybrid approach combines the efficiency and scalability of AI with the emotional intelligence and adaptability of human agents, creating a superior customer experience.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Looking Ahead: The Future of AI in Customer Support</h2>
        <p>As we look toward the future, AI agents will continue to evolve with enhanced capabilities:</p>
        <ul class="list-disc pl-6 mt-2 mb-4 space-y-2">
          <li>Advanced emotional intelligence to better understand and respond to customer sentiment</li>
          <li>Deeper integration with backend systems for more personalized service</li>
          <li>Improved ability to predict customer needs based on behavioral patterns</li>
          <li>More sophisticated voice interaction capabilities for seamless voice support</li>
        </ul>
        <p>Businesses that embrace these advancements will be well-positioned to deliver exceptional customer experiences while optimizing operational efficiency.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
        <p>AI agents are fundamentally transforming customer support by providing round-the-clock assistance, reducing costs, ensuring consistency, and enabling scalability. As the technology continues to evolve, the collaboration between AI and human agents will create increasingly seamless and effective customer support experiences.</p>
        <p>For businesses looking to stay competitive in 2025 and beyond, implementing advanced AI agents is no longer optional—it's a strategic necessity that directly impacts customer satisfaction, retention, and ultimately, the bottom line.</p>
      `
    },
    // Additional blog posts would be defined here
  }

  return posts[slug] || null
}

// Generate metadata for SEO
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = getBlogPostData(params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found | Sampling Labs",
      description: "The blog post you're looking for could not be found."
    }
  }

  return {
    title: `${post.title} | Sampling Labs Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

export default function BlogPost({ params }) {
  const post = getBlogPostData(params.slug)

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-8">The blog post you're looking for could not be found.</p>
        <Link href="/blog">
          <Button>Return to Blog</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
          <div className="container mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center mb-4 text-sm font-medium text-white/90 hover:text-white bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600/90 text-white">
                  {post.category}
                </span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
              {/* Author Info */}
              <div className="flex items-center mb-8 pb-8 border-b">
                <div className="h-12 w-12 rounded-full overflow-hidden relative mr-4">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{post.author.name}</h3>
                  <p className="text-sm text-gray-500">{post.author.role}</p>
                </div>
              </div>

              {/* Article Content */}
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Related Topics</h4>
                <div className="flex flex-wrap gap-2">
                  <Link href="/blog/tag/ai-agents" className="px-3 py-1 text-sm bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 rounded-full transition-colors">
                    #ai-agents
                  </Link>
                  <Link href="/blog/tag/customer-support" className="px-3 py-1 text-sm bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 rounded-full transition-colors">
                    #customer-support
                  </Link>
                  <Link href="/blog/tag/automation" className="px-3 py-1 text-sm bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 rounded-full transition-colors">
                    #automation
                  </Link>
                  <Link href="/blog/tag/business" className="px-3 py-1 text-sm bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 rounded-full transition-colors">
                    #business
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Share Widget */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Share this article</h3>
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center justify-center h-10 w-10 rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2]/20 transition-colors">
                    <Twitter className="h-4 w-4" />
                  </button>
                  <button className="flex items-center justify-center h-10 w-10 rounded-full bg-[#4267B2]/10 text-[#4267B2] hover:bg-[#4267B2]/20 transition-colors">
                    <Facebook className="h-4 w-4" />
                  </button>
                  <button className="flex items-center justify-center h-10 w-10 rounded-full bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5]/20 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors ml-auto">
                    <Share2 className="h-4 w-4" />
                  </button>
                  <button className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                    <Bookmark className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Related Posts Widget */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  <Link href="/blog/future-of-work-collaboration-humans-ai-agents" className="group block">
                    <div className="flex items-start">
                      <div className="relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop"
                          alt="Blog thumbnail"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">The Future of Work: Collaboration Between Humans and AI Agents</h4>
                        <p className="text-xs text-gray-500 mt-1">March 28, 2025</p>
                      </div>
                    </div>
                  </Link>

                  <Link href="/blog/5-ways-to-optimize-customer-support-ai" className="group block">
                    <div className="flex items-start">
                      <div className="relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1470&auto=format&fit=crop"
                          alt="Blog thumbnail"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">5 Ways to Optimize Your Customer Support AI for Better Results</h4>
                        <p className="text-xs text-gray-500 mt-1">March 21, 2025</p>
                      </div>
                    </div>
                  </Link>

                  <Link href="/blog/ethical-considerations-ai-customer-facing-roles" className="group block">
                    <div className="flex items-start">
                      <div className="relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1473&auto=format&fit=crop"
                          alt="Blog thumbnail"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">Ethical Considerations When Deploying AI in Customer-Facing Roles</h4>
                        <p className="text-xs text-gray-500 mt-1">March 26, 2025</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Newsletter Widget */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Subscribe to our newsletter</h3>
                <p className="text-sm text-gray-600 mb-4">Get the latest articles and resources delivered straight to your inbox.</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  />
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-all duration-300 py-2"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
