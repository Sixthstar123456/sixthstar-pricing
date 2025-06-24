import React from 'react'
import UnmanagedBanner from '../components/ui/unamanaged-home-banner'
import UnmanagedFeature from '../components/ui/unmanaged-linux-feature'
import UnmanagedNumber from '../components/ui/unmanaged-bento'
import UnmanagedCall from '../components/ui/unmanaged-callto-action'
// import BlogSlider from '../components/home-carousel'
import { TestimonialSlider } from '../components/ui/home-testimonial'
import ContactFormUnmanaged from '../components/ui/Unmanaged-Contact'
import UnmanagedFaq4 from '../components/ui/Unmanaged-faq'
import Footer from '../components/Footer'
export default function UnmanagedLinuxServer() {
  return (
    <div>
       <UnmanagedBanner/> 
       <UnmanagedFeature/>
       <UnmanagedNumber/>
       <UnmanagedCall/>
      

       {/* <div className="best-cloud-home-heading-container-new">
       <h2 className="best-cloud-home-heading-new">Our Blogs</h2>
       </div>
       
       <BlogSlider/> */}
       <TestimonialSlider/>
        <ContactFormUnmanaged/>
       <UnmanagedFaq4/>
           <Footer/>
    </div>
  )
}
