import React from 'react'
import SelfManagedWindowBanner from '../components/ui/self-managed-window-cloud-banner'
import SelfManagedFeature from '../components/ui/self-managed-cloud-feature'
import SelfManagedCallToAction from '../components/ui/self-managed-call-to-action'
// import BlogSlider from '../components/home-carousel'
import { TestimonialSlider } from '../components/ui/home-testimonial'
import SelfManagedFaq4 from '../components/ui/self-managed-faqs'
import ContactFormSelfManaged from '../components/ui/self-managed-contact'
import Footer from '../components/Footer'


export default function SelfManagedWindowCloudHome() {
  return (
    <div>
        <SelfManagedWindowBanner/>
        <SelfManagedFeature/>
        <SelfManagedCallToAction/>

        {/* <div className="best-cloud-home-heading-container-new">
        <h2 className="best-cloud-home-heading-new">Our Blogs</h2>
        </div>
        
        <BlogSlider/> */}

        <TestimonialSlider/>
        <ContactFormSelfManaged/>
        <SelfManagedFaq4/>
            <Footer/>
    </div>
  )
}
