import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
  {
    question: "What is cloud hosting and how does it work?",
    answer:
      "Cloud hosting is a type of web hosting that uses multiple servers to balance the load and maximize uptime. Instead of relying on a single physical server, your website or app runs on a network of connected virtual servers, which means better performance, scalability, and reliability.",
  },
  {
    question: "Is cloud hosting better than traditional hosting?",
    answer:
      "Yes, in most cases. Cloud hosting offers more flexibility, better uptime, and faster performance compared to traditional shared hosting. It also allows you to scale your resources up or down based on demand—ideal for growing businesses.",
  },
  {
    question: "How secure is cloud hosting?",
    answer:
      "Cloud hosting is generally very secure when provided by a reputable hosting company. It includes features like firewalls, DDoS protection, regular backups, and data encryption to keep your site and customer information safe.",
  },
  {
    question: "Who should use cloud hosting?",
    answer:
      "Anyone from startups and bloggers to eCommerce businesses and large enterprises can benefit from cloud hosting. It’s especially great for websites with fluctuating traffic or those needing high availability and performance.",
  },
  {
    question: "What are the benefits of cloud hosting?",
    answer:
      "Cloud hosting offers high uptime (usually 99.99%), faster loading speeds thanks to SSD storage, real-time scalability, and robust security features. You also get access to 24/7 technical support in most plans.",
  },
  {
    question: "Does cloud hosting include backups?",
    answer:
      "Most cloud hosting providers include automated backups as part of their packages. It’s always good to check if daily or weekly backups are included, or if you need to enable them manually.",
  },
  {
    question: "Can I migrate my website to cloud hosting easily?",
    answer:
      "Yes! Many cloud hosting providers, like SixthStar, offer free website migration. Their technical team helps you move your data with zero downtime and minimal hassle.",
  },
  {
    question: "Is cloud hosting expensive?",
    answer:
      "Not necessarily. While cloud hosting can cost more than shared hosting, the value it offers in terms of performance, scalability, and security makes it a smart investment for businesses of any size.",
  },
  {
    question: "How does cloud hosting handle traffic spikes?",
    answer:
      "Cloud hosting automatically scales your resources during high-traffic periods. This means your site stays fast and online even during traffic surges—perfect for sales, promotions, or viral content.",
  },
  {
    question: "What should I look for in a cloud hosting provider?",
    answer:
      "Look for features like SSD storage, 99.99% uptime, 24/7 support, scalability, free migration, and strong security. A reliable provider will also offer transparent pricing and flexible plans to match your needs.",
  },
];

const FaqItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="rounded-lg mb-4 overflow-hidden border border-gray-300 dark:border-gray-600">
      <button
        className="w-full text-left p-3 flex justify-between items-center bg-white dark:bg-slate-800"
        onClick={onToggle}
      >
        <span className="font-medium">{faq.question}</span>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out px-4 text-sm leading-relaxed ${
          isOpen ? "max-h-screen opacity-100 py-3" : "max-h-0 opacity-0 py-0"
        } overflow-hidden bg-gray-50 dark:bg-slate-700`}
      >
        {faq.answer}
      </div>
    </div>
  );
};

FaqItem.propTypes = {
  faq: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const CloudFaq4 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const column1 = faqList.slice(0, 5);
  const column2 = faqList.slice(5, 10);

  return (
    <section className="py-14 md:py-2 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {column1.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                isOpen={activeIndex === i}
                onToggle={() => toggleFaq(i)}
              />
            ))}
          </div>
          <div>
            {column2.map((faq, i) => (
              <FaqItem
                key={i + 5}
                faq={faq}
                isOpen={activeIndex === i + 5}
                onToggle={() => toggleFaq(i + 5)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudFaq4;
