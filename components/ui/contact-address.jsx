import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faLightbulb,
  faSlidersH,
  faTh,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faSlidersH,
    title: "Corporate Office",
    desc: "1st Floor, No.3&4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Muttukkaranchavadi, Thoraipakkam, Chennai, Tamilnadu, India - 600 097",
    bgColor: "purple-50",
    contact: [
      {
        icon: faPhone,
        text: "+91 99621 07399",
      },
      {
        icon: faEnvelope,
        text: "sales@sixthstar.in",
      },
    ],
  },
  {
    icon: faSlidersH,
    title: "Malaysia",
    desc: "Sixth Star Technologies, C4-2-39, Jalan 1/152,Taman OUG, Parklane ,58200, Kuala Lumpur, Malaysia.",
    bgColor: "purple-50",
    contact: [
      {
        icon: faPhone,
        text: "+60 1021 17305",
      },
      {
        icon: faEnvelope,
        text: "sales@sixthstar.in",
      },
    ],
  },
  {
    icon: faSlidersH,
    title: "Germany",
    desc: "Sixth Star Technologies, Boetzinger Straße 60, 79111 Freiburg, Germany.",
    bgColor: "purple-50",
    contact: [
      {
        icon: faPhone,
        text: "+49 761 4514 0",
      },
      {
        icon: faEnvelope,
        text: "sales@sixthstar.in",
      },
    ],
  },
  {
    icon: faSlidersH,
    title: "Hyderabad",
    desc: "Sixth Star Technologies, Infotech Plot No A-38,Ground Floor JJ Nagar , Naredmet x Roads, Hyderabad-500094.",
    bgColor: "purple-50",
    contact: [
      {
        icon: faPhone,
        text: "+91 9383996666",
      },
      {
        icon: faEnvelope,
        text: "sales@sixthstar.in",
      },
    ],
  },
];

const FeaturedItem = ({ feature }) => {
  return (
    <div className={`bg-${feature.bgColor} text-black p-4 mt-6 rounded-xl shadow h-full flex flex-col`}>
      <div className="py-6 lg:p-8 xl:p-10 flex flex-col flex-grow">
        <div className="text-[30px] mb-4 text-indigo-600">
          <FontAwesomeIcon icon={feature.icon} />
        </div>
        <h4 className="text-[22px] font-semibold mb-4">{feature.title}</h4>
        <p className="text-base opacity-80 mb-4 flex-grow">{feature.desc}</p>

        {feature.contact && (
          <div className="space-y-2 mt-auto">
            {feature.contact.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-800">
                <FontAwesomeIcon icon={item.icon} className="text-blue-500 w-4 h-4" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

FeaturedItem.propTypes = {
  feature: PropTypes.object.isRequired,
};

const Address = () => {
  return (
<section className="pt-4 pb-20 md:pt-14 md:pb-20 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
<div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-6 items-stretch">
          {features.map((feature, i) => (
            <div className="col-span-12 md:col-span-6 lg:col-span-3 h-full" key={i}>
              <FeaturedItem feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Address;
