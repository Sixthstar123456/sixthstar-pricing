import React from "react";

const WindowManagdVPSBanner = () => {
  return (
    <section className="bg-gradient-to-r from-white via-blue-50 to-white py-16 pt-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center">
        
        {/* LEFT: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Powerful <span className="text-blue-600">Windows Managed VPS</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Experience top-tier performance, full administrative access, and expert management — all in one VPS solution.
          </p>

          {/* Buttons */}
        {/* Buttons */}
<div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md">
    Get Started Now →
  </button>
  <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50">
    View Plans
  </button>
</div>


          {/* Feature Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
            {[
              "24/7 Expert Support",
              "Windows Server 2022",
              "Remote Desktop Access",
              "Full Admin Rights",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="h-3 w-3 bg-blue-600 rounded-full mr-3"></div>
                <p className="text-gray-700 text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 flex justify-center">
          <img
            src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747131765/Untitled_design_10_cxqoax.png"
            alt="Windows VPS Illustration"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WindowManagdVPSBanner;
