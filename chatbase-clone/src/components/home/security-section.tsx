import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, ShieldCheck, Database } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SecuritySection() {
  const securityFeatures = [
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Your data stays yours",
      description: "Your data is only accessible to your AI agent and is never used to train models."
    },
    {
      icon: <Lock className="h-6 w-6 text-chatbase-cyan" />,
      title: "Data encryption",
      description: "All data is encrypted at rest and in transit. We use industry-standard encryption algorithms."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-chatbase-purple" />,
      title: "Secure integrations",
      description: "We use verified variables to ensure users can access only their own data in your systems."
    }
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Enterprise-grade security & privacy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We take security and compliance seriously. Chatbase is SOC 2 Type II and GDPR compliant, trusted by thousands of businesses to build secure and compliant AI Agents.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 flex justify-center items-center">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full gradient-purple-pink opacity-20 blur-2xl animate-pulse-soft"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">GDPR</div>
                  <div className="h-16 w-16 mx-auto mb-2 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">SOC 2 Type II</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm h-full">
                <CardHeader className="pb-3">
                  <div className="bg-muted/30 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-base">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Chatbase is committed to safeguarding your data.
          </p>
          <div className="flex justify-center">
            <Link href="/security">
              <Button variant="outline" className="mr-2">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
