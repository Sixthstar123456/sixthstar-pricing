import React from "react";
import { TextAnimate } from "../components/ui/text-anime";
import { WavyBackground } from "../components/ui/wavy-background";
import HeroSection from "../components/ui/home-banner";
import { Tabs } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { CardHoverEffectDemo } from "../components/Card-new";
import Banner3D from "../components/ui/home-testimonial";
import Footer from "../components/Footer";
import PricingTable from "../components/ui/pricetable";
import App from "../components/home-spring-text-main";
import InfiniteCarousel from "../components/ui/slider";
import AutoProgressStepper from "../components/home-steps";
import StockMasterLanding from "../components/home-commitments";

import { TestimonialSlider } from "../components/ui/home-testimonial";
// import BlogSlider from "../components/home-carousel";
import Pricing7 from "../components/ui/newpricing";
import ContactForm from "../components/ui/Home-contact";
import Faq4 from "../components/ui/home-faqs";
import { motion } from "framer-motion";
import HeadingAnimation from "../components/ui/text-rotation";
import { BentoGrid } from "../components/ui/Home-bento";
import MigrationSection from "../components/home-migration";









export default function Home() {
    return (
      <div>

<div className="home-banner">
<HeroSection/>
    </div>
    <div className="home-client-carousel">
    <App/>
    </div>
    <div className='client-caraousel-cloudhosting'>
  <InfiniteCarousel/>
 </div>
      <div className="best-price-heading"> 
   
  

</div> 




{/* <div className='tab-main'>
<Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="India" title="India">
      <PricingTable/>
      </Tab>
      <Tab eventKey="Germany" title="Germany">
      <PricingTable/>
      </Tab>




 
     
    </Tabs>
</div> */}

<Pricing7/>



<StockMasterLanding/>
{/* <div className="best-cloud-home-heading-container">
<h2 className="best-cloud-home-heading">Best Cloud Hosting Service provides by Sixthstar</h2>

</div> */}

<div className="why-sixthstar-home">

</div>

<div className="best-cloud-home-heading-container-new">
<h2 className="best-cloud-home-heading-new pb-10">Cloud Hosting Essentials to Power your Website</h2>
</div>
<BentoGrid/>

{/* <div className="best-cloud-home-heading-container-new">
<h2 className="best-cloud-home-heading-new pt-4 pb-4">Our Blogs</h2>
</div>
<BlogSlider/> */}

<div className="best-cloud-home-heading-container-new">
  <div className="best-cloud-home-heading-container-new">
<h2 className="best-cloud-home-heading-new pt-4 pb-4">Migration made Easy</h2>
</div>
<MigrationSection/>

<TestimonialSlider/>

</div>


<motion.div
  className="relative z-20 top-[50%] -mt-4 mb-12 mx-auto p-6 sm:p-8 md:px-20 bg-white rounded-xl shadow-lg border border-gray-100 max-w-full sm:max-w-3xl lg:max-w-max"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.4 }}
>
  <HeadingAnimation />
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
</motion.div>




<ContactForm/>
<div>
  
<Faq4/>

</div>
    <Footer/>
      </div>

    
    );
  }