"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import QuoteModal from "../popup-form1" // adjust path if needed

export default function PricingTable() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)

  const indiaPlans = [
    {
      name: "5GB Plan",
      features: ["₹550/Year", "Licensed"],
    },
    {
      name: "10 GB Plan",
      features: ["₹800/Year", "Licensed"],
    },
    {
      name: "30 GB Plan",
      features: [
        "₹1100/Year",
        "Licensed",
        "Meeting",
        "File Storage",
        "Mobile & Desktop",
        "Drive/10GB/User",
      ],
    },
    {
      name: "50 GB Plan",
      features: [
        "₹2320/Year",
        "Licensed",
        "Meeting",
        "Mobile & Desktop",
        "Drive/10GB/User",
      ],
    },
  ]

  const handleRequestQuote = (plan, region) => {
    setSelectedPlan({ ...plan, region })
    setModalOpen(true)
  }

  const renderPlans = (plans, region) => (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600">Pricing Plans</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl transition flex flex-col h-full"
          >
            <h3 className="text-xl font-bold text-center text-gray-800 mb-4">{plan.name}</h3>

            <ul className="mb-6 space-y-3 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="text-green-500 w-4 h-4" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleRequestQuote(plan, region)}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition mt-auto"
            >
              Request a Quote
            </button>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="w-full max-w-7xl mx-auto p-6" id="pricing">
      {renderPlans(indiaPlans, "India")}

      {modalOpen && selectedPlan && (
        <QuoteModal
          plan={selectedPlan}
          region={selectedPlan.region}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  )
}
