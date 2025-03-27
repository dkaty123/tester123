import { Button } from "@/components/ui/button"

const PricingAddon = ({
  icon,
  title,
  description,
  price,
  pricingDetail
}: {
  icon: React.ReactNode,
  title: string,
  description: string,
  price: string,
  pricingDetail: string
}) => {
  return (
    <div className="border border-[#f1f1f3] rounded-3xl p-8 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
      <div className="flex gap-4">
        <div className="h-14 w-14 rounded-full bg-[#f5f5f7] flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-sm text-[#686868]">{description}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
        <div className="flex-1 lg:flex-initial">
          <div className="text-2xl font-bold">${price}</div>
          <div className="text-sm text-[#686868]">{pricingDetail}</div>
        </div>
        <Button
          variant="outline"
          className="w-full sm:w-auto lg:ml-4 whitespace-nowrap"
        >
          Get Add-on
        </Button>
      </div>
    </div>
  )
}

export function PricingAddons() {
  return (
    <section className="py-16 md:py-24 bg-[#fafbfc]">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-2 w-2 rounded-full bg-[#ff5277]"></div>
          <span className="text-sm font-medium">Add-ons</span>
        </div>

        <h2 className="text-4xl font-bold mb-12">
          Fine-tune your plan with<br />
          powerful add-ons
        </h2>

        <div className="space-y-6">
          <PricingAddon
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3V15Z" stroke="#111112" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 22V15" stroke="#111112" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            title="Auto recharge credits"
            description="When your credits fall below the threshold you set, we'll automatically add credits that don't expire to your account, ensuring uninterrupted service."
            price="14"
            pricingDetail="Total per 1000 message credits"
          />

          <PricingAddon
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#111112" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            title="Extra message credits"
            description="$12 per 1000 credits / month"
            price="12"
            pricingDetail="Total per month"
          />

          <PricingAddon
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#111112" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#111112" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 20.9999V18.9999C22.9993 18.1136 22.7044 17.2527 22.1614 16.5522C21.6184 15.8517 20.8581 15.3515 20 15.1299" stroke="#111112" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799" stroke="#111112" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            title="Extra agents"
            description="$7 per AI agent / month"
            price="7"
            pricingDetail="Total per month"
          />
        </div>
      </div>
    </section>
  )
}
