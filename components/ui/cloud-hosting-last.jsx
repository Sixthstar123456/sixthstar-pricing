import Link from "next/link"
import { ArrowRight, BarChart2, Users, MessageSquare } from "lucide-react"

export default function HeroBanner2() {
  return (
    <div className="relative w-full overflow-hidden bg-blue-600">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10"></div>
      </div>
      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Transform Your Hosting to Hyper-Scale Cloud Solutions
          </h1>
          <p className="mb-10 text-xl text-blue-100">
Boost your hosting performance by utilizing our hyper-scale cloud solutions designed to meet the demands of modern businesses.          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
           
          
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-blue-700/50 p-6 backdrop-blur-sm">
            <div className="mb-4 rounded-full bg-blue-500/50 p-3 text-white w-fit ">
              <BarChart2 className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl   font-semibold text-white">Built for Performance</h3>
            <p className="text-blue-100 text-justify">SixthStar provides custom cloud hosting solutions tailored to meet diverse business needs. Whether you're a startup or an enterprise, we offer fast, secure, and scalable cloud environments designed to perform under any demand.</p>
          </div>
          <div className="rounded-lg bg-blue-700/50 p-6 backdrop-blur-sm">
            <div className="mb-4 rounded-full bg-blue-500/50 p-3 text-white w-fit">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Features</h3>
            <p className="text-blue-100 text-justify">Optimize performance with our SSD-based cloud infrastructure. Enjoy real-time scalability, reliable 99.99% uptime, intuitive management panels, and free website migration—everything you need to stay competitive online
</p>
          </div>
          <div className="rounded-lg bg-blue-700/50 p-6 backdrop-blur-sm">
            <div className="mb-4 rounded-full bg-blue-500/50 p-3 text-white w-fit">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Change Customer Engagement into Customer Support</h3>
            <p className="text-blue-100 text-justify">Our certified experts are available 24/7 to assist you with server management, performance tuning, and issue resolution. From onboarding to scaling, SixthStar offers reliable support every step of the way.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
