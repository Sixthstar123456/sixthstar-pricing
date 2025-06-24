import React from "react";

export default function WindowManagedBusiness() {
  const features = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/979/979585.png",
      title: "Premium Hardware",
      description: "Boost performance with enterprise-grade hardware.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
      title: "Easy Management",
      description: "Manage easily with cPanel or terminal access.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3523/3523063.png",
      title: "DDoS Protection",
      description: "Stay secure with layered protection & backups.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
      title: "Scalable Hosting",
      description: "Upgrade your resources anytime with zero downtime.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3281/3281306.png",
      title: "Flexible Stack",
      description: "Supports various Linux distributions and stacks.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3011/3011270.png",
      title: "Auto Recovery",
      description: "Automated monitoring ensures quick recovery.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002a66] mb-4">
            Trusted Linux Cloud Hosting for Businesses
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
            Empower your business with high-performance Linux cloud hosting. Scalable, secure, and built for reliability, our platform meets modern infrastructure demands effortlessly.
          </p>
        </div>

        {/* Layout with Image and Features */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <img
              src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747136573/Untitled_design_11_osl7km.png"
              alt="Linux Cloud Hosting"
              className="w-full rounded-xl shadow-md"
            />
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#f8f9ff] p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-10 h-10 mb-4"
                />
                <h4 className="text-lg font-semibold text-[#002a66] mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
