import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
  {
    question: "What is a spam filter and how does it work?",
    answer:
      "A spam filter is an email security tool designed to detect and block unsolicited or harmful messages. It works by analyzing the content, sender, and metadata of incoming emails using rules, algorithms, and machine learning. Messages identified as spam are redirected to a junk folder or blocked entirely, helping keep your inbox safe and clutter-free.",
  },
  {
    question: "Why are spam filters important for business email security?",
    answer:
      "Spam filters play a critical role in business security by protecting email systems from phishing, malware, and fraudulent messages. They help prevent data breaches, ensure employee productivity, and maintain professional communication channels by filtering out unwanted or malicious content.",
  },
  {
    question: "How can I set up a spam filter for my domain email?",
    answer:
      "To set up a spam filter for your domain email, you can either use your email hosting provider’s built-in filtering or integrate a third-party spam filtering service. This typically involves updating your domain’s MX records to route email through the spam filter, which then scans messages before delivery to your inbox.",
  },
  {
    question: "Which is the best spam filter for small businesses?",
    answer:
      "For small businesses, a cloud-based spam filtering solution like ours offers enterprise-level protection with minimal management. Sixthstar's spam filter is scalable, cost-effective, and designed to protect organizations of all sizes.",
  },
  {
    question: "What features should I look for in a spam filtering service?",
    answer:
      "A reliable spam filtering solution should offer virus and malware scanning, real-time blacklists (RBL), heuristic filtering, content analysis, customizable rules, and quarantine management. Additional features like outbound email filtering, reporting, and user-level controls enhance effectiveness and flexibility.",
  },
  {
    question: "How do spam filters reduce phishing and malware attacks?",
    answer:
      "Spam filters help mitigate phishing and malware threats by analyzing emails for suspicious content, malicious links, spoofed sender addresses, and infected attachments. They automatically block or quarantine these threats, reducing the risk of security incidents and data loss within the organization.",
  },
  {
    question: "Can a spam filter block legitimate emails (false positives)?",
    answer:
      "Yes, legitimate emails can occasionally be flagged as spam, known as false positives. Most modern spam filters include tools to whitelist trusted senders and review quarantined messages. Regular monitoring and fine-tuning filter settings can significantly reduce the likelihood of false positives.",
  },
  {
    question: "Are there any free spam filter tools available?",
    answer:
      "While free tools like SpamAssassin exist, they often lack the precision and support businesses need. Sixthstar Technologies offers reliable and affordable spam filtering services tailored for professional use, ensuring better protection and less manual work.",
  },
  {
    question: "How do I improve the accuracy of my spam filter?",
    answer:
      "Improving accuracy involves regularly updating filter rules, training the filter on new threats, reviewing quarantined items, and whitelisting trusted contacts. Advanced solutions use machine learning and user feedback to adapt to evolving spam tactics and reduce both false positives and negatives.",
  },
  {
    question: "What’s the difference between incoming and outgoing spam filters?",
    answer:
      "Incoming spam filters scan emails received by your mail server to block harmful or unwanted content. Outgoing spam filters monitor emails sent from your domain to ensure your system isn’t compromised or sending spam, helping protect your IP reputation and prevent blacklisting.",
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

const SpamFaq4 = () => {
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

export default SpamFaq4;
