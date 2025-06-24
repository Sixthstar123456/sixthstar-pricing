import Link from "next/link"
import { ArrowRight, Server, Shield, Cpu, BarChart } from "lucide-react"

export default function ManagedLinuxBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-40 pb-16">
      {/* Geometric Shapes */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply opacity-20 blur-2xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply opacity-20 blur-2xl"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Content Section - 7 columns */}
          <div className="lg:col-span-7 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              <Server className="h-4 w-4" />
              <span>#1 Cloud Linux Hosting</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl leading-tight">
              Powerful <span className="text-blue-800"> Managed Cloud Linux server</span>{" "}
              Infrastructure for Modern Applications
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              Enterprise-grade Linux hosting with advanced resource isolation,
              kernel-level optimizations, and comprehensive monitoring tools.
            </p>


            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-blue-700 text-white px-6 py-3 font-medium hover:bg-blue-500 transition"
              >
                Deploy Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="inline-block rounded-md border border-gray-300 bg-white text-gray-700 px-6 py-3 font-medium hover:bg-gray-100 transition"
              >
               Buy now
              </Link>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Trusted by 250,000+ developers & enterprises across India
            </p>
          </div>

          {/* Image Section - 5 columns */}
          <div className="lg:col-span-5 relative z-10">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-200 to-blue-200 rounded-2xl blur-sm"></div>
              <div className="relative bg-white rounded-2xl border border-blue-100 overflow-hidden shadow-xl">
                <img
                  src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747111059/Untitled_design_7_mezwhn.png"
                  alt="Cloud Linux Server"
                  className="w-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-lg rotate-12"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-lg -rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
