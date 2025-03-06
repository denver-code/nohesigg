import { Button } from "@/components/ui/button"

export function PlansSection() {
  const plans = [
    {
      tier: "Tier 0",
      name: "Public",
      price: "Free",
      features: ["Access to Help and Help FAQ", "Monthly Public Car Updates", "Access to 100+ Public Servers"],
    },
    // Add more plan objects here...
  ]

  return (
    <section className="container mx-auto px-4 py-20" id="plans">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Choose your lane</h2>
      <p className="text-xl text-center text-gray-400 mb-12">Enhance your No Hesi experience with VIP</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="border border-gray-800 rounded-xl p-6 bg-gray-900">
            <div className="mb-6">
              <span className="text-gray-400">{plan.tier}</span>
              <h3 className="text-2xl font-bold mt-2">{plan.name}</h3>
              <div className="text-3xl font-bold mt-4">{plan.price}</div>
            </div>
            <Button className="w-full mb-6">{plan.price === "Free" ? "Start Driving" : "Subscribe"}</Button>
            <ul className="space-y-2">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

