import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
  {
    question: "What is an SSL Certificate and why do I need it?",
    answer:
      "An SSL certificate encrypts data transferred between your website and its visitors, keeping information like passwords, personal details, and payment data secure. It also activates the padlock icon and \"https://\" in your URL—boosting user trust and SEO rankings.",
  },
  {
    question: "How does an SSL Certificate work?",
    answer:
      "When someone visits your site, the SSL certificate creates a secure, encrypted connection between their browser and your server. This prevents hackers from intercepting sensitive information during data transfer.",
  },
  {
    question: "Is SSL important for SEO?",
    answer:
      "Absolutely! Google considers HTTPS a ranking factor. Websites with SSL certificates tend to rank higher than non-secure ones, and browsers like Chrome label sites without SSL as “Not Secure,” which can turn visitors away.",
  },
  {
    question: "What types of SSL Certificates are available?",
    answer:
      "There are three main types:\n\nDomain Validated (DV) – Basic encryption, fast setup.\n\nOrganization Validated (OV) – Business-level validation and trust.\n\nExtended Validation (EV) – Highest trust level with company name in browser bar.",
  },
  {
    question: "How long does it take to get an SSL Certificate?",
    answer:
      "Domain Validated SSLs can be issued in minutes. OV and EV certificates may take 1–5 days due to additional business verification. SixthStar can guide you through the process smoothly.",
  },
  {
    question: "Does SSL protect my entire website?",
    answer:
      "Yes, once installed correctly, SSL secures all data transmissions across your entire domain. You can also use wildcard SSLs to secure all subdomains under a single certificate.",
  },
  {
    question: "Will SSL slow down my website?",
    answer:
      "Not at all! In fact, modern SSL certificates are optimized for speed. With HTTP/2 support and proper configuration, SSL can actually improve your site’s load performance.",
  },
  {
    question: "Can I get a free SSL certificate?",
    answer:
      "Yes, services like Let’s Encrypt offer free SSLs, which are great for basic sites. However, paid SSLs from providers like SixthStar offer stronger encryption, warranty protection, and brand trust—especially for business and eCommerce websites.",
  },
  {
    question: "How do I know if my SSL certificate is working?",
    answer:
      "When active, your site will display “https://” in the address bar with a padlock icon. You can also use online tools to verify SSL installation and check for errors.",
  },
  {
    question: "Where can I buy an SSL Certificate in India?",
    answer:
      "You can get reliable SSL certificates from trusted providers like SixthStar Technologies. We offer DV, OV, and EV SSLs with full installation support and 24/7 technical assistance.",
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

const SSLFaq4 = () => {
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

export default SSLFaq4;
