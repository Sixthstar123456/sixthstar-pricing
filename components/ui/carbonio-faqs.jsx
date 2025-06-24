import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
  {
    question: "What is Carbonio Mail?",
    answer:
      "Carbonio is a modern, open-source email and collaboration suite developed by Zextras. It offers secure email, calendar, contacts, document sharing, video calls, and chat—all in one private digital workplace.",
  },
  {
    question: "Is Carbonio suitable for business use?",
    answer:
      "Absolutely. Carbonio is built for businesses that need a secure, private, and scalable communication platform. It’s a great alternative to cloud-based services like Google Workspace or Microsoft 365, especially for companies that value data ownership.",
  },
  {
    question: "What are the key features of Carbonio?",
    answer:
      "Carbonio includes email, calendars, contacts, file management, real-time chat, video conferencing, and team collaboration tools. It also provides admin controls, backup, and compliance features—all hosted on your own infrastructure.",
  },
  {
    question: "Is Carbonio an open-source platform?",
    answer:
      "Yes! Carbonio is open-source and community-driven. This means you can customize it, audit the code, and control where your data is stored—perfect for privacy-conscious organizations.",
  },
  {
    question: "How secure is Carbonio?",
    answer:
      "Carbonio is built with enterprise-grade security in mind. It offers end-to-end encryption, role-based access control, multi-factor authentication (MFA), and self-hosting—ensuring your business data stays private and protected.",
  },
  {
    question: "Can I host Carbonio on my own server?",
    answer:
      "Yes, Carbonio is self-hosted, giving you full control over your data and server resources. This is ideal for IT teams that prefer on-premise solutions over third-party cloud platforms.",
  },
  {
    question: "Does Carbonio support mobile and desktop access?",
    answer:
      "Definitely. You can access Carbonio through webmail, mobile browsers, or connect it with email clients via IMAP/POP and ActiveSync. It’s compatible with Android, iOS, and major desktop systems.",
  },
  {
    question: "How does Carbonio compare to Google Workspace or Microsoft 365?",
    answer:
      "While Google Workspace and Microsoft 365 are cloud-based, Carbonio offers similar features with complete data privacy and no vendor lock-in. It’s ideal for businesses wanting full control without recurring per-user licensing costs.",
  },
  {
    question: "Is Carbonio easy to manage for IT admins?",
    answer:
      "Yes, Carbonio includes a user-friendly admin console for managing users, storage, policies, and integrations. You also get CLI tools and APIs for automation and advanced control.",
  },
  {
    question: "Where can I get Carbonio support and services?",
    answer:
      "You can download Carbonio from the official Zextras website. For enterprise-grade support, installation, or managed Carbonio services, providers like SixthStar Technologies offer expert setup and 24/7 support.",
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

const Carboniofaqs = () => {
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

export default Carboniofaqs;
