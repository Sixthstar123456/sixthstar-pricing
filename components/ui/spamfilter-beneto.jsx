import { ShieldCheck, Rocket, Server, Cloud, LifeBuoy, Globe } from "lucide-react";
import { motion } from "framer-motion";

export const BenetoGrid = () => {
  const features = [
    { icon: <ShieldCheck />, title: "End-to-End Security", desc: "Protect your data and emails with enterprise-grade encryption." },
    { icon: <Rocket />, title: "Lightning Fast", desc: "Experience optimized performance across global servers." },
    { icon: <Server />, title: "Scalable Infrastructure", desc: "From startups to enterprises, we scale as you grow." },
    { icon: <Cloud />, title: "Cloud Native", desc: "Deploy in the cloud with 99.999% uptime and zero hassle." },
    { icon: <LifeBuoy />, title: "24/7 Support", desc: "Get human help whenever you need it—no bots." },
    { icon: <Globe />, title: "Global Presence", desc: "Our network spans the globe to serve you anywhere." },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-100">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-gray-600">
            We combine performance, reliability, and intuitive cloud tools to power your digital growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenetoGrid;
