import { ShieldCheck, Rocket, Database, Server, Cloud, LifeBuoy } from "lucide-react";
import { motion } from "framer-motion";

export const FeatureGrid = () => {
  const features = [
    { icon: <LifeBuoy />, label: " Effortless Setup & Integration" },
    { icon: <Rocket />, label: "Easy-to-Use Dashboard" },
    { icon: <Database />, label: "Reliable Email Delivery" },
    { icon: <Server />, label: "Full Control & Custom Rules" },
    { icon: <Cloud />, label: "Advanced Threat Protection" },
    { icon: <ShieldCheck />, label: "24/7 Monitoring & Support" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          What Makes Our Spam Filter Stand Out
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center p-5 bg-gradient-to-br from-blue-50 via-white to-grey-100 rounded-xl shadow hover:shadow-lg border border-gray-100 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <div className="p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-sm font-medium text-gray-800">{item.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
