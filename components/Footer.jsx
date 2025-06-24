import React from "react";
import Image from "next/image";
import { Mail, Phone, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05153F] text-white py-12 px-6 md:px-18">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

        {/* Column 1: About & Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-2">About Us</h2>
          <p className="text-gray-300 mb-2">
            With over 16+ years of expertise, Sixth Star Technology stands as a premier IT solution provider in India.
          </p>
          <div className="flex items-center text-gray-300 space-x-2 mb-1">
            <Mail size={16} />
            <span>sales@sixthstar.in</span>
          </div>
          <div className="flex items-center text-gray-300 space-x-2 mb-4">
            <Mail size={16} />
            <span>support@sixthstar.in</span>
          </div>
          <div className="flex space-x-4 text-white text-lg">
            <a href="https://www.facebook.com/sixthstartechnologies.page/"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/sixthstar_technologies/"><Instagram size={20} /></a>
            <a href="https://www.youtube.com/@sixthstarTechnologies"><Youtube size={20} /></a>
            <a href="https://www.linkedin.com/company/sixth-star-technologies"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Column 2: Addresses */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Corporate Office:</h2>
          <p className="text-gray-300 mb-4">
            Sixth Star Technologies, 1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam, Chennai, Tamilnadu, India – 600097
          </p>
          <h2 className="text-lg font-semibold mb-1">Germany:</h2>
          <p className="text-gray-300 mb-4">
            Sixth Star Technologies, Boetzinger Straße 60, 79111 Freiburg, Germany
          </p>
        </div>

        {/* Column 3: More Addresses */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Hyderabad:</h2>
          <p className="text-gray-300 mb-4">
            Sixth Star Technologies, Plot No A-38, Ground Floor, JJ Nagar, Naredmet x Roads, Hyderabad-500094<br />
            PH: 9383996666
          </p>
          <h2 className="text-lg font-semibold mb-2">Malaysia:</h2>
          <p className="text-gray-300">
            Sixth Star Technologies, C4-2-39, Jalan 1/152, Taman OUG, Parklane ,58200, Kuala Lumpur, Malaysia.
          </p>
        </div>

        {/* Column 4: Links */}
        <div className="grid grid-cols-2 gap-4 text-gray-300">
          <div>
            <h2 className="text-white font-semibold mb-2">Company</h2>
            <ul className="space-y-1">
          
            <li><a href="/sitemap">Sitemap</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/acceptable-use-policy">Acceptable Use Policy</a></li>
              <li><a href="/blog">Insights</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-semibold mb-2">Servers</h2>
            <ul className="space-y-1">
              <li><a href="/cloud-hosting">Cloud Hosting</a></li>
              <li><a href="/spamfilter">Spam Filter</a></li>
              <li><a href="/Ssl-Certificate">SSL certificate</a></li>
              {/* <li><a href="/managed_linux-server">Managed Linux Server</a></li>
               <li><a href="/unmanaged-linux-server">Unmanaged Linux Server</a></li>
                <li><a href="/self-managed-windows-cloud">Self Managed Windows Server</a></li>
                 <li><a href="/window-managed-vps-server">Windows Managed VPS Server</a></li>
                  <li><a href="/cloud-linux-server">Cloud Linux Server</a></li> */}
          
            </ul>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="flex justify-center gap-4 mt-10 mb-6 flex-wrap">
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746516343/gdpr_qhmwv2_qsmasd.webp" alt="ISO" width={60} height={60} />
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746516342/rqc_vqtye4_zxkbe8.webp" alt="GDPR" width={60} height={60} />
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746516341/iso-20000_obiguc_xpsmzb.webp" alt="ROC" width={60} height={60} />
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746516341/ukasl_ae4pum_kajkcb.webp" alt="BBB" width={60} height={60} />
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746516340/iso-27001_nenayk_nz4c7a.webp" alt="27001" width={60} height={60} />
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © Copyright 2025 | All Rights Reserved by Sixthstar tech
      </div>
    </footer>
  );
}
