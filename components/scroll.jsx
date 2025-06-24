"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Easy Cloud Management",
    description:
      "Our servers allow easy cloud management for surplus customers. With the use of our innate control panel, you can customize the provisioning services and resource features. Also, we make deployment easy and instant.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1736331911/Untitled_500_x_400_px_qdjofa.png" alt="" />
      </div>
    ),
  },
  {
    title: "Lower Cost Storage",
    description:
      "We will ensure to provide lower cost storage concerning your capital input in all aspects and bestow the most secure and expandable cloud storage for making backups and data archiving easier.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
       <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1736332064/Untitled_500_x_400_px_1_snmkdp.png" alt="" />
      </div>
    ),
  },
  {
    title: "Security",
    description:
      "No data will be shared or destroyed since we maintain multi-layered cloud security to protect your data and other confidential documents without any malware attacks.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
    <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1736332141/Untitled_500_x_400_px_2_b6j24y.png" alt="" />
      </div>
    ),
  },
  {
    title: "Failover & High Availabilty",
    description:
      "Since the cloud uses virtual resources and has a self-healing architecture there won’t be any insufficiency and hardware failovers. If there is any failover, it will automatically change to another stable resource thus assuring high-availability.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1736332353/Untitled_500_x_400_px_3_rww5nq.png" alt="" />
      </div>
    ),
  },

  {
    title: "Auto Scaling",
    description:
      "Our Best cloud hosting allows auto-scaling to increase or decrease the cloud server resources at any time as per the business requirement. During the process, there won’t be any downtime occurrence.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1736332399/Untitled_500_x_400_px_4_iqtdf2.png" alt="" />
      </div>
    ),
  },
   {
    title: "Flexible payment",
    description:
      "You can pay only for the resources you have consumed. No other extra charges will be billed since we support utility billing. As your requirements grow, the cost will be beneficial.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1736332450/Untitled_500_x_400_px_5_lnm4ad.png" alt="" />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    (<div className="p-10">
      <StickyScroll content={content} />
    </div>)
  );
}
