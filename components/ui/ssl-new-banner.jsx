import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function SslModelbanner() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-50 to-red-10 pt-24 sm:pt-28 md:pt-32 lg:pt-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-10">
          {/* Left Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="mr-2 h-8 w-8 rounded-full bg-blue-500 p-1 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 text-white"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-6h2v6zm4 0h-2v-6h2v6z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium text-blue-600">
                All In One Web SSL Certificate
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-blue-600 leading-snug">
              Secure Your Website & <br />
              Build Customer Trust
            </h1>

            <p className="max-w-xl text-base sm:text-lg text-gray-600">
              Protect your online presence with industry-leading SSL certificates.
              Boost customer confidence, improve search rankings, and ensure encrypted communication with one simple solution.
            </p>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="#ssl-contactus"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
              >
                Connect With Us
              </Link>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746512182/Untitled_500_x_500_px_4_tioccj.png"
              alt="SSL Certificate Protection"
              width={500}
              height={500}
              className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
