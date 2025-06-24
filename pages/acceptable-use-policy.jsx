"use client"
import Footer from "../components/Footer"

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 text-gray-800 pt-40">
      
      {/* Banner */}
      <div className="mt-100 bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Acceptable Use Policy</h1>
        <p className="mt-2 text-lg">Clear guidelines to keep our services safe and secure</p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-6">
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Prohibited Uses</h2>

          <h3 className="text-xl font-semibold">1. Unlawful Activities</h3>
          <p>Our services must not be used for any illegal activities. This includes, but is not limited to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Publishing or sharing content that is unlawful, fraudulent, or harmful to others.</li>
            <li>Distributing malware or harmful software.</li>
            <li>Illegal distribution of controlled substances or selling medications without a prescription.</li>
            <li>Conducting or facilitating gambling.</li>
            <li>Sharing content harmful to minors, including child pornography, which will result in immediate termination and reporting to law enforcement.</li>
            <li>Operating sites related to FOREX, E-Gold Exchange, Second Life, pyramid schemes, or high-yield interest programs (HYIP).</li>
            <li>Engaging in phishing, identity theft, or money laundering.</li>
            <li>Selling weapons or ammunition.</li>
            <li>Violating intellectual property rights of others. Incidents can be reported via our ‘Report Abuse’ form.</li>
          </ul>

          <h3 className="text-xl font-semibold">Network Abuse</h3>
          <p>Unauthorized access to or attacks on networks, running unauthorized file-sharing services, or using our services for network scanning or monitoring tools that interfere with or harvest data without consent is prohibited.</p>

          <h3 className="text-xl font-semibold">System Performance</h3>
          <p>Overuse of system resources which degrades performance for other customers is not allowed. This includes running scripts or processes that adversely affect our network.</p>

          <h3 className="text-xl font-semibold">Adult Content</h3>
          <p>Hosting adult content without proper legal authorization is prohibited.</p>

          <h3 className="text-xl font-semibold">Data Storage</h3>
          <p>Upon account termination or service cancellation with or without prior notice, all data will be permanently deleted. We are responsible solely for hosting your website and do not retain any backups of your data. We possess the full right to erase or delete any backups from your hosting account at any time.</p>

          <h2 className="text-2xl font-semibold">2. No Spam Policy</h2>
          <p>You may not use our services to send bulk unsolicited messages. We enforce a zero-tolerance spam policy. Unauthorized use of our services for transmission of spam messages, including those sent via email, fax, or other forms of communication, will result in immediate account termination.</p>

          <h2 className="text-2xl font-semibold">3. Defamation and Objectionable Content</h2>
          <p>We do not monitor or censor content uploaded by users but reserve the right to remove or disable access to any content that is deemed objectionable or harmful at our discretion. Users are encouraged to maintain respectful and lawful interactions.</p>

          <h2 className="text-2xl font-semibold">4. Enforcement</h2>
          <p><strong>Reseller Accounts:</strong> Violations by users within reseller accounts will be notified to the reseller for resolution. Continuous violations will result in termination of the reseller account.</p>
          <p><strong>Direct Customers:</strong> Direct violations of this policy will lead to service termination and possible legal action. We reserve the right to enforce or waive any part of this policy at our sole discretion.</p>

          <h2 className="text-2xl font-semibold">5. Invoice and Payments</h2>
          <p>If the customer has not paid the invoice within the given due date, we have full authority to suspend the server or block the entire access and will terminate the current and all previously existing services without giving any prior notification. No new services or other products will be provided until the pending payment is cleared. In such cases, no amount will be refunded under any circumstances.</p>
        </section>
      </div>
      
      <Footer/>
    </div>
  )
}
