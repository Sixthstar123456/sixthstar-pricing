import Head from "next/head";
import Timeline from "../components/Timeliner";
import Footer from "../components/Footer";
export default function About() {
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

         <div className=" pt-20 banner-section ">
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
        </div>
{/* banner section ends */}

{/* Who We are section starts */}

<div className="row who-we-are-section">
    <div className="col-sm who-we-are-section-imgcontainer">
        <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1735033433/Untitled_design_5_cqie5k.jpg" alt="" />
    </div>
    <div className="col-sm who-we-are-section-contents">
        
<h2>Who We are ?</h2>
        <p>
        SixthStar Technology is an outstanding global IT solution provider, headquarters in Chennai, India, and branches located in Germany and Malaysia. The main objective of our company is providing solutions to the niches for a company that needs full end-to-end enterprise software solutions, we deliver it accurately.

SixthStar Technology has a huge history of providing high-quality services and products deliver on time to the clients. We have been involved in the development and support of huge mission-critical projects and thus makes its presence in the global market. We are offering substantial cost savings for our clients, assuring them to access various software competencies. We have experienced and skilled professionals to execute high-quality services.
        </p>

    </div>
</div>

{/* Who We are section ends */}

{/* Why choose us page starts */}
<div className="why-choose-us-heading">
<h2>
    Why Choose Us
</h2>
</div>
<Timeline /> 

{/* <div className="row who-we-are-section">
   
    <div className="col-sm who-we-are-section-contents">
        
<h2>Why Choose Us</h2>
        <p>
        Sixth Star Technologies have an uncompromising dedication to offer an excellent hosting service that is highly accessible and in case you have any technical issues which are solved immediately by our talented support team. We have earned the customer’s trust and support by providing the best service. Our motto is to offer the best cloud hosting service that ensures clients satisfaction, fulfill their needs, and good reviews from our customer.
        </p>
        <div className="row">
            <div className="col-sm">
            <p> <i class="fa-solid fa-circle-half-stroke choose-icon"></i>
            Reduces IT costs, only pay for what you use
            </p>
            </div>
            <div className="col-sm">
            <p> <i class="fa-solid fa-circle-half-stroke choose-icon"></i>
            Enhances security with our safe data center architecture
            </p>
            </div>

        </div>
        <div className="row">
            <div className="col-sm">
            <p> <i class="fa-solid fa-circle-half-stroke choose-icon"></i>
            Maximize efficiency of process by focusing on strategic updates
            </p>
            </div>
            <div className="col-sm">
            <p> <i class="fa-solid fa-circle-half-stroke choose-icon"></i>
            Support all workload environment and applications
            </p>
            </div>
            
        </div>
        <div className="row">
            <div className="col-sm">
            <p> <i class="fa-solid fa-circle-half-stroke choose-icon"></i>
            Regular support for applications and legacy systems
            </p>
            </div>
            <div className="col-sm">
            <p> <i class="fa-solid fa-circle-half-stroke choose-icon"></i>
            Accomplish flexible operations for network and storage
            </p>
            </div>
            
        </div>
        <div className="row">
            <div className="col-sm">
            <p> <i class="fa-solid fa-circle-half-stroke choose-icon"></i>
            Greater scalability and reliability by optimizing application performance
            </p>
            </div>
            <div className="col-sm">
            <p> <i class="fa-solid fa-circle-half-stroke"></i>
            99.99% uptime guaranteed and 24/7 technical support
            </p>
            </div>
            
        </div>
    </div>
    <div className="col-sm who-we-are-section-imgcontainer">
        <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1735033433/Untitled_design_5_cqie5k.jpg" alt="" />
    </div>
</div> */}


<div>

</div>



    <Footer/>
      </div>
    );
  }