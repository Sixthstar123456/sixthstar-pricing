import Link from "next/link"
import { Check } from "lucide-react"

export default function CloudNewBanner() {
  return (
    <div className=" relative w-full overflow-hidden bg-gradient-to-r from-blue-50 to-red-10 pt-28">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Left Text Section */}
          <div className="lg:col-span-7">
            <div className="space-y-5">
              <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
                #1 Cloud Hosting in India
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-5xl tracking-tight">
                <span className="block text-blue-600">Supercharge your</span>
                <span className="block"> Website with High-Performance Cloud Hosting</span>
              </h1>
              <p className="max-w-2xl text-lg text-gray-600">
               Power your digital transformation with cloud hosting with unmatched performance, 99.99% uptime, and enterprise-grade security.
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500" />
                  <p className="ml-2 text-gray-600">High-end performance</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500" />
                  <p className="ml-2 text-gray-600">24/7 technical support </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500" />
                  <p className="ml-2 text-gray-600"> SSD Storage </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500" />
                  <p className="ml-2 text-gray-600">Seamless Website Migration </p>
                </div>
              </div>

             <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
  <Link
    href="#cloudcontact"
    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >
    Connect with
  </Link>
  <Link
    href="#pricing"
    className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >
    View Plans
  </Link>
</div>

              <p className="text-sm text-gray-500">
                Trusted by 250,000+ businesses across India
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:col-span-5">
            <div className="">
              <img
                src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746532157/Untitled_design_22_cz4fx7.png" // Replace with your actual path or animation
                alt="Cloud Hosting Illustration"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
