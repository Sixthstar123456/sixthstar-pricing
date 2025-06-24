import React from "react";
import { FaClock, FaTachometerAlt, FaTools, FaServer } from "react-icons/fa";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-lg transition-shadow duration-300">
    <Icon className="text-blue-600 text-3xl mb-4" />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const SelfManagedFeature = () => {
  const features = [
    {
      icon: FaClock,
      title: "24x7x365 Days Support",
      description:
        " Our technical team is available around the clock to guide you, troubleshoot issues, and keep your operations seamless.",
    },
    {
      icon: FaTachometerAlt,
      title: "Improved Performance",
      description:
        " Experience faster load times and smoother performance with infrastructure optimized to give your website the power and reliability. ",
    },
    {
      icon: FaTools,
      title: "Troubleshooting",
      description:
        " From server health checks to quick resolutions, our proactive tools and expert team ensure your digital space runs efficiently with minimal downtime.",
    },
    {
      icon: FaServer,
      title: "99.9% Uptime Guarantee",
      description:
        "We ensure your website stays live and accessible with a 99.9% uptime guarantee that supports uninterrupted business operations.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Self Managed Window Cloud Features
      </h2>
      <p className="text-gray-600 mb-10">
        Grow your website quickly using Sixthstar as your foundation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default SelfManagedFeature;
