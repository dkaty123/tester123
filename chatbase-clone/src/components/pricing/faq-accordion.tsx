import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronDown } from "lucide-react"

export function FaqAccordion() {
  const faqs = [
    {
      question: "How do message credits work?",
      answer: "Message credits represent the total number of messages your AI agent can receive and respond to. Each message sent to your AI agent costs one message credit. These credits reset at the beginning of your billing cycle, and any unused credits don't roll over to the next month."
    },
    {
      question: "When are my message credits renewed?",
      answer: "Message credits are renewed at the beginning of each billing cycle. For monthly subscriptions, this is on the same date each month that you initially subscribed. For annual subscriptions, credits are renewed on the same date each year."
    },
    {
      question: "How do auto-recharge message credits work?",
      answer: "Auto-recharge is an add-on feature that automatically adds message credits to your account when your credit balance falls below a threshold you set. This ensures your AI agent remains operational even if you exceed your monthly credit allocation. Unlike subscription credits, auto-recharge credits don't expire."
    },
    {
      question: "What is the difference between subscription credits and auto-recharge credits?",
      answer: "Subscription credits are included with your monthly or annual plan and reset at the beginning of each billing cycle. Auto-recharge credits are purchased separately when needed and don't expire. Auto-recharge credits are only used after your subscription credits are depleted."
    },
    {
      question: "How come gpt-4o is cheaper than gpt-4 and gpt-4-turbo?",
      answer: "GPT-4o is OpenAI's latest model that offers comparable performance to GPT-4 and GPT-4 Turbo but at a lower cost. OpenAI has optimized this model for better efficiency, allowing us to pass those savings directly to you. We always try to provide the best value while maintaining high quality AI responses."
    },
    {
      question: "How many users can use my agent?",
      answer: "There is no limit to how many end users can interact with your AI agent. Our pricing is based on message credits and features, not on the number of users. This makes Chatbase ideal for customer-facing applications where you need to serve many users without worrying about per-user costs."
    },
    {
      question: "How do I know how many characters are in my document?",
      answer: "When you upload a document to train your AI agent, Chatbase automatically calculates and displays the character count. This count is shown during the upload process and can also be viewed in the document management section of your dashboard. The character limit depends on your plan tier."
    }
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Get answers to the most<br />commonly asked questions
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#f1f1f3] py-4">
                <AccordionTrigger className="text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#686868] pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
