import React, { useState } from "react";
import { resumeData } from "../data/resumeData";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: resumeData.contact.email,
      href: `mailto:${resumeData.contact.email}`,
      color: "text-red-400",
      description: "Send me an email anytime"
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: resumeData.contact.phone,
      href: `tel:${resumeData.contact.phone}`,
      color: "text-green-400",
      description: "Call me for urgent matters"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: resumeData.contact.location,
      color: "text-blue-400",
      description: "Based in Ahmedabad, Gujarat"
    },
  ];

  const socialLinks = resumeData.onlineProfiles;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black p-2 text-white"
    >
      <div className="flex flex-col p-2 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-4 animate-fade-in-up">
          <p className="text-2xl sm:text-3xl font-bold inline border-b-4 border-cyan-500">
            Get In Touch
          </p>
          <p className="py-3 text-gray-300">Let's discuss your next project or just say hello!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-left">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-3 bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-cyan-500/50"
                  >
                    <div className={`text-xl sm:text-2xl ${info.color} mt-1`}>
                      <info.icon />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-400 mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm sm:text-base font-medium">{info.value}</p>
                      )}
                      <p className="text-gray-400 text-xs mt-1">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-3">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xl sm:text-2xl hover:scale-110 transition-transform duration-300 ${
                      social.platform === "LinkedIn" ? "text-blue-500 hover:text-blue-400" :
                      social.platform === "GitHub" ? "text-gray-400 hover:text-white" :
                      social.platform === "Twitter" ? "text-blue-400 hover:text-blue-300" :
                      "text-pink-500 hover:text-pink-400"
                    }`}
                    title={social.platform}
                  >
                    {React.createElement(social.icon)}
                  </a>
                ))}
              </div>
              <p className="text-gray-400 text-xs mt-2">
                Connect with me on social media for updates and insights
              </p>
            </div>

            
          </div>

          {/* Contact Form */}
          <div className="space-y-4 animate-slide-in-right">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4">
                Send Message
              </h3>
              
              {submitStatus === "success" && (
                <div className="bg-green-500/20 border border-green-500/50 text-green-400 p-3 rounded-lg mb-4">
                  Thank you! Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 text-white transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 text-white transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-gray-300 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 text-white transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 text-white resize-none transition-all duration-300"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
