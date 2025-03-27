import { Metadata } from "next"
import { BlogHero } from "@/components/blog/blog-hero"
import { FeaturedPosts } from "@/components/blog/featured-posts"
import { RecentPosts } from "@/components/blog/recent-posts"
import { BlogCategories } from "@/components/blog/blog-categories"
import { Newsletter } from "@/components/blog/newsletter"

export const metadata: Metadata = {
  title: "Sampling Labs Blog | Insights on AI, Customer Experience & Support",
  description: "Stay updated with the latest in AI customer support, automation trends, and how Sampling Labs is revolutionizing customer experiences for businesses of all sizes.",
  keywords: ["AI agents", "customer support", "business automation", "Sampling Labs", "AI blog", "customer experience"],
  openGraph: {
    title: "Sampling Labs Blog | Insights on AI, Customer Experience & Support",
    description: "Stay updated with the latest in AI customer support, automation trends, and how Sampling Labs is revolutionizing customer experiences for businesses of all sizes.",
    url: "https://samplinglabs.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sampling Labs Blog | Insights on AI, Customer Experience & Support",
    description: "Stay updated with the latest in AI customer support, automation trends, and how Sampling Labs is revolutionizing customer experiences for businesses of all sizes.",
  }
}

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BlogHero />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <FeaturedPosts />
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <RecentPosts />
          </div>
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <BlogCategories />
              <Newsletter />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
