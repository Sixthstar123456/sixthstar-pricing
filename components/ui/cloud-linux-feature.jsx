import {
    ShieldCheck,
    Server,
    Terminal,
    Settings,
    Cpu,
    LockKeyhole,
  } from "lucide-react";
  
  const features = [
    {
      icon: ShieldCheck,
      title: "Instant Activation",
      desc: "Your VPS will be instantly set up after payment verification, ready for deployment.",
    },
    {
      icon: Server,
      title: "Powerful Nodes",
      desc: "Enterprise-grade CPUs and SSDs ensure unmatched stability and uptime.",
    },
    {
      icon: Terminal,
      title: "Full Root Access",
      desc: "Complete administrative control to configure your server any way you want.",
    },
    {
      icon: Settings,
      title: "Choice of OS",
      desc: "Choose from CentOS, Ubuntu, Debian, Fedora, or Windows Server editions.",
    },
    {
      icon: Cpu,
      title: "No Overselling",
      desc: "Resources are guaranteed, so you get what you pay for — always.",
    },
    {
      icon: LockKeyhole,
      title: "Free SSL (Let’s Encrypt)",
      desc: "Every VPS includes a free SSL certificate to keep your data encrypted and trusted.",
    },
  ];
  
  export default function CloudLinuxFeatureColumns() {
    return (
      <section className="bg-gradient-to-br from-blue-50 to-white py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center">
  <img
    src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747050461/7081473_j6ac9i.jpg"
    alt="Cloud VPS Illustration"
    className="w-full max-w-2xl mx-auto rounded-lg shadow-xl"
  />
</div>

          {/* Left Column - Features */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 ">
              Why Choose Our <span className="text-blue-600">Cloud Linux?</span>
            </h2>
  
            <div className="space-y-10 relative border-l-4 border-blue-200 pl-14">
  {features.map((feature, index) => {
    const Icon = feature.icon;
    return (
      <div
        key={index}
        className="relative flex gap-4 group animate-fade-in-up transition-all duration-500"
      >
        {/* Icon Circle with spacing */}
        <div className="absolute -left-10 top-0 w-10 h-10 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center shadow-md">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>

        {/* Text Content */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-1 pl-4">
            {feature.title}
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed pl-4">
            {feature.desc}
          </p>
        </div>
      </div>
    );
  })}
</div>

          </div>
  
          {/* Right Column - Image */}
         
        </div>
      </section>
    );
  }
  