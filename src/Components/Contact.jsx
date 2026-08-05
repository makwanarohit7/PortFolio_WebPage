import React, { useState } from "react";
import { resumeData } from "../data/resumeData";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: resumeData.contact.email,
      href: `mailto:${resumeData.contact.email}`,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
      description: "Send an email for project inquiries or hiring",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: resumeData.contact.phone,
      href: `tel:${resumeData.contact.phone}`,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      description: "Available for calls & urgent inquiries",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: resumeData.contact.location,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
      description: "Ahmedabad, Gujarat, India (Open to Remote)",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitStatus(null), 4000);
    }, 1200);
  };

  return (
    <section
      name="contact"
      className="w-full min-h-screen bg-slate-950 py-24 text-white relative overflow-hidden"
    >
      {/* Radial Background Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-cyan-400 font-semibold text-xs tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Have a project in mind or interested in hiring a React Native developer with 2.5+ years experience? Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl border border-slate-800 flex items-start space-x-4 hover:border-cyan-500/40 transition-all group"
                >
                  <div className={`p-3.5 rounded-xl border ${info.color} text-xl group-hover:scale-110 transition-transform`}>
                    <info.icon />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                      {info.label}
                    </span>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="block text-base sm:text-lg font-bold text-white hover:text-cyan-400 transition-colors mt-0.5"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-base sm:text-lg font-bold text-white mt-0.5">
                        {info.value}
                      </p>
                    )}
                    <p className="text-xs text-slate-400 mt-1">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Availability Badge */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/30">
              <div className="flex items-center space-x-3 mb-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
                <h4 className="font-bold text-white text-base">
                  Available for Work
                </h4>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Open to full-time roles, contract opportunities, and mobile app consulting.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 animate-slide-in-right">
            <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              {submitStatus === "success" && (
                <div className="bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 p-4 rounded-xl mb-6 flex items-center space-x-3 text-sm animate-fade-in">
                  <FaCheckCircle className="text-xl flex-shrink-0 text-emerald-400" />
                  <span>
                    Thank you! Your message has been sent successfully. I will get back to you shortly!
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    placeholder="Tell me about your mobile app project or inquiry..."
                    className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
