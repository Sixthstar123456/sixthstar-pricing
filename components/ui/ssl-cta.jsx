import React from "react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="relative ezy__cta6 light py-14 md:py-8 bg-white dark:bg-[#0b1727] text-white overflow-hidden">
      {/* Blurred Circular Background Shapes */}
      <div className="absolute w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="absolute w-96 h-96 bg-red-100 rounded-full opacity-30 blur-3xl bottom-0 right-0 translate-x-1/3 translate-y-1/3 pointer-events-none z-0"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-3xl overflow-hidden max-w-8xl mx-auto">
          <div className="grid grid-cols-12 items-center">
            {/* Left Text Content */}
            <div className="col-span-12 lg:col-span-7">
              <div className="py-12 px-6 sm:px-12">
                <h2 className="text-2xl md:text-[40px] leading-none font-bold mb-6 text-black">
                  SSL Certificate in Chennai​
                </h2>

                <div className="grid grid-cols-12">
                  <div className="col-span-12 sm:col-span-8">
                    <p className="text-lg opacity-75 mb-6 text-black text-justify">
                      Sixth Star offers a standard SSL certificate in Chennai and a security protocol that establishes a secured connection between your web server and browser. This SSL ensures your customer that all the data and information transmitted are saved under a protected environment.
                    </p>

                    {/* Buy Now Button */}
                    <div className="flex justify-start mt-4">
                  <Link
  href="#ssl-contactus" // Change this to your target section or route
  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-base font-medium transition duration-300 inline-block"
>
  Get in Touch
</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Content */}
            <div className="col-span-12 lg:col-span-5 text-end">
  <div className="flex justify-end">
    <img
      src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746512938/Untitled_500_x_500_px_5_bfi8xw.png"
      alt=""
      className="rounded-tl-[50%] rounded-tr-[30%] lg:rounded-tr-none lg:rounded-bl-[40%] w-64 md:w-80 lg:w-96 h-auto"
    />
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
