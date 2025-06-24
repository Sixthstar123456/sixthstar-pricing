import React from 'react'
import CloudLinuxNewBanner from '../components/ui/cloud-linux-banner';
import CloudLinuxFeatureColumns from '../components/ui/cloud-linux-feature';
import LinuxBentoGrid from '../components/ui/cloud-linux-beneto';
import CloudLinuxBox from '../components/ui/cloud-linux-box-section';
import LinuxFeatureBusiness from '../components/ui/LinuxHostingFeature';
// import BlogSlider from '../components/home-carousel';
import { TestimonialSlider } from '../components/ui/home-testimonial';
import CloudLinuxQuestions from '../components/ui/cloud-linux-faqs';
import ContactFormCloudLinux from '../components/ui/cloud-linux-contact';
import ComparisonTable from '../components/cloud-linux-sheet';
import Footer from '../components/Footer'



const CloudLinux = () => {
  return (
    <div>
<CloudLinuxNewBanner/>
< CloudLinuxFeatureColumns/>
<LinuxBentoGrid/>
<CloudLinuxBox/>
<ComparisonTable/>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-4 py-14 ">
  {/* Left Text Content */}
  <div className="space-y-4">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
      cPanel – Industry leading and user-friendly Control Panel
    </h2>
    <p className="text-gray-600 text-justify">
      cPanel is one of the most popular Linux-based graphical interfaces (GUI)
      that lets you effortlessly manage your website and hosting account.
      With cPanel, you can perform actions from a very easy-to-use dashboard
      without running a lot of complex commands. Our Cloud hosting plans
      include a cPanel that lets you perform these tasks with ease:
    </p>

    {/* Feature List */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-sm text-gray-700">
      <p>✅ Manage Websites & Domains</p>
      <p>✅ AI Website Builder</p>
      <p>✅ Create & Maintain Databases</p>
      <p>✅ Email Accounts</p>
      <p>✅ Upload & Download Files</p>
      <p>✅ FTP Accounts & more</p>
    </div>
  </div>

  {/* Right Image Panel */}
  <div className="flex justify-center">
    <img
      src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747744787/Screenshot_2025-05-20_180918_gdgoj9.png"
      alt="cPanel Interface"
      className="w-full max-w-md rounded-lg shadow-md"
    />
  </div>
</div>

<LinuxFeatureBusiness/>
{/* <div className="best-cloud-home-heading-container-new">
<h2 className="best-cloud-home-heading-new">Our Blogs</h2>
</div>
<BlogSlider/> */}
<TestimonialSlider/>
<ContactFormCloudLinux/>
<CloudLinuxQuestions/>
    <Footer/>
    </div>
  )
}
export default CloudLinux;