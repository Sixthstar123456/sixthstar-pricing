import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function CloudLinuxNewBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-24">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 -z-10">
        <svg width="300" height="300" viewBox="0 0 200 200" className="opacity-30 text-blue-200">
          <path
            fill="currentColor"
            d="M42.4,-61.7C55.4,-52.6,66.2,-41.7,70.6,-28.6C75.1,-15.5,73.2,-0.3,67.8,12.4C62.3,25.1,53.3,35.4,43.2,45.3C33.1,55.2,22,64.7,8.5,69C-5.1,73.2,-21.1,72.1,-33.4,64.1C-45.6,56,-54.2,41,-61.1,25.5C-68,10.1,-73.3,-6,-67.6,-18.7C-61.9,-31.3,-45.2,-40.4,-30.3,-49.7C-15.5,-59.1,-2.6,-68.8,10.5,-71.1C23.7,-73.3,47.4,-68.9,42.4,-61.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 items-center gap-14">
          {/* Left Content */}
          <div className="relative z-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              #1 Cloud Linux Hosting
            </span>
            <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl leading-snug">
              <span className="text-blue-600">Optimized for Developers</span> <br />
              and Linux Workloads
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Empower your business with stable, secure, and lightning-fast Cloud Linux servers,
              perfect for shared hosting environments.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Lightweight LVE isolation",
                "Kernel-level stability",
                "PHP hardened versions",
                "Resource monitoring tools",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-1" />
                  <p className="ml-2 text-gray-700">{feature}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="inline-block rounded-md bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
              <Link
                href="#"
                className="inline-block rounded-md border border-gray-300 bg-white text-gray-700 px-6 py-3 font-medium hover:bg-gray-100 transition"
              >
                Learn More
              </Link>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Serving 250,000+ developers & enterprises across India
            </p>
          </div>

          {/* Right Illustration */}
          <div className="relative z-10">
            <div className="">
              <img
                src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747049543/Untitled_design_5_icn1za.png"
                alt="Cloud Linux Server"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
