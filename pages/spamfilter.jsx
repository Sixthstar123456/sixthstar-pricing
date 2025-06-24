import React from 'react'
import { GoogleGeminiEffectDemo } from '../components/google-gemini-page'
import FeatureGrid from '../components/Card-new'
import { BackgroundGradient } from '../components/ui/background-gradient'
import { IconAppWindow } from '@tabler/icons-react'
import Image from "next/image";
import Service20 from '../components/ui/bento-grid'
import Footer from '../components/Footer'
import IncomingOutgoing from '../components/spam-income-outcome'
import TwoColumnSectionOut from '../components/outgoingspam'
import AlternateHero from '../components/ui/spam-new-banner'
import Spamprotect from '../components/ui/spam-protect'
// import BlogSlider from '../components/home-carousel'
import { TestimonialSlider } from '../components/ui/home-testimonial'
import SpamFaq4 from '../components/ui/spam-faq'
import ContactFormSpam from '../components/ui/spam-contact'





export default function spamfilter() {
  return (
    <div>

  <AlternateHero/>
    
<Spamprotect/>

  

    <div className='incoming-spam-second-boox'>
<FeatureGrid/>
</div>

<IncomingOutgoing/>
{/* <div className="best-cloud-home-heading-container-new">
<h2 className="best-cloud-home-heading-new">Our Blogs</h2>
</div>
<BlogSlider/> */}
<TestimonialSlider/>

<div>
     
</div>





{/* <div className='outgoing-box-container'>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-cyan-500 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Avoid IP Blocklisting
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          The setup of Sixth star’s outgoing SPAM Filter will help you get rid of network related SPAM issues and will stop the time spent on delisting to a minimum.
          </p>
        </div>
        
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Abuse Manageabality
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        With Sixth Star Outgoing SPAM Filter service you can get clear and brief reports indicating which users/ accounts require attention and automatically locking them.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Elemenate Severe Fines
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Global-wide legislative and organizations are entitled to severely fine companies for sending out unwanted emails. Our outgoing SPAM Filter is a robust solution that prevents your organization from possible penalties for sending out spam emails.
          </p>
        </div>
       
      </WobbleCard>
    </div>
    </div> */}
<Service20/>

    <div>
      <ContactFormSpam/>
      <SpamFaq4/>

</div>
    <Footer/>
   </div>
        
    
  )
}
