import React from 'react'
import WindowManagdVPSBanner from '../components/ui/window-managed-vps-banner'
import WindowVpsFeature from '../components/ui/window-vps-feature'
import WindowManagedVPSBento from '../components/ui/window-managed-bento'
import WindowManagedBusiness from '../components/ui/window-managed-vps-business'
// import BlogSlider from '../components/home-carousel'
import { TestimonialSlider } from '../components/ui/home-testimonial'
import WindowManagedVPSFaqs from '../components/ui/window-managed-vps-faqs'
import ContactFormWindowManaged from '../components/ui/window-managed-vps-contact'
import Footer from '../components/Footer'


export default function WindowManagedvps() {
  return (
    <div>
<WindowManagdVPSBanner/>
<WindowVpsFeature/>
<WindowManagedBusiness/>
<WindowManagedVPSBento/>
{/* <div className="best-cloud-home-heading-container-new">
<h2 className="best-cloud-home-heading-new">Our Blogs</h2>
</div>
<BlogSlider/> */}
<TestimonialSlider/>
<ContactFormWindowManaged/>
<WindowManagedVPSFaqs/>
    <Footer/>

    </div>
  )
}
