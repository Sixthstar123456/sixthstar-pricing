import Head from "next/head";
import React from "react";
import { cn } from "../lib/utils";


import Footer from "../components/Footer";
import SslBlack from "../components/ssl";
import BorderBox3D from "../components/ssl-box";
import CTASection from "../components/ui/ssl-cta";

import CircularGallery from "../components/ui/ssl-circular-corousel";
import HoverCard3DGrid from "../components/ssl-final-card";
import SslModelbanner from "../components/ui/ssl-new-banner";
import SSLTypesCarousel from "../components/ui/ssl-carousel";
import SslFaq4 from "../components/ui/ssl-faq";
// import BlogSlider from "../components/home-carousel";
import { TestimonialSlider } from "../components/ui/home-testimonial";
import ContactFormSsl from "../components/ui/ssl-contact";


export default function sslCertificate() {



    const words = [
        { text: "Build"  ,  },
        { text: (" ") }, // Add a space here
        { text: "awesome" },
        { text: " " }, // Add a space here
        { text: "apps" },
        { text: " " }, // Add a space here
        { text: "with" },
        { text: " " }, // Add a space here
        { text: "Aceternity.", className: "text-blue-500 dark:text-blue-500" },
    ];
    return (

        
      <div>
        <Head>
         
         <title>About Sixthstar Technology</title>
	<meta name="description" content="fleet management software provider - One place to manage and maintain your fleet. Improve freight visibility for better transport management" />
	{/* <link rel="canonical" href="https://sixthstartech.com/produtcs/fleet-management-software-providers/" /> */}
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Fleet Management Software Provider in Chennai - Sixthstar Tech" />
	<meta property="og:description" content="fleet management software provider - One place to manage and maintain your fleet. Improve freight visibility for better transport management" />
	{/* <meta property="og:url" content="https://sixthstartech.com/produtcs/fleet-management-software-providers/" /> */}
	<meta property="og:site_name" content="Sixth Star Technologies" />
	<meta property="article:publisher" content="https://www.facebook.com/sixthstartechnologies" />
	<meta property="article:modified_time" content="2024-05-27T11:43:44+00:00" />
	<meta property="og:image" content="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722239517/why-choose-fleet_l0yzpz.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:label1" content="Est. reading time" />
	<meta name="twitter:data1" content="10 minutes" />
         </Head>
{/* banner section starts */}

         {/* <div className="banner-section">
        <div className="row banner-section-row">
            <div className="col-sm banner-section-content">
            <h3>
                About Sixthstar
            </h3>
            <h1>
                Our Innovation Serves you Better
            </h1>
            <p>
            SixthStar Technology has a huge history of  providing high-quality services and productsdeliver on time to the clients. 
            </p>
            <button>
                Contact us
            </button>

            </div>
            <div className="col-sm banner-image-container">

            </div>
            </div>
        </div> */}



     {/* <SslBlack/> */}
     <SslModelbanner/>



<CTASection/>

<div className="why-ssl-heading">

<h2>Types of SSL</h2>
<p></p>
</div>
<SSLTypesCarousel/>



<HoverCard3DGrid/>
{/* <div className="best-cloud-home-heading-container-new">
<h2 className="best-cloud-home-heading-new">Our Blogs</h2>
</div>
<BlogSlider/> */}

<TestimonialSlider/>


<ContactFormSsl/>
<SslFaq4/>
<div>

</div>
    <Footer/>
        </div>
    );
  }