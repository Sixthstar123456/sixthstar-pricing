import React from "react";

const StockMasterLanding = () => {
  const modules = [
    {
      id: 1,
      title: "Enterprise-Grade Security",
      gif: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746438374/Untitled_design_4_sa1bjq.gif",
      description: "We prioritize your data like it’s our own. With advanced encryption and system-wide security audits, your digital assets stay protected 24/7.",
    },
    {
      id: 2,
      title: "Effortless Team Collaboration",
      gif: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746437695/Untitled_design_1_yzgllx.gif",
      description: "Built for teamwork. Manage users, assign roles, and keep your development workflow smooth — no matter the team size.",
    },
    {
      id: 3,
      title: "Real-Time Server Management",
      gif: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746438136/Untitled_design_3_teoydr.gif",
      description: "Stay synced, stay fast. Our real-time LAMP server solutions ensure instant updates, zero lag, and total control.",
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Commitment to Our Clients
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {modules.map((module) => (
            <button
              key={module.id}
              className="group relative bg-white p-8 rounded-xl border border-orange-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2"
              aria-label={module.title}
            >
              <div className="flex flex-col items-center space-y-4">
                {/* Render GIF only if it exists */}
                {module.gif && (
                  <img
                    src={module.gif}
                    alt={module.title}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                )}
                <h2 className="text-xl font-semibold text-gray-900">
                  {module.title}
                </h2>
                <p className="text-gray-600 text-center">{module.description}</p>
              </div>
              <div
                className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#46828d] transition-colors duration-300"
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockMasterLanding;
