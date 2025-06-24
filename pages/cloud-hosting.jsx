import { useState, useEffect } from 'react';  


import { motion } from 'framer-motion';
import useMousePosition from '../components/useMousePosition'; // Ensure this file exists

import InfiniteCarousel from '../components/ui/slider';

import CloudNewBanner from '../components/ui/cloud-hosting-newbanner';
import CloudFeatureGrid from '../components/ui/cloudhosting-box-section';
import Pricing7 from '../components/ui/newpricing';
import Secure from '../components/ui/cloud-hosting-last';
// import BlogSlider from '../components/home-carousel';
import { TestimonialSlider } from '../components/ui/home-testimonial';
import CloudFaq4 from '../components/ui/cloudhosting-faq';
import ContactFormCloud from '../components/ui/cloud-contact';
import Footer from '../components/Footer'







const cloudhosting = () => {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition(); // Verify this custom hook returns x and y coordinates
  const size = isHovered ? 400 : 40;
  return (
    <div className="main">
   
    
  <CloudNewBanner/> 

<CloudFeatureGrid/>

<Pricing7/>
<Secure/>


<div>
<motion.div
  className="relative z-20 top-[50%] -mt-4  mb-12 mx-auto p-8 px-20 bg-white rounded-xl shadow-lg border border-gray-100 max-w-max"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.4 }}
>
  <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
    Why Choose Us?
  </h3>
  <div className="flex flex-wrap justify-center gap-24">
    {[
      { value: "24/7", label: "Dedicated Live Support" },
      { value: "99.99", label: "Up Time" },
      { value: "45 Day", label: "Try for Risk Free" },
   
    ].map((stat, i) => (
      <motion.div
        key={i}
        className="text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 + i * 0.1 }}
      >
        <div className="text-2xl font-bold text-blue-600">
          {stat.value}
        </div>
        <p className="text-sm text-gray-600">{stat.label}</p>
      </motion.div>
    ))}
  </div>
</motion.div>
</div>

{/* <div className="best-cloud-home-heading-container-new">
<h2 className="best-cloud-home-heading-new">Our Blogs</h2>
</div>

<BlogSlider/> */}

<TestimonialSlider/>


<ContactFormCloud/>
<CloudFaq4/>

 <div className='client-caraousel-cloudhosting'>
  <InfiniteCarousel/>
 </div>


    <Footer/>
    </div>
     
  )
}

export default cloudhosting