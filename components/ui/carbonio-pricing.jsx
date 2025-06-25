"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import QuoteModalcarbonio from "../popup-carbonio"// Adjust the path if necessary

export default function PricingTable() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [viewMoreData, setViewMoreData] = useState(null)

  const indiaPlans = [
    {
      name: "Carbonio Lite",
      features: [
        "₹550/Year",
        "5 GB",
        "Carbonio Core",
        "Admin",
        "Storages Centralized",
        "OBJ Storage Connector",
        "Storages HSM",
      ],
    },
    {
      name: "Carbonio Core",
      features: [
        "₹800/Year",
        "10 GB",
        "Carbonio Core",
        "Admin",
        "Storages Centralized",
        "OBJ Storage Connector",
        "Storages HSM",
      ],
    },
    {
      name: "Carbonio Suite",
      features: [
        "₹1100/Year",
        "30 GB",
        "Meeting",
        "File Storage",
        "Mobile & Desktop",
        "Drive/10GB/User",
        "Carbonio Core",
      ],
      moreFeatures: [
        "₹1100/Year",
        "Meeting",
        "File Storage",
        "Mobile & Desktop",
        "Drive/10GB/User",
        "Carbonio Core",
        "Admin",
        "Storages Centralized",
        "OBJ Storage Connector",
        "Storages HSM",
      ],
    },
    {
      name: "Carbonio Max",
      features: [
        "₹2320/Year",
        "50 GB",
        "Meeting",
        "Mobile & Desktop",
        "Drive/10GB/User",
        "Carbonio Core",
        "Admin",
      ],
      moreFeatures: [
        "₹2320/Year",
        "Meeting",
        "Mobile & Desktop",
        "Drive/10GB/User",
        "Carbonio Core",
        "Admin",
        "Storages Centralized",
        "OBJ Storage Connector",
        "Storages HSM",
      ],
    },
  ]

  const handleRequestQuote = (plan, region) => {
    setSelectedPlan({ ...plan, region })
    setModalOpen(true)
  }

  const handleViewMore = (plan) => {
    setViewMoreData(plan)
  }

  const renderPlans = (plans, region) => (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-center mb-12 text-blue-600">Pricing Plans</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => {
          const isMostPopular = plan.name === "30 GB Plan"
          return (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl transition flex flex-col h-full"
            >
              {/* Most Popular Tag */}
              {isMostPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md z-10">
                 Best Selling
                </div>
              )}

              <h3 className="text-xl font-bold text-center text-gray-800 mb-4">{plan.name}</h3>

              <ul className="mb-6 space-y-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="text-green-500 w-4 h-4" />
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.moreFeatures && (
                <button
                  onClick={() => handleViewMore(plan)}
                  className="mb-3 text-sm text-blue-600 underline hover:text-blue-800"
                >
                  View More
                </button>
              )}

              <button
                onClick={() => handleRequestQuote(plan, region)}
                className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition mt-auto"
              >
                Request a Quote
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )

  return (
    <div className="w-full max-w-7xl mx-auto p-6" id="pricing">
      {renderPlans(indiaPlans, "India")}

      {/* Quote Modal */}
      {modalOpen && selectedPlan && (
        <QuoteModalcarbonio 
          plan={selectedPlan}
          region={selectedPlan.region}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}

      {/* View More Modal */}
      {viewMoreData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setViewMoreData(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">{viewMoreData.name} — More Features</h2>
            <ul className="space-y-2">
              {viewMoreData.moreFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700 text-sm">
                  <Check className="text-green-500 w-4 h-4" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
