import { Inter as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Metadata } from "next"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Sampling Labs | AI Agents for magical customer experiences",
  description: "Sampling Labs is the complete platform for building & deploying AI Agents for your business to handle customer support & drive more revenue.",
  keywords: ["AI agents", "customer support", "customer experience", "Sampling Labs", "AI platform", "business automation"],
  authors: [{ name: "Sampling Labs Team" }],
  creator: "Sampling Labs",
  publisher: "Sampling Labs",
  openGraph: {
    title: "Sampling Labs | AI Agents for magical customer experiences",
    description: "Sampling Labs is the complete platform for building & deploying AI Agents for your business to handle customer support & drive more revenue.",
    url: "https://samplinglabs.com",
    siteName: "Sampling Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sampling Labs | AI Agents for magical customer experiences",
    description: "Sampling Labs is the complete platform for building & deploying AI Agents for your business to handle customer support & drive more revenue.",
    creator: "@samplinglabs",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
