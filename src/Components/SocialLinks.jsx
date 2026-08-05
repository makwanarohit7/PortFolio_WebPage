import React from "react";
import { resumeData } from "../data/resumeData";
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

const SocialLinks = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner CTA Box */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl mb-16 border border-slate-800 text-center relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Build Your Next <span className="text-gradient">Mobile App</span>?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you need a high-performance React Native app, full-stack API backend, or offline data synchronization, let's collaborate to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={`mailto:${resumeData.contact.email}?subject=Project%20Inquiry`}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/20 hover:scale-105 transition-all"
              >
                Start a Conversation
              </a>
              <a
                href={resumeData.onlineProfiles[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl glass-pill hover:bg-slate-800 text-slate-200 font-bold text-sm border border-slate-700 hover:border-cyan-400/50 hover:text-cyan-300 transition-all"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Details */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-b border-slate-800/80">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-gradient">
              {resumeData.name}
            </h4>
            <p className="text-xs text-slate-400 mt-1 flex items-center justify-center md:justify-start">
              © {currentYear} {resumeData.name}. Crafted with
              <FaHeart className="text-rose-500 mx-1.5 animate-pulse" /> using React & Tailwind CSS.
            </p>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center space-x-4">
            <a
              href={resumeData.onlineProfiles[0].url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:scale-110 transition-all"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={resumeData.onlineProfiles[1].url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-600 hover:scale-110 transition-all"
            >
              <FaGithub size={18} />
            </a>
          </div>

          {/* Back To Top Scroll */}
          <div>
            <Link
              to="home"
              smooth
              duration={500}
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 cursor-pointer shadow-lg"
              title="Back to Top"
            >
              <FaArrowUp size={16} />
            </Link>
          </div>

        </div>

        {/* Sub-footer Note */}
        <div className="text-center pt-6 text-xs text-slate-500">
          React Native Developer • React.js • Node.js • NestJS • Express.js • .NET • PostgreSQL • Alpha ERP Solutions Pvt. Ltd.
        </div>

      </div>
    </footer>
  );
};

export default SocialLinks;
