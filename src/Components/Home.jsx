import React from "react";
import HeroImage from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight, MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaPlay } from "react-icons/fa";
import { Link } from "react-scroll";
import { resumeData } from "../data/resumeData";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row relative z-10">
        <div className="flex flex-col justify-center h-full flex-1">
          <div className="animate-fade-in-up">
            {/* Greeting */}
            <div className="mb-4">
              <span className="text-cyan-400 font-medium text-lg">Hello, I'm</span>
            </div>
            
            {/* Name */}
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {resumeData.name}
              </span>
            </h1>
            
            {/* Title */}
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-300 mb-6">
              {resumeData.title}
            </h2>
            
            {/* Description - Simplified */}
            <p className="text-gray-400 py-5 max-w-md text-lg leading-relaxed">
              Passionate React Native Developer specializing in cross-platform mobile development. 
              I excel at building mobile applications that deliver exceptional user experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="projects"
                smooth
                duration={500}
                className="group text-white w-fit px-8 py-4 flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FaPlay className="mr-2" />
                View Projects
                <span className="group-hover:rotate-90 duration-300 ml-2">
                  <MdOutlineKeyboardArrowRight size={25} />
                </span>
              </Link>
              
              <a
                href={`mailto:${resumeData.contact.email}`}
                className="group text-white w-fit px-8 py-4 flex items-center rounded-lg border-2 border-cyan-500 hover:bg-cyan-500 cursor-pointer transition-all duration-300"
              >
                <MdEmail className="mr-2" />
                Hire Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href={resumeData.onlineProfiles[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href={resumeData.onlineProfiles[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
            
            {/* Profile image */}
            <img
              src={HeroImage}
              alt="Rohit Makwana"
              className="relative rounded-full mx-auto w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-cyan-500/30 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
      
    
    </div>
  );
};

export default Home;
