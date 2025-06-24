import React from 'react'
import CarbonioMain from '../components/ui/carbonio-banner'
import FeaturesSectionCarbonio from '../components/ui/carbonio-feature'
import DemoSection from '../components/ui/carbonio-feature'

import { motion } from 'framer-motion'
import CarbonioFaqs from '../components/ui/carbonio-faqs'
import ContactFormcarbonio from '../components/ui/carbonio-contact'
import { TestimonialSlider } from '../components/ui/home-testimonial'
import Pricing8 from '../components/ui/carbonio-pricing'
// import BlogSlider from '../components/home-carousel'
import Footer from '../components/Footer'

export default function carbonio() {
  return (
    <div >
<CarbonioMain/>
<DemoSection/>


{/* <motion.div
  className="relative z-20 top-[50%] -mt-4 mb-12 mx-auto p-6 sm:p-8 md:px-20 bg-white rounded-xl shadow-lg border border-gray-100 max-w-full sm:max-w-3xl lg:max-w-max"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.4 }}
>
<div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 pt-10">
          <span className="gradient-text ">Official Prtners of Zextras</span>
          </h2>
        
        </div>
  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-6 sm:gap-12 lg:gap-24">
    {[
      { src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746516343/gdpr_qhmwv2_qsmasd.webp" },
      { src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746516342/rqc_vqtye4_zxkbe8.webp" },
      { src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746516341/iso-20000_obiguc_xpsmzb.webp" },
      { src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746516341/ukasl_ae4pum_kajkcb.webp" },
      { src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746516340/iso-27001_nenayk_nz4c7a.webp" },
    ].map((item, i) => (
      <motion.div
        key={i}
        className="text-center w-full sm:w-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 + i * 0.1 }}
      >
        <img
          src={item.src}
          alt=""
          className="h-16 w-16 mx-auto mb-2 object-contain"
        />
        <p className="text-sm text-gray-600">{item.label}</p>
      </motion.div>
    ))}
  </div>
</motion.div> */}
{/* <div className="best-cloud-home-heading-container-new">
<h2 className="best-cloud-home-heading-new">Our Blogs</h2>
</div>
<BlogSlider/> */}
<Pricing8/>
<TestimonialSlider/>
<ContactFormcarbonio/>
<CarbonioFaqs/>

    <Footer/>
    </div>
  )
}
