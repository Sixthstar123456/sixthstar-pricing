import { useState, useEffect } from "react";
import { FiUser, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiErrorCircle } from "react-icons/bi";

const ContactFormSelfManaged = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.fullName || formData.fullName.length < 2) {
      tempErrors.fullName = "Name must be at least 2 characters";
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (formData.phone && !/^[0-9+\-\s()]*$/.test(formData.phone)) {
      tempErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.subject) {
      tempErrors.subject = "Please select a subject";
    }
    if (!formData.message || formData.message.length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
    }
    if (formData.message.length > 500) {
      tempErrors.message = "Message cannot exceed 500 characters";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      } catch (error) {
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    }
    
  };

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8 perspective-1000">
      <div className="max-w-7xl mx-auto transform hover:scale-[1.01] transition-transform duration-300">
        <div className="bg-white rounded-xl  overflow-hidden transform hover:translate-y-[-4px] transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Updated: Enhanced left column with 3D gradient and hover effects */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-8 text-white flex flex-col justify-center transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
              {/* Added: Abstract background shapes */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
              <h2 className="text-4xl font-bold mb-6 relative z-10 drop-shadow-lg">Get in Touch</h2>
              <p className="text-blue-100 mb-8 relative z-10 text-lg">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center space-x-4 p-4 bg-blue-600/30 rounded-lg backdrop-blur-sm transform hover:translate-x-2 transition-transform duration-300">
                  <FiMail className="w-6 h-6" />
                  <span>sales@sixthstar.in</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-600/30 rounded-lg backdrop-blur-sm transform hover:translate-x-2 transition-transform duration-300">
                  <FiPhone className="w-6 h-6" />
                  <span>+91 9383996666</span>
                </div>
              </div>
            </div>

            {/* Updated: Enhanced form container with subtle 3D effects */}
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Updated: Enhanced input fields with 3D effects */}
                <div className="transform transition-all duration-300 hover:scale-[1.02]">
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
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
                      className={`block w-full pl-10 pr-3 py-2 border ${errors.fullName ? 'border-red-300' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-md`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
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
                      className={`block w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-md`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number (Optional)
                  </label>
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
                      className={`block w-full pl-10 pr-3 py-2 border ${errors.phone ? 'border-red-300' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-md`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 bg-white">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`mt-1 bg-white block w-full py-2 px-3 text-black border ${errors.subject ? 'border-red-300' : 'border-gray-300'} rounded-lg  text-black shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-md`}
                  >
                    <option value="" className="text-black">Select Your Services</option>
                    <option value="other" className="text-black"> Cloud Linux Hosting</option>
                    <option value="support" className="text-black">Domain + Cloud Linux  Hosting</option>
                    <option value="other" className="text-black">Hybrid Cloud Linux Hosting</option>
                    <option value="other" className="text-black">Self Managed Cloud Linux Hosting</option>
                    <option value="general" className="text-black">fully Managed Cloud Linux Hosting</option>
                    <option value="support" className="text-black">Customized Cloud Linux Hosting</option>
                   
                    
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-black text-sm text-red-600">{errors.subject}</p>
                  )}
                </div>

          

                {/* Updated: Enhanced submit button with 3D effects */}
                <div className="transform transition-all duration-300 hover:scale-[1.02]">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-xl hover:transform hover:translate-y-[-2px]`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : 'Request Now'}
                  </button>
                </div>

                {submitStatus && (
                  <div className={`mt-4 p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-[1.02] ${submitStatus === 'success' ? 'bg-green-50' : 'bg-red-50'}`}>
                    <div className="flex items-center">
                      {submitStatus === 'success' ? (
                        <>
                          <IoMdCheckmarkCircleOutline className="text-green-400 w-5 h-5" />
                          <p className="ml-3 text-green-800">Message sent successfully!</p>
                        </>
                      ) : (
                        <>
                          <BiErrorCircle className="text-red-400 w-5 h-5" />
                          <p className="ml-3 text-red-800">Failed to send message. Please try again.</p>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSelfManaged;