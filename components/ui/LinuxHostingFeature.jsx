import React from "react";

export default function LinuxFeatureBusiness() {
  return (
    <div className="bg-[#f8f9ff] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#002a66] mb-2">
            Reliable Linux cloud server hosting business solutions
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
            Our best Linux cloud hosting solutions offer reliable and scalable infrastructure to handle fluctuating workloads.
            With advanced features like redundant hardware, premium network, and expert support, we ensure minimal downtime
            and optimal performance for all your websites or application needs.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Image */}
          <div className="relative w-full max-w-md mx-auto">
            <img
              src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747052421/Untitled_design_6_xww7ro.png"
              alt="Business Hosting"
              className="rounded-xl shadow-lg"
            />
            {/* Icons beside image */}
            <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-md flex flex-col gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174848.png"
                alt="Linux"
                className="w-6 h-6"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/1538/1538674.png"
                alt="Globe"
                className="w-6 h-6"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                alt="Server"
                className="w-6 h-6"
              />
            </div>
          </div>

          {/* Right Side: Feature List */}
          <ul className="space-y-4 text-sm md:text-base text-gray-800">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span> Accelerate your site with premium hardware.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span> Simplify server management with cPanel.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span> Fortify your site with DDoS protection and backups.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span> Scale effortlessly to meet growing demands.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span> Run your tech stack with flexibility.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span> Minimize downtime with automated recovery.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
