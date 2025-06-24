import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
  {
    question: "What are the best cloud hosting providers in India for startups?",
    answer:
      "For startups, the best cloud hosting providers in India include Sixthstar Technologies, DigitalOcean India, AWS Mumbai Region, and Hostinger India. Sixthstar stands out with its affordable pricing, scalable plans, and dedicated support, making it a great fit for early-stage businesses and developers.",
  },
  {
    question: "Is cloud hosting better than shared hosting for Indian websites?",
    answer:
      "Yes. Cloud hosting offers better speed, uptime, and scalability compared to shared hosting. With Sixthstar Technologies, websites benefit from dedicated cloud resources, faster page loads, and no performance drops — even during traffic spikes.",
  },
  {
    question: "How do I choose the right cloud hosting provider in India?",
    answer:
      "Consider providers that offer:\n\n- Local data centers\n- 24/7 support\n- Transparent billing\n- Strong uptime SLAs\n- Scalable plans\n\nSixthstar Technologies ticks all these boxes and is known for reliable infrastructure and excellent customer service.",
  },
  {
    question: "What features should I look for in an Indian cloud hosting provider?",
    answer:
      "Top features include:\n\n- SSD-based storage\n- Auto-scaling and load balancing\n- Managed backups\n- DDoS protection\n- Control panel access\n\nSixthstar Technologies includes all of these in its cloud hosting packages, ensuring performance, flexibility, and security.",
  },
  {
    question: "Are there cloud hosting providers in India with data centers within the country?",
    answer:
      "Yes. Providers such as Sixthstar Technologies, AWS India, and Google Cloud Mumbai have local data centers. Sixthstar’s India-based infrastructure ensures faster performance, reduced latency, and data compliance under Indian regulations.",
  },
  {
    question: "Can I upgrade my cloud hosting plan easily with Indian providers?",
    answer:
      "Yes. With providers like Sixthstar Technologies, you can upgrade your resources instantly (CPU, RAM, storage) through a user-friendly control panel — no downtime or technical complexity required.",
  },
  {
    question: "Which cloud hosting providers in India offer money-back guarantees?",
    answer:
      "Sixthstar Technologies offers a money-back guarantee on its cloud hosting plans, giving you peace of mind while trying the service. This ensures zero financial risk if you're not fully satisfied within the specified period.",
  },
  {
    question: "How secure is cloud hosting with Indian providers?",
    answer:
      "Cloud hosting with providers like Sixthstar Technologies is highly secure. They implement end-to-end encryption, firewalls, malware detection, and routine security audits. Compliance with ISO and GDPR standards ensures your data remains safe and protected.",
  },
  {
    question: "What kind of support do Indian cloud hosting companies provide after purchase?",
    answer:
      "Support quality varies, but Sixthstar Technologies offers 24/7 technical support through live chat, email, and phone. Their team is known for fast resolution times and proactive assistance, which is critical for business continuity.",
  },
  {
    question: "Can I migrate my website from another host to an Indian cloud provider without downtime?",
    answer:
      "Yes. Sixthstar Technologies offers free website migration with zero downtime. Their expert support team ensures your files, databases, and DNS are transitioned smoothly — with no disruption to your live site.",
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

const Faq4 = () => {
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

export default Faq4;
