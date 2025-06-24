import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Description",
      content: (
        <div>
            <div className="description-cloud">
     
          <p className="text-justify">SixthStar offers tailor-made cloud hosting plans with features to fulfill customer’s needs and requirements. We are prominent in offering cloud services regardless of your industry structure and provide the best cloud solutions. With the SixthStar cloud hosting services, you can more efficiently provision and find all solutions with the best server operation.
</p>
</div>
          <div className="">
           <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1736413504/WhatsApp_Image_2025-01-09_at_14.33.26_o7yf3i.jpg" alt="" />
            
          
      
          </div>
        </div>
      ),
    },
    {
      title: "Features",
      content: (
        <div>
           <div className="description-cloud">
        
          <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1736413876/Untitled_design_23_w4cxfr.png" alt="" />
        
</div>
        <div className="features-cloud mb-8">
          <div
            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ INTEGRATED CACHING The loading speed will be fast due to the optimal caching configuration built into it.
          </div>
          <div
            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ EASY DASHBOARD The dashboard allows you to manage and track the site’s performance and information to review your website performance and metrics.
          </div>
          <div
            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ SIMPLE RESOURCE MANAGEMENT You can control and manage the monitor and allocate additional resources very easily.
          </div>
          <div
            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ AUTOMATED FAILOVER If any hardware issue arises due to malfunctioning or damages your site is automatically switched to another server.
          </div>
          <div
            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ DATA MIRRORING Cloud hosting will distribute your data’s mirrored copies automatically across various devices to ensure safety and redundancy.
          </div>
          <div
            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ CPANEL Create new email accounts; manage sub-domains, FTP’s, Files etc. easily with the click of a button.
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          
        </div>
      </div>
      ),
    },
    {
      title: "Security",
      content: (
        <div className="security-cloud">
             <div className="description-cloud">
        
          <img className="cloud-security-img" src="https://res.cloudinary.com/daggx9p24/image/upload/v1736414103/291_fpqg0p.jpg" alt="" />
        
</div>
          <div className="mb-8 features-cloud">
            <div
              className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div
              className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div
              className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div
              className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div
              className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
           
          </div>
        </div>
      ),
    },
  ];
  return (
    (<div className="w-full">
      <Timeline data={data} />
    </div>)
  );
}
