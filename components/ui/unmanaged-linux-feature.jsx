import {
  Server,
  ShieldCheck,
  Rocket,
  Database,
  Globe,
  Wrench,
} from "lucide-react";

const features = [
  {
    icon: <Server className="h-8 w-8 text-blue-600" />,
    title: "High Uptime",
    desc: "99.9% uptime guarantee for uninterrupted performance.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-green-600" />,
    title: "Secure Hosting",
    desc: "Advanced security with DDoS protection & SSL.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-rose-600" />,
    title: "Blazing Speed",
    desc: "SSD-powered hosting with LiteSpeed for max speed.",
  },
  {
    icon: <Database className="h-8 w-8 text-yellow-600" />,
    title: "Database Support",
    desc: "MySQL, PostgreSQL, and scalable database support.",
  },
  {
    icon: <Globe className="h-8 w-8 text-indigo-600" />,
    title: "Global Reach",
    desc: "Fast content delivery with CDN & multi-region support.",
  },
  {
    icon: <Wrench className="h-8 w-8 text-purple-600" />,
    title: "Developer Tools",
    desc: "SSH access, Git integration, and automation support.",
  },
];

export default function UnmanagedFeature() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Powerful Features Built for You
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Everything you need to scale, secure, and supercharge your hosting experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
