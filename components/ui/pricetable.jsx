import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { BiX } from "react-icons/bi";

const PricingTable = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingData = [
    {
      tier: "Basic",
      monthlyPrice: 19,
      annualPrice: 190,
      features: [
        "1 User",
        "10 Projects",
        "5GB Storage",
        "Basic Support",
        "Email Support",
        "Basic Analytics"
      ],
      unavailable: ["API Access", "Custom Domain", "Advanced Security"]
    },
    {
      tier: "Standard",
      monthlyPrice: 49,
      annualPrice: 490,
      features: [
        "5 Users",
        "20 Projects",
        "20GB Storage",
        "Priority Support",
        "Email Support",
        "Advanced Analytics",
        "API Access"
      ],
      unavailable: ["Custom Domain", "Advanced Security"]
    },
    {
      tier: "Premium",
      recommended: true,
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "10 Users",
        "Unlimited Projects",
        "100GB Storage",
        "24/7 Support",
        "Priority Email Support",
        "Advanced Analytics",
        "API Access",
        "Custom Domain"
      ],
      unavailable: ["Advanced Security"]
    },
    {
      tier: "Enterprise",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      features: [
        "Unlimited Users",
        "Unlimited Projects",
        "Unlimited Storage",
        "24/7 Premium Support",
        "Dedicated Account Manager",
        "Advanced Analytics",
        "API Access",
        "Custom Domain",
        "Advanced Security"
      ],
      unavailable: []
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
          <div className="flex items-center justify-center gap-3">
            <span className={`text-lg ${!isAnnual ? 'text-blue-600' : 'text-gray-600'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition-colors duration-300"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-blue-600' : 'text-gray-600'}`}>Annual</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingData.map((plan, index) => (
            <div
              key={plan.tier}
              className={`relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${plan.recommended ? 'z-10' : 'z-0'}`}
            >
              <div
                className={`h-full rounded-2xl overflow-hidden shadow-xl transform-gpu transition-transform duration-300 ${plan.recommended ? 'bg-blue-600 text-white scale-105' : 'bg-white'}`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full transform rotate-12">
                    RECOMMENDED
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.tier}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      {typeof plan.monthlyPrice === "number" ? "$" : ""}
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    {typeof plan.monthlyPrice === "number" && (
                      <span className="text-sm opacity-80">/{isAnnual ? "year" : "month"}</span>
                    )}
                  </div>
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${plan.recommended ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                  >
                    Get Started
                  </button>
                  <div className="mt-8 space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <FaCheck className="flex-shrink-0 w-5 h-5 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {plan.unavailable.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 opacity-50">
                        <BiX className="flex-shrink-0 w-5 h-5 text-red-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;