import React from "react";

const osList = [
  {
    name: "CentOS",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968343.png",
    description:
      "Lightweight, secure, stable — CentOS makes a great pick for businesses prioritizing security and long-term support. Perfect for hosting panels and enterprise-grade web apps.",
  },
  {
    name: "Ubuntu",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968853.png",
    description:
      "A user-friendly Linux distro that's ideal for developers and beginners. Backed by Canonical, Ubuntu is popular for VPS web hosting, cloud infrastructure, and frequent updates.",
  },
  {
    name: "Scientific",
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048943.png",
    description:
      "Tailored for scientific computing environments, Scientific Linux is built by CERN and Fermilab, offering stability for research, simulations, and analytics.",
  },
  {
    name: "Fedora",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968860.png",
    description:
      "Fast, bleeding-edge updates make Fedora ideal for testing and development. Sponsored by Red Hat, it’s perfect for modern Linux pros who love innovation.",
  },
  {
    name: "OpenSUSE",
    icon: "https://cdn-icons-png.flaticon.com/512/6124/6124994.png",
    description:
      "A developer's choice OS known for YaST configuration tool and strong support for web and cloud hosting. Offers both Leap and rolling release options.",
  },
  {
    name: "Debian",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968870.png",
    description:
      "The backbone of many distros including Ubuntu, Debian is known for stability, free software philosophy, and a large package ecosystem—perfect for power users.",
  },
];

export default function CloudLinuxBox() {
  return (
    <section className="py-14 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Choice of Operating Systems for Linux cloud server
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Get the best OS for your VPS hosting server & experience the highest level of security.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {osList.map((os) => (
            <div
              key={os.name}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={os.icon}
                alt={os.name}
                className="h-16 w-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{os.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{os.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
