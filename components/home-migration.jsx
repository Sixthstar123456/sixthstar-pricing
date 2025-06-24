import React from "react";

export default function MigrationSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-6">
      
      {/* Left Box - Image */}
      <div className="bg-[#E8F6FF] rounded-[20px] p-6 flex-1 flex justify-center">
        <img
          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747725707/Untitled_design_27_ovyyjz.png" // Replace with actual image link
          alt="Migration Illustration"
          className="w-full max-w-[250px] object-contain"
        />
      </div>

      {/* Right Box - Content */}
      <div className="bg-[#E8F6FF] rounded-[20px] p-6 flex-1">
        <h2 className="text-xl md:text-2xl font-semibold text-[#042954] mb-4">
          Experience hassle–free website <br />
          migration at no cost
        </h2>
        <p className="text-[#042954] text-sm md:text-base leading-relaxed mb-4">
          <span className="font-semibold text-[#007BFF]">Switch to Sixthstar today!</span> We’ll help to move your site from any web host to Sixthstar for free. Our website migration service is swift and of course without any downtime. With us, you don’t have to worry about the migration complexities and technicalities. Our dedicated migration experts will do all the work for you.
        </p>
     <a
  href="/Contact-us"
  className="bg-[#007BFF] text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-[#005fcc] transition inline-block"
>
  Contact now
</a>
      </div>
    </div>
  );
}
