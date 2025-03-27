'use client'

import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Mail, Shield, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[10%] right-[30%] w-[300px] h-[300px] rounded-full bg-pink-500/10 blur-[120px]"></div>
          <div className="absolute bottom-[10%] left-[20%] w-[250px] h-[250px] rounded-full bg-cyan-500/10 blur-[100px]"></div>
        </div>

        <div className="mx-auto max-w-[1400px] px-4 md:px-6 pt-16 pb-8 relative z-10">
          <div className="mb-12 flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex items-center gap-2">
                <Image
                  src="/uploads/sampling-labs-logo.svg"
                  alt="Sampling Labs Logo"
                  width={30}
                  height={30}
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold text-white">Sampling Labs</span>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h6 className="text-xs font-semibold text-gray-400 uppercase mb-4">PRODUCT</h6>
              <ul className="space-y-2">
                <li>
                  <Link href="/pricing" className="text-sm text-white/80 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="text-sm text-white/80 hover:text-white">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="/affiliates" className="text-sm text-white/80 hover:text-white">
                    Affiliates
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="text-xs font-semibold text-gray-400 uppercase mb-4">RESOURCES</h6>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="text-sm text-white/80 hover:text-white">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-sm text-white/80 hover:text-white">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="/docs/user-guides" className="text-sm text-white/80 hover:text-white">
                    Guide
                  </Link>
                </li>
                <li>
                  <Link href="/changelog" className="text-sm text-white/80 hover:text-white">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="text-xs font-semibold text-gray-400 uppercase mb-4">BLOG</h6>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-sm text-white/80 hover:text-white">
                    All Articles
                  </Link>
                </li>
                <li>
                  <Link href="/blog/category/ai-technology" className="text-sm text-white/80 hover:text-white">
                    AI Technology
                  </Link>
                </li>
                <li>
                  <Link href="/blog/category/case-studies" className="text-sm text-white/80 hover:text-white">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/blog/category/tutorials" className="text-sm text-white/80 hover:text-white">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/blog/category/best-practices" className="text-sm text-white/80 hover:text-white">
                    Best Practices
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="text-xs font-semibold text-gray-400 uppercase mb-4">COMPANY</h6>
              <ul className="space-y-2">
                <li>
                  <Link href="/legal/privacy" className="text-sm text-white/80 hover:text-white">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="/legal/terms" className="text-sm text-white/80 hover:text-white">
                    Terms of service
                  </Link>
                </li>
                <li>
                  <Link href="/legal/dpa" className="text-sm text-white/80 hover:text-white">
                    DPA
                  </Link>
                </li>
                <li>
                  <Link href="/legal/cookie-policy" className="text-sm text-white/80 hover:text-white">
                    Cookie policy
                  </Link>
                </li>
                <li>
                  <Link href="/trust" className="text-sm text-white/80 hover:text-white">
                    Trust center
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white/60 mb-4 md:mb-0">
              © 2025 Sampling Labs, Inc.
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/help" className="text-white/70 hover:text-white/90">
                <span className="sr-only">Contact</span>
                <Mail className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/" className="text-white/70 hover:text-white/90">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/" className="text-white/70 hover:text-white/90">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com/" className="text-white/70 hover:text-white/90">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://www.youtube.com/" className="text-white/70 hover:text-white/90">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-5 w-5" />
              </Link>

              <div className="ml-2 flex items-center px-2 py-1 bg-white/10 rounded text-xs text-white/80">
                <Shield className="h-4 w-4 mr-1" />
                GDPR Compliant
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Badge */}
      <div className="fixed bottom-6 right-6 bg-white text-black rounded-full shadow-lg p-4 flex items-center text-sm">
        <div className="flex gap-2 mr-2">
          <div className="flex items-center gap-1">
            <span className="text-lg">👋</span>
            <span className="font-medium">Hi! I am Sampling Labs AI, ask me anything!</span>
          </div>
        </div>
        <div className="flex-shrink-0 h-8 w-8 bg-black rounded-full flex items-center justify-center">
          <Image
            src="/uploads/sampling-labs-logo.svg"
            alt="Sampling Labs Logo"
            width={20}
            height={20}
            className="h-5 w-5"
          />
        </div>
      </div>
    </footer>
  )
}
