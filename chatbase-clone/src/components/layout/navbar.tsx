'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu } from 'lucide-react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full border-b backdrop-blur transition-all duration-300 ${
      isScrolled ? "bg-background/95 shadow-sm" : "bg-background"
    }`}>
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <Image
                src="/uploads/sampling-labs-logo.svg"
                alt="Sampling Labs Logo"
                width={30}
                height={30}
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">Sampling Labs</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/blog"
              className={`text-sm font-medium transition-colors hover:text-foreground ${pathname === '/blog' ? 'text-foreground' : 'text-muted-foreground'}`}
            >
              Blog
            </Link>

            <Link
              href="/affiliates"
              className={`text-sm font-medium transition-colors hover:text-foreground ${pathname === '/affiliates' ? 'text-foreground' : 'text-muted-foreground'}`}
            >
              Affiliates
            </Link>

            <Link
              href="/pricing"
              className={`text-sm font-medium transition-colors hover:text-foreground ${pathname === '/pricing' ? 'text-foreground' : 'text-muted-foreground'}`}
            >
              Pricing
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="group h-auto p-0">
                  <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">Resources</span>
                  <ChevronDown className="ml-1 h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[160px]">
                <DropdownMenuItem>
                  <Link href="/docs" className="w-full">Documentation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/changelog" className="w-full">Changelog</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex gap-4">
            <Link href="/auth/signin">
              <Button variant="ghost" size="sm" className="h-9 px-4 py-2 text-sm font-medium">
                Sign in
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button
                variant="default"
                size="sm"
                className="h-9 px-4 py-2 bg-black hover:bg-black/90 text-white text-sm font-medium rounded-md"
              >
                Try for Free
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden container py-4 pb-6 border-t">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/blog"
              className={`text-sm font-medium hover:text-foreground ${pathname === '/blog' ? 'text-foreground' : 'text-muted-foreground'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/affiliates"
              className={`text-sm font-medium hover:text-foreground ${pathname === '/affiliates' ? 'text-foreground' : 'text-muted-foreground'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Affiliates
            </Link>
            <Link
              href="/pricing"
              className={`text-sm font-medium hover:text-foreground ${pathname === '/pricing' ? 'text-foreground' : 'text-muted-foreground'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="text-sm font-medium text-muted-foreground">
              Resources
              <div className="mt-2 ml-4 flex flex-col space-y-2">
                <Link
                  href="/docs"
                  className="text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Documentation
                </Link>
                <Link
                  href="/changelog"
                  className="text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Changelog
                </Link>
              </div>
            </div>
            <div className="pt-4 flex flex-col space-y-2">
              <Link
                href="/auth/signin"
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="outline" className="w-full">
                  Sign in
                </Button>
              </Link>
              <Link
                href="/auth/signup"
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-black hover:bg-black/90">
                  Try for Free
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
