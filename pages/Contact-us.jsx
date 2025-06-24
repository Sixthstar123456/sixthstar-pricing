import React from 'react';
import { WorldMap } from '../components/ui/world-map';

import { motion } from "motion/react";
import Address from '../components/ui/contact-address';
import ContactUsForm from './Form/contactus';
import Footer from '../components/Footer';
import ConBanner from '../components/ui/contact-new-banner';



export default function ContactUs() {
  return (
    <div>
      {/* <div className='contactus-banner'> 
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl text-white ">
          
          <span className="">
            {"Contact us".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg  max-w-2xl mx-auto text-white py-4">
        We take extreme pride in mentioning that we have always executed our projects professionally and in a timely fashion. Despite the distances and geographical boundaries that separate us from our clients, we have always ensured that we remain in constant touch to ensure an open and constant flow of communication between us.
        </p>
      </div>
      </div> */}

<ConBanner/>


<div className="row main-row min-h-screen items-center justify-center">
  <div className="col-sm contact-first-column">
    <div className="cntact-main">
      <ContactUsForm />
    </div>
  </div>

  <div className="col-sm map-cont d-flex align-items-center justify-content-center">
    <div className="map-sub-cont w-100 text-center">
      <div className="bg-white dark:bg-black">
        <img
          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746599867/Untitled_1000_x_1000_px_3_mzrcda.gif"
          alt="Contact Animation"
          style={{ maxHeight: "600px", width: "100%", objectFit: "contain" }}
        />
      </div>
    </div>
  </div>
</div>


<Address/>
  
      <div>

</div>
    <Footer/>
    </div>
  )
}
