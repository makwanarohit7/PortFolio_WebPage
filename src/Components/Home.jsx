import React from "react";
import ProfileImage from "../assets/ProfileImage.jpeg";
import { MdOutlineKeyboardArrowRight, MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaMobileAlt, FaBriefcase, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-scroll";
import { resumeData } from "../data/resumeData";

const Home = () => {
  return (
    <section
      name="home"
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950"
    >
      {/* Dynamic Radial Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Animated Particles */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${(i * 7 + 3) % 100}%`,
              animationDelay: `${(i * 0.7) % 5}s`,
              animationDuration: `${7 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6 animate-fade-in-up">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold w-fit mx-auto lg:mx-0 shadow-lg shadow-cyan-950/40">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Available for Mobile & Full-Stack Projects</span>
            </div>

            {/* Main Greeting & Name */}
            <div>
              <h2 className="text-slate-400 font-medium text-lg sm:text-xl tracking-wide mb-1">
                Hello, I am
              </h2>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-2">
                <span className="text-gradient">{resumeData.name}</span>
              </h1>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-2">
                <span className="text-2xl sm:text-3xl font-bold text-slate-200">
                  {resumeData.title}
                </span>
                <span className="px-3 py-1 text-xs font-bold rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  {resumeData.experienceYears} Years Exp
                </span>
              </div>
            </div>

            {/* Punchy Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Specialized in building high-performance, cross-platform mobile apps for Android & iOS. Currently crafting enterprise solutions at{" "}
              <span className="text-cyan-400 font-semibold border-b border-cyan-500/40">
                Alpha ERP Solutions Pvt. Ltd.
              </span>{" "}
              with React Native, Node.js, NestJS, Express.js, .NET, and PostgreSQL.
            </p>

            {/* Quick Feature Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="flex items-center space-x-2 text-xs font-medium text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <FaCheckCircle className="text-cyan-400" />
                <span>React Native CLI & Expo</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <FaCheckCircle className="text-cyan-400" />
                <span>Full Stack APIs (.NET / NestJS)</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <FaCheckCircle className="text-cyan-400" />
                <span>Offline SQLite Sync</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                to="projects"
                smooth
                duration={500}
                className="group w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold flex items-center justify-center space-x-2 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <span>Explore Projects</span>
                <MdOutlineKeyboardArrowRight className="text-2xl group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`mailto:${resumeData.contact.email}`}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl glass-pill hover:bg-slate-800 text-slate-200 font-semibold flex items-center justify-center space-x-2 border border-slate-700 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300"
              >
                <MdEmail className="text-xl text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center justify-center lg:justify-start space-x-5 pt-4">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Connect:
              </span>
              <a
                href={resumeData.onlineProfiles[0].url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:scale-110 transition-all duration-300 shadow-md"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={resumeData.onlineProfiles[1].url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-600 hover:scale-110 transition-all duration-300 shadow-md"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>

          {/* Right Profile Image Frame & Badges */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96">
              
              {/* Spinning Decorative Gradient Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 blur-md opacity-70 animate-spin-slow pointer-events-none" />
              <div className="absolute inset-2 rounded-full bg-slate-950" />
              
              {/* Profile Image */}
              <div className="relative w-full h-full p-3 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={ProfileImage}
                  alt={resumeData.name}
                  className="w-full h-full object-cover rounded-full border-2 border-cyan-400/40 shadow-2xl scale-[1.3] hover:scale-[1.38] transition-transform duration-500"
                />
              </div>

              {/* Floating Badge 1: Experience */}
              <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-4 glass-card px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl flex items-center space-x-2.5 sm:space-x-3 shadow-xl border border-slate-700/80 animate-float">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs sm:text-sm">
                  <FaBriefcase />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Experience</div>
                  <div className="text-xs sm:text-sm font-bold text-white">2.5+ Years</div>
                </div>
              </div>

              {/* Floating Badge 2: Tech Stack */}
              <div
                className="absolute top-2 sm:top-4 -right-1 sm:-right-4 glass-card px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl flex items-center space-x-2.5 sm:space-x-3 shadow-xl border border-slate-700/80 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs sm:text-sm">
                  <FaMobileAlt />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Mobile Dev</div>
                  <div className="text-xs sm:text-sm font-bold text-white">React Native</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
