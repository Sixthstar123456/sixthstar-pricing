import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Footer from '../components/Footer'

const sitemap = [
  'Web Hosting',
  // 'Managed Services',
  'Web Security',
  'Mail Solutions',
];

const sitemapLinks = {
  'Web Hosting': [
    { label: 'Cloud Hosting', url: '/cloud-hosting' },
  ],
  // 'Managed Services': [
  //   { label: 'Managed Linux Server', url: '/managed-linux-server' },
  //   { label: 'Unmanaged Linux Server', url: '/unmanaged-linux-server' },
  //   { label: 'Window managed vps Server', url: '/windows-managed-vps' },
  //   { label: 'Self-Managed Window Cloud Server', url: '/self-managed-windows-cloud' },
  // ],
  'Web Security': [
    { label: 'SSL Certificate', url: '/ssl-certificate' },
  
    { label: 'SpamFilter', url: '/spamfilter' },
  ],
  'Mail Solutions': [
    { label: 'Carbonio', url: '/carbonio' },
  ],
};

const linkImages = {
  'Cloud Hosting': 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747213574/Untitled_design_hvc5xd.svg',
  'Managed Linux Server': 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747049543/Untitled_design_5_icn1za.png',
  'Unmanaged Linux Server': 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747120289/Untitled_design_8_cwo7u6.png',
  'Window managed vps Server': 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747131648/Untitled_design_9_tshezr.png',
  'Self-Managed Window Cloud Server': 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747200546/nxewf9vvfgduxj1tochb.png',
  'SSL Certificate': 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746512938/Untitled_500_x_500_px_5_bfi8xw.png',
  'Free SSL Certificate': 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746512182/Untitled_500_x_500_px_4_tioccj.png',
  'SpamFilter': 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746505340/Untitled_design_18_ig6y7d.png',
  'Carbonio': 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746618356/Untitled_1000_x_1000_px_7_clwqhe.png',
};

export default function CloudSiteMap() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hideHeadingSection, setHideHeadingSection] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div>
    <div className="flex flex-col md:flex-row p-10 space-y-6 md:space-y-0 md:space-x-10 pt-32">
      {/* Left Menu */}
      <div className="md:w-1/4 flex justify-center items-start">
        <ul className="space-y-4 text-gray-700 text-lg font-medium py-8 px-4">
          {sitemap.map((item, idx) => (
            <li
              key={idx}
              className={`border-b pb-2 transition cursor-pointer ${
                activeSection === item
                  ? 'border-blue-500 text-blue-600 font-semibold'
                  : ''
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="md:w-3/4 space-y-10">
        {Object.entries(sitemapLinks).map(([section, links]) => (
          <div key={section} className="relative pt-20">
            {/* Heading with animation */}
            <motion.h2
              className="text-xl font-semibold text-gray-800 mb-4 -mt-16"
              animate={{ opacity: hideHeadingSection === section ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {section}
            </motion.h2>

            <div className="flex flex-wrap gap-3 relative">
              {links.map(({ label, url }, i) => (
                <div
                  key={i}
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredLink(label);
                    setActiveSection(section);
                    if (i === 0) setHideHeadingSection(section);
                  }}
                  onMouseLeave={() => {
                    setHoveredLink(null);
                    setHideHeadingSection(null);
                    setActiveSection(null);
                  }}
                >
                  <a
                    href={url}
                    className="px-4 py-2 border border-blue-400 text-blue-600 rounded text-sm hover:bg-blue-50 transition block"
                  >
                    {label}
                  </a>

                  {hoveredLink === label && (
                    <motion.div
                      className="absolute bottom-full left-0 mb-2 z-10 w-28"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={linkImages[label]}
                        alt={label}
                        className="w-[100px] h-auto "
                      />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
            <hr className="my-6 border-t" />
          </div>
        ))}
      </div>
          
    </div>
    <Footer/>
    </div>
  );
}
