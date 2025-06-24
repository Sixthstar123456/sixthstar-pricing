"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"
import QuoteModal from "../popup-form1" // adjust path if needed

export default function Pricing7() {
  const [isGerman, setIsGerman] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)

  const indiaPlans = [
    {
      name: "In-CP2",
      features: [
        { name: "2 CPUs", included: true },
        { name: "20 GB/RAM", included: true },
        { name: "200 GB SSD", included: true },
        { name: "1 Dedicated IP", included: true },
        { name: "24/7 Support", included: true },
        { name: "*SSL Certificate", included: true },
      ],
    },
    {
      name: "In-CP4",
      features: [
        { name: "4 CPUs", included: true },
        { name: "40 GB/RAM", included: true },
        { name: "400 GB SSD", included: true },
        { name: "1 Dedicated IP", included: true },
        { name: "24/7 Support", included: true },
        { name: "*SSL Certificate", included: true },
      ],
    },
    {
      name: "In-CP6",
      features: [
        { name: "6 CPUs", included: true },
        { name: "60 GB/RAM", included: true },
        { name: "600 GB SSD", included: true },
        { name: "1 Dedicated IP", included: true },
        { name: "24/7 Support", included: true },
        { name: "*SSL Certificate", included: true },
      ],
    },
    {
      name: "In-CP8",
      features: [
        { name: "8 CPUs", included: true },
        { name: "80 GB/RAM", included: true },
        { name: "800 GB SSD", included: true },
        { name: "1 Dedicated IP", included: true },
        { name: "24/7 Support", included: true },
        { name: "*SSL Certificate", included: true },
      ],
    },
  ]

  const germanPlans = [
    {
      name: "Ger-CP2",
      features: [
        { name: "2 CPUs", included: true },
        { name: "4 GB/RAM", included: true },
        { name: "40 GB SSD", included: true },
        { name: "1 Dedicated IP", included: true },
        { name: "24/7 Support", included: true },
        { name: "*SSL Certificate", included: true },
      ],
    },
    {
      name: "Ger-CP4",
      features: [
        { name: "4 CPUs", included: true },
        { name: "8 GB/RAM", included: true },
        { name: "80 GB SSD", included: true },
        { name: "1 Dedicated IP", included: true },
        { name: "24/7 Support", included: true },
        { name: "*SSL Certificate", included: true },
      ],
    },
    {
      name: "Ger-CP8",
      features: [
        { name: "8 CPUs", included: true },
        { name: "16 GB/RAM", included: true },
        { name: "160 GB SSD", included: true },
        { name: "1 Dedicated IP", included: true },
        { name: "24/7 Support", included: true },
        { name: "*SSL Certificate", included: true },
      ],
    },
    {
      name: "Ger-CP16",
      features: [
        { name: "16 CPUs", included: true },
        { name: "32 GB/RAM", included: true },
        { name: "320 GB SSD", included: true },
        { name: "1 Dedicated IP", included: true },
        { name: "24/7 Support", included: true },
        { name: "*SSL Certificate", included: true },
      ],
    },
  ]

  const currentPlans = isGerman ? germanPlans : indiaPlans
  const region = isGerman ? "Germany" : "India"

  const handleRequestQuote = (plan) => {
    setSelectedPlan(plan)
    setModalOpen(true)
  }

  return (
    <div id="pricing" className="w-full max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Choose Your Plan</h1>
        <div className="flex justify-center">
          <button
            onClick={() => setIsGerman(false)}
            className={`px-6 py-2 rounded-l-lg ${
              !isGerman ? "bg-blue-600 text-white" : "bg-white border text-blue-600"
            }`}
          >
            India
          </button>
          <button
            onClick={() => setIsGerman(true)}
            className={`px-6 py-2 rounded-r-lg ${
              isGerman ? "bg-blue-600 text-white" : "bg-white border text-blue-600"
            }`}
          >
            Germany
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentPlans.map((plan, index) => (
          <div
            key={plan.name}
            className={`relative bg-white rounded-lg border p-6 shadow hover:shadow-lg transition`}
          >
            {/* Best Selling Badge */}
            {plan.name === "In-CP6" && (
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                Best Selling
              </div>
            )}

             {plan.name === "Ger-CP8" && (
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                Best Selling
              </div>
            )}

            <h3 className="text-xl font-bold text-center mb-4">{plan.name}</h3>
            <div className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  {feature.included ? (
                    <Check className="w-5 h-5 text-blue-500" />
                  ) : (
                    <X className="w-5 h-5 text-black" />
                  )}
                  <span>{feature.name}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleRequestQuote(plan)}
              className="w-full py-3 px-4 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700"
            >
              Request a Quote
            </button>
          </div>
        ))}
      </div>

      {modalOpen && selectedPlan && (
        <QuoteModal
          plan={selectedPlan}
          region={region}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  )
}
