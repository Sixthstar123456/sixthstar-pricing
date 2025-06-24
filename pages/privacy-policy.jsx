"use client"
import Footer from "../components/Footer"
export default function PrivacyPolicy() {
  return (
    <div className=" bg-gray-50 text-gray-800 pt-40"> {/* <-- pt-28 adds space below fixed navbar */}

      {/* Banner */}
      <div className=" mt-100 bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-lg">Your privacy is our priority</p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-6">
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p>
            This Privacy Policy is crafted with a commitment to protect and respect our Clients and company privacy. Below are details of our policy regarding the collection, use, and disclosure of your personal information. We urge you to read this policy carefully to understand how we handle your personal information.
          </p>

          <h2 className="text-2xl font-semibold">Information Collection</h2>
          <p><strong>Personal Information:</strong> The personal information we collect is necessary for the services we provide. This includes your name, address, contact numbers, email addresses, payment method details, and domain registration information. Personal information is used solely to fulfill your service requests. For transactions, your payment information is securely processed and transferred to card providers to enhance security.</p>
          <p><strong>Social Media:</strong> Our website features social media tools (e.g., Facebook “like” button) that may collect your IP address and which page you are visiting on our site. These features are hosted by us and are governed by the privacy policy of the company providing them.</p>

          <h2 className="text-2xl font-semibold">Use of Information</h2>
          <p><strong>Service Delivery:</strong> Your personal information helps us tailor and improve the services we offer you. It assists in understanding your needs in the market, promoting relevant services, and providing customer support.</p>
          <p><strong>Marketing:</strong> We use your information to send updates about new products and services and to create aggregated profiles for advertising purposes. We take extensive measures to protect these profiles from unauthorized access.</p>
          <p><strong>Log Files:</strong> We use log files to track website visits and gather demographic information via IP addresses. These logs do not capture personal information but help us understand user interests and enhance service quality.</p>

          <h2 className="text-2xl font-semibold">Disclosure of Information</h2>
          <p><strong>Partners:</strong> We only share your personal information with trusted partners and vendors who assist in delivering our services. Aggregate non-identifying information may be shared with other third parties under strict confidentiality agreements.</p>
          <p><strong>Service Providers:</strong> Information may be shared with third parties essential to our service delivery, ensuring they uphold confidentiality and do not use the information for unauthorized purposes.</p>
          <p><strong>Advertisements:</strong> We do not share personal information with advertisers. However, we may use aggregated demographic information to target advertisements more effectively.</p>
          <p><strong>Domain Registrations:</strong> Necessary details are disclosed to ICANN for domain registration. You will be notified about this as “WHOIS” information, though we cannot control its public accessibility.</p>

          <h2 className="text-2xl font-semibold">Legal Disclosures</h2>
          <p>We may disclose your information if required by law or if necessary to protect our rights or comply with a judicial proceeding, court order, or legal process.</p>

          <h2 className="text-2xl font-semibold">Security</h2>
          <p>Your data is protected under strict security measures. All sensitive information is encrypted using SSL technology, ensuring safe storage and transmission.</p>

          <h2 className="text-2xl font-semibold">Reseller Information</h2>
          <p><strong>Data Handling:</strong> Information collected from our resellers’ clients is managed by the resellers unless otherwise required by law.</p>
          <p><strong>Client Data:</strong> We retain this information as long as it is necessary for providing services or for legal compliance.</p>

          <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
          <p>We reserve the right to modify this policy at any time. Any changes will be notified in advance, and we encourage regular review of this policy to stay informed.</p>

          <h2 className="text-2xl font-semibold">Payment Issues</h2>
          <p>Outstanding invoices will lead to service suspension or administrative access modification until payment resolution.</p>

          <h2 className="text-2xl font-semibold">Data Protection for Indian Clients</h2>
          <p><strong>Regulatory Compliance:</strong> For our Indian clients, we handle personal data in accordance with India’s IT Act and the associated rules. This includes mandatory compliance with reasonable security practices and procedures, ensuring the protection and confidentiality of your personal data.</p>
          <p><strong>Global Compliance:</strong> For clients outside India, we handle personal data in accordance with local regulations and international standards, such as the GDPR for European clients. We ensure that data transfers across borders comply with legal requirements and maintain data protection and privacy across jurisdictions.</p>
        </section>
      </div>
      <Footer/>
    </div>
    
  )
}
