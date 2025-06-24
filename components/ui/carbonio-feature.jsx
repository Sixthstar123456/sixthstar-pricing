import React, { useState, useRef, useEffect } from "react"
import { Badge } from "./badge"
import { ArrowRight, ChevronRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import CarbonioMailSlider from "../slider/carbonio-mail-features-slider"
import SecurityFeatures from "../slider/security-features-slider"
import AdvancedFeatures from "../slider/advanced-features-slider.jsx"

gsap.registerPlugin(ScrollTrigger)

const demoTabs = [
  {
    value: "carbonio mail features",
    title: "Carbonio Mail Features",
    icon: (
      <svg className="w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    description: "Easily manage all your leads in one place with powerful filtering and segmentation tools.",
    slider: <CarbonioMailSlider />
  },
  {
    value: "security",
    title: "Security Features",
    icon: (
      <svg className="w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    description: "Automate repetitive tasks and workflows to save time and reduce human error.",
    slider: <SecurityFeatures/>
  },
  {
    value: "advanced",
    title: "Advanced Features",
    icon: (
      <svg className="w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    description: "Gain valuable insights into your sales performance with detailed analytics and reporting.",
    slider:<AdvancedFeatures/>
  }
]

const DemoSection = () => {
  const [activeTab, setActiveTab] = useState(demoTabs[0].value)
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.2 }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [activeTab])

  const activeDemo = demoTabs.find(tab => tab.value === activeTab)

  return (
    <div id="demo" ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 pt-10">
            <span className="gradient-text">Carbonio Enterprise Solutions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-lg font-medium mb-4 text-gray-500">Features</h3>
              <div className="flex flex-col space-y-2">
                {demoTabs.map(tab => (
                  <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className={`flex items-center text-left p-3 rounded-lg transition-all ${
                      activeTab === tab.value
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="mr-3">{tab.icon}</div>
                    <span>{tab.title}</span>
                    {activeTab === tab.value && (
                      <ChevronRight className="ml-auto w-4 h-4" />
                    )}
                  </button>
                ))}
              </div>
              
            </div>
          </div>

          <div className="lg:col-span-4">
            {activeDemo && (
              <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                <div className="flex flex-col gap-8">
                  <div className="w-full">
                    {activeDemo.slider}
                  </div>
                 
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DemoSection