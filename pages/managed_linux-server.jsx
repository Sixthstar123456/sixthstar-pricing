import React from 'react'
import ManagedLinuxBanner from '../components/ui/managed-linux-new-banner'
import ManagedAdvancedFeatures from '../components/ui/managed-linux-advanced-features'
import ManagdedLinuxServices from '../components/ui/managed-linux-services'
import ManagedBentoGridSection from '../components/ui/managed-linux-bento'
// import BlogSlider from '../components/home-carousel'
import { TestimonialSlider } from '../components/ui/home-testimonial'
import ManagedLinuxFaqSection from '../components/ui/managed-linux-faqs'
import ContactFormManagedLinux from '../components/ui/managd-linux-contact'
import Footer from '../components/Footer'



export default function ManagedLinux() {
  return (
    <div>
        <ManagedLinuxBanner/>
        <ManagedAdvancedFeatures/>
        <ManagdedLinuxServices/>

        <ManagedBentoGridSection/>

        {/* <div className="best-cloud-home-heading-container-new pt-10">
<h2 className="best-cloud-home-heading-new ">Our Blogs</h2>
</div>
<BlogSlider/> */}
<TestimonialSlider/>
<ContactFormManagedLinux/>
<ManagedLinuxFaqSection/>




          <Footer/> 
    </div>
  )
}
