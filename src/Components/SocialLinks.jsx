import React from "react";
import { resumeData } from "../data/resumeData";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="bg-black w-full py-8 border-t border-gray-800">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Call to Action */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h3 className="text-2xl font-semibold text-white mb-4">Interested in my work?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always excited to hear about new opportunities and interesting projects. 
            Let's discuss how we can collaborate on your next project!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${resumeData.contact.email}?subject=Project%20Inquiry`}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start a Project
            </a>
            <a
              href={resumeData.onlineProfiles[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p className="flex items-center justify-center md:justify-start">
              © 2024 {resumeData.name}. All rights reserved.
              <span className="mx-2">Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span className="ml-2">using React</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {resumeData.onlineProfiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 hover:scale-110 transition-all duration-300 text-xl ${
                  profile.platform === "LinkedIn" ? "hover:text-blue-500" :
                  profile.platform === "GitHub" ? "hover:text-white" :
                  profile.platform === "Twitter" ? "hover:text-blue-400" :
                  "hover:text-pink-500"
                }`}
                title={`Follow me on ${profile.platform}`}
              >
                {React.createElement(profile.icon)}
              </a>
            ))}
          </div>

          {/* Quick Contact */}
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            <a
              href={`mailto:${resumeData.contact.email}`}
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              {resumeData.contact.email}
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs">
            Available for freelance opportunities and full-time positions
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
