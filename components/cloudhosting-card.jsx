import React from "react";
import { FiCode, FiLayout, FiDatabase, FiLayers, FiCloud, FiServer } from "react-icons/fi";

const HoverCard3DGrid = () => {
  const cards = [
    {
      title: "Easy Cloud Management",
      description: "Our servers allow easy cloud management for surplus customers. With the use of our innate control panel, you can customize the provisioning services and resource features. Also, we make deployment easy and instant.",
      icon: <FiCode className="text-4xl mb-4" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Lower Cost Storage",
      description: "We will ensure to provide lower cost storage concerning your capital input in all aspects and bestow the most secure and expandable cloud storage for making backups and data archiving easier.",
      icon: <FiLayout className="text-4xl mb-4" />,
      gradient: "from-blue-500 to-teal-500"
    },
    {
      title: "Security",
      description: "No data will be shared or destroyed since we maintain multi-layered cloud security to protect your data and other confidential documents without any malware attacks.",
      icon: <FiDatabase className="text-4xl mb-4" />,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Failover & High Availabilty",
      description: "Since the cloud uses virtual resources and has a self-healing architecture there won’t be any insufficiency and hardware failovers. If there is any failover, it will automatically change to another stable resource thus assuring high-availability.",
      icon: <FiLayers className="text-4xl mb-4" />,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Auto Scaling",
      description: "Our Best cloud hosting allows auto-scaling to increase or decrease the cloud server resources at any time as per the business requirement. During the process, there won’t be any downtime occurrence.",
      icon: <FiCloud className="text-4xl mb-4" />,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Flexible payment",
      description: "You can pay only for the resources you have consumed. No other extra charges will be billed since we support utility billing. As your requirements grow, the cost will be beneficial.",
      icon: <FiServer className="text-4xl mb-4" />,
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative group bg-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-250 ease-out
                         transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer
                         focus-within:outline-none focus-within:ring-2 focus-within:ring-white focus-within:ring-opacity-50
                         perspective-1000`}
              tabIndex="0"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-50 rounded-2xl
                           transform group-hover:opacity-60 transition-opacity duration-250 ease-out`}
              />
              <div className="relative transform transition-transform duration-250 ease-out
                            group-hover:translate-z-10">
                <div className="text-white text-center">
                  {card.icon}
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-300 text-sm">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverCard3DGrid;