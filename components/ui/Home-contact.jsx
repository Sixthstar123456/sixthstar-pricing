import { useState } from "react";
import { FiUser, FiMail, FiPhone } from "react-icons/fi";
import { Contactusform1 } from "../../lib/api";


const initState = { values: {}, isLoading: false };

export default function HomeContactus() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    services: ''
  });

  const [state, setState] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { fullName, phone, email, services } = formData;

    if (!fullName || !email || !phone || !services) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await Contactusform1(formData);
      alert('Form submitted successfully!');
      setFormData({ fullName: '', phone: '', email: '', services: '' });
      setState(initState);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again later.');
    } finally {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 perspective-1000">
      <div className="max-w-7xl mx-auto transform hover:scale-[1.01] transition-transform duration-300">
        <div className="bg-white rounded-xl overflow-hidden transform hover:translate-y-[-4px] transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-8 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
              <h2 className="text-4xl font-bold mb-6 relative z-10 drop-shadow-lg">Get in Touch</h2>
              <p className="text-blue-100 mb-8 relative z-10 text-lg">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center space-x-4 p-4 bg-blue-600/30 rounded-lg backdrop-blur-sm">
                  <FiMail className="w-6 h-6" />
                  <span>sales@sixthstar.in</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-600/30 rounded-lg backdrop-blur-sm">
                  <FiPhone className="w-6 h-6" />
                  <span>+91 9383996666</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
              <form className="space-y-6" onSubmit={onSubmit}>
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Logesh"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="logesh@example.com"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiPhone className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+91 9876787656"
                    />
                  </div>
                </div>

                {/* Services */}
                <div>
                  <label htmlFor="services" className="block text-sm font-medium text-gray-700">Subject *</label>
                  <select
                    id="services"
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 px-3 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white"
                  >
                    <option value="">Select Your Services</option>
                    <option className="text-black" value="domains">Domains</option>
                    <option className="text-black"  value="servers">Servers</option>
                    <option className="text-black"  value="hosting">Hosting</option>
                    <option className="text-black"  value="spam_filter">Spam Filter</option>
                    <option className="text-black"  value="ssl_certificate">SSL Certificate</option>
                    <option className="text-black"  value="email_solutions">Email Solutions</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn bg-white text-black border hover:bg-black hover:text-white px-4 py-2 rounded"
                    disabled={state.isLoading}
                  >
                    {state.isLoading ? 'Sending...' : 'Get a quote'}
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our terms and privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
