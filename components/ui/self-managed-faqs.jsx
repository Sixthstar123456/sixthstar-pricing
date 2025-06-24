import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
    {
        isActive: true,
        question: "What is a Self-Managed Windows Cloud Server?",
        answer:
            "A self-managed Windows cloud server is basically a virtual server running Windows OS that you manage entirely on your own. You get full administrative control—just like having your own physical server, but it’s hosted in the cloud. So, you're responsible for everything from installing software and configuring settings to managing security and updates. It’s great for developers or IT teams who want flexibility without the overhead of physical hardware.",
    },
    {
        isActive: false,
        question: "Who is Easy Frontend for?",
        answer:
            "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
    },
    {
        isActive: false,
        question: "How do I set up a Self-Managed Windows Cloud Server?",
        answer:
            "It’s not as complex as it sounds! First, you choose a cloud provider and select a Windows server instance. After that, you configure the server specs—CPU, RAM, storage, etc.—and launch the instance. Once it’s live, you can remote into the server, install any software you need, set up security (like firewalls and antivirus), and you’re good to go. Of course, it helps to have some technical know-how to manage things efficiently.",
    },
    {
        isActive: false,
        question: "What are the benefits of using a Self-Managed Windows Cloud Server?",
        answer:
            "The biggest perk? Total control. You decide how everything works—what apps to install, how security is handled, when to reboot, and more. It’s also more cost-effective for tech-savvy users since you’re not paying extra for management services. Plus, with the cloud, you get scalability—add more resources as your traffic or data needs grow. Just remember, with great power comes great responsibility!",
    },
    {
        isActive: false,
        question: "Is a Self-Managed Windows Server better than a Managed one?",
        answer:
            "That really depends on your needs. If you have the technical skills and want full customization, a self-managed server is awesome. But if you prefer someone else to handle updates, security patches, and backups, a managed server might be a better fit. Think of it like driving your own car vs hiring a driver—both get you where you need to go, but the experience is different.",
    },
    {
        isActive: false,
        question: "What is Hyper-V?",
        answer:
            "Hyper-V is a hypervisor-based virtualization technology developed by Microsoft. It allows users to create and manage multiple virtual machines (VMs) on a single physical server or workstation. Each virtual machine operates as an independent system, running its own operating system and applications, while sharing the underlying hardware resources of the host machine.",
    },
    {
        isActive: false,
        question: "How does a self-managed Windows cloud server differ from a managed one?",
        answer:
            "With self-managed servers, you handle all server tasks yourself, while managed servers include professional support and maintenance handled by the provider.",
    },
       {
        isActive: false,
        question: "Can I scale my self-managed Windows cloud server easily as my needs grow?",
        answer:
            " Yes, most cloud providers let you scale CPU, RAM, and storage on demand, but you’ll be responsible for configuring the upgrades.",
    },
       {
        isActive: false,
        question: "What security responsibilities do I have with a self-managed Windows cloud server?",
        answer:
            " You must manage firewall settings, antivirus, updates, and monitor for threats since the provider does not handle security in self-managed plans.",
    },
       {
        isActive: false,
        question: "Is technical support available for self-managed Windows cloud servers?",
        answer:
            " Support is usually limited to hardware and network issues; server management and software troubleshooting are your responsibility.",
    },
    {
        isActive: false,
        question: "Can I install custom applications on a self-managed Windows cloud server?",
        answer:
            " Yes, you have full administrator access to install and configure any Windows-compatible software or applications you need.",
    },
   
    
];

const FaqItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(faq.isActive);

    const toggleFaq = () => setIsOpen(!isOpen);

    return (
        <div className={`${isOpen && "active"} rounded-lg mt-6`}>
            <a
                href="#!"
                className="btn p-2 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer"
                onClick={toggleFaq}
            >
                <span>{faq.question}</span>
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </a>
            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } p-2 lg:p-2 bg-white  rounded-xl`}
            >
                <p className="opacity-100">{faq.answer}</p>
            </div>
        </div>
    );
};

FaqItem.propTypes = {
    faq: PropTypes.object.isRequired,
};

const SelfManagedFaq4 = () => {
    return (
        <section className="ezy__faq4 light py-14 md:py-10 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
            <div className="container px-16 md:px-8 lg:px-28">
                <div className="grid grid-cols-12 justify-center md:mb-6">
                    <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
                        <h2 className="font-bold text-[25px] md:text-[45px] leading-none mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="">
                            It’s easier to reach your savings goals when you have the right
                            savings account. Take a look and find the right one for you!
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-0 md:gap-6">
                    <div className="col-span-12 md:col-span-8 md:col-start-3">
                        {faqList.slice(0, 5).map((faq, i) => (
                            <FaqItem faq={faq} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default SelfManagedFaq4;