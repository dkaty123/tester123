import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function Testimonials() {
  const testimonials = [
    {
      quote: "Chatbase is a strong signal of how customer support will evolve. It is an early adopter of the agentic approach, which will become increasingly effective, trusted, and prominent.",
      author: "Marc Manara",
      company: "OpenAI"
    },
    {
      quote: "This is awesome, thanks for building it!",
      author: "Logan Kilpatrick",
      company: "Google"
    },
    {
      quote: "I want to express how impressed we are with the talent behind such an excellent product like Chatbase. we at Zain Cash truly appreciate and enjoy using your platform.",
      author: "Yazen Altimimi",
      company: "Zain Cash"
    },
    {
      quote: "Our chatbot has been great. Answers questions it knows, delegates to our talent when its stuck, knows how to push clients to the funnel. Chatbase is what we use, 10/10 recommend.",
      author: "Martin Terskin",
      company: "OfferMarket"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            What people say
          </h2>
          <p className="text-lg text-muted-foreground">
            With over 9000 clients served, here's what they have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm overflow-hidden">
              <CardContent className="p-8 h-full flex flex-col">
                <blockquote className="text-lg mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                    <span className="text-lg font-semibold">{testimonial.author[0]}</span>
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-primary mb-1">9000+</div>
            <div className="text-sm text-muted-foreground">businesses trust Chatbase</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-chatbase-cyan mb-1">140+</div>
            <div className="text-sm text-muted-foreground">countries served</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.slice(2, 4).map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm overflow-hidden">
              <CardContent className="p-8 h-full flex flex-col">
                <blockquote className="text-lg mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                    <span className="text-lg font-semibold">{testimonial.author[0]}</span>
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
