import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCamera,
	faCannabis,
	faPencilRuler,
	faPoll,
	faRandom,
	faYinYang,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const features = [
	{
		image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746526338/ssl-1_wabedx.gif",
		title: "Authentic Security",
		description:
			"We provide encryption strength up to 2048 bit for maximum security with ECC support. Your entire website visitor’s data will be well-protected.",
	},
	{
		image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746526341/ssl-2_aozldi.gif",
		title: "Assurance",
		description:
			"You can assure your customer that their data’s are in right hands. Through trust seal and other guarantee issuance.",
	},
	{
		image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746526344/ssl-3_vrcj1p.gif",
		title: "Increase Visibility",
		description:
			"Installing SSL can gradually increase your SEO ranking i.e. as your visitor strength increases your page ranking will increase.",
	},
	{
		image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746526345/ssl-4_dmzequ.gif",
		title: "Trust Seal",
		description:
			"The trust seal can assure your customers that all transactions are safe and secure. You can increase trust and visibility strength among customers.",
	},
	{
		image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746526346/ssl-5_q9ol57.gif",
		title: "Warranty",
		description:
			"Our certificates come with a warranty based on the package. We will provide cash back if any wrong occurs.",
	},
	{
		image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746526464/ssl-6_sk7aqa.gif",
		title: "Support",
		description:
			"24/7 support services will be provided by our professionals. You can reach our SSL support in any instance.",
	},
];

const FeatureItem = ({ feature }) => {
	return (
		<div className="xl:p-6">
			<img
				src={feature.image}
				alt={feature.title}
				className="w-[100px] h-[100px] object-contain mb-6 mx-auto"
			/>
			<h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
			<p>{feature.description}</p>
		</div>
	);
};

FeatureItem.propTypes = {
	feature: PropTypes.object.isRequired,
};

const hovercard3d = () => {
	return (
		<section className="ezy__featured1 light py-14 md:py-36 bg-orange-100 dark:bg-[#0b1727] text-black">
      <h2 className="text-2xl md:text-[40px] leading-none font-bold mb-6 text-black text-center">Why ssl in sixthstar</h2>
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-12 text-center gap-y-6 md:gap-x-6">
					{features.map((feature, i) => (
						<div className="col-span-12 md:col-span-6 lg:col-span-4" key={i}>
							<FeatureItem feature={feature} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default hovercard3d;