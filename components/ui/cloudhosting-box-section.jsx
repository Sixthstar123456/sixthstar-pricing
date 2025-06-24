import { motion } from "framer-motion";

export const CloudFeatureGrid = () => {
  const features = [
    {
      image:
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746534392/Untitled_1000_x_1000_px_bsnewv.png",
      label: "Easy Cloud Management",
    },
    {
      image:
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746534845/Untitled_1000_x_1000_px_1_d5m8c3.png",
      label: "Lower Cost Storage",
    },
    {
      image:
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746534844/Untitled_1000_x_1000_px_2_cfj9ap.png",
      label: "Security",
    },
    {
      image:
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746534843/Untitled_1000_x_1000_px_3_xapy79.png",
      label: "Failover & High Availability",
    },
    {
      image:
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746534841/Untitled_1000_x_1000_px_4_kbzdrz.png",
      label: "Auto Scaling",
    },
    {
      image:
        "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746534837/Untitled_1000_x_1000_px_5_zdurvv.png",
      label: "Flexible Payment",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          How our Cloud Hosting Differs from Others
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center p-5 bg-gradient-to-br from-blue-50 via-white to-gray-100 rounded-xl shadow hover:shadow-lg border border-gray-100 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <div className="mb-4 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-[100px] h-[100px] object-contain"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-800">{item.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudFeatureGrid;
