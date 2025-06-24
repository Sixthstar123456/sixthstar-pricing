import React from "react";

const UnmanagedNumber = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-14 overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            How does it work?
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis.
          </p>
        </div>

        {/* Custom Dotted Line */}
        <div className="relative mt-12 lg:mt-20">
        {/* Dotted Line aligned with numbers */}
{/* Wavy dotted line aligned with steps */}
  <div className="absolute top-8 left-0 w-full flex justify-center">
    <div className="relative w-[calc(100%-8rem)] max-w-4xl overflow-hidden">
      <svg
        viewBox="0 0 1000 60"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-6"
        preserveAspectRatio="none"
      >
        <path
          d="M0 30 Q 125 0 250 30 T 500 30 T 750 30 T 1000 30"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeDasharray="8,10"
          strokeLinecap="round"
          fill="none"
          className="animate-scrollRight"
        />
      </svg>
    </div>
  </div>




          {/* Steps */}
          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            {[
              {
                title: "Create a free account",
                description:
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
              },
              {
                title: "Build your website",
                description:
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
              },
              {
                title: "Release & Launch",
                description:
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
              },
            ].map((step, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  {step.title}
                </h3>
                <p className="mt-4 text-base text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnmanagedNumber;
