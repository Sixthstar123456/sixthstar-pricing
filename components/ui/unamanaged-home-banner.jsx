import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function UnmanagedBanner() {
  return (
    <section className="relative overflow-hidden bg-gray-50 pt-16 pb-12 min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-14">
        {/* Top Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl leading-tight">
            Unmanaged Linux Server
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Enterprise-grade Linux hosting with advanced resource isolation, kernel-level optimizations, and
            comprehensive monitoring tools.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-2xl rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-2xl -rotate-3 border border-gray-100"></div>
              <div className="relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-md z-10">
                <img
                  src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747120289/Untitled_design_8_cwo7u6.png"
                  alt="Cloud Linux Server"
                  className="w-full h-auto max-h-96 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <p className="mt-4 text-gray-600">
              Empower your business with stable, secure, and lightning-fast Cloud Linux servers, perfect for shared
              hosting environments.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Lightweight LVE isolation",
                "Kernel-level stability",
                "PHP hardened versions",
                "Resource monitoring tools",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-1" />
                  <p className="ml-3 text-gray-700">{feature}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="#"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition"
              >
                Learn how our customers succeed
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="inline-block rounded-md bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition text-center"
              >
                Get Started
              </Link>
              <Link
                href="#"
                className="inline-block rounded-md border border-gray-300 bg-white text-gray-700 px-6 py-3 font-medium hover:bg-gray-100 transition text-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
