import React from "react";
import { resumeData } from "../data/resumeData";
import ProfileImage from "../assets/ProfileImage.jpeg";
import { FaUserCheck, FaBriefcase, FaRocket, FaDatabase, FaMobileAlt } from "react-icons/fa";

const About = () => {
  const highlights = [
    {
      icon: FaBriefcase,
      title: "2.5+ Years Experience",
      desc: "Proven track record developing production cross-platform apps for iOS & Android.",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    },
    {
      icon: FaMobileAlt,
      title: "Alpha ERP Solutions",
      desc: "Building flagship mobile ERP, Payroll, and JSoft Extreme enterprise products.",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    },
    {
      icon: FaDatabase,
      title: "Full-Stack & Databases",
      desc: "Proficient in React Native, Node.js, NestJS, Express.js, .NET, PostgreSQL, and MongoDB.",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    },
    {
      icon: FaRocket,
      title: "Performance & SQLite",
      desc: "Offline-first sync architectures, Native Modules integration, and memory optimization.",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    },
  ];

  return (
    <section
      name="about"
      className="w-full min-h-screen bg-slate-950 py-24 text-white relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-cyan-400 font-semibold text-xs tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 inline-block mb-3">
            Get To Know Me
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Passionate React Native Developer dedicated to engineering fast, clean, and scalable mobile and web applications.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Card */}
          <div className="lg:col-span-5 animate-slide-in-left">
            <div className="glass-card p-4 sm:p-6 rounded-3xl relative overflow-hidden shadow-2xl border border-slate-800">
              <div className="relative rounded-2xl overflow-hidden group">
                <img
                  src={ProfileImage}
                  alt="Rohit Makwana About"
                  className="w-full h-80 sm:h-96 object-cover object-[center_75%] rounded-2xl scale-[1.2] group-hover:scale-[1.28] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80 shadow-lg">
                  <div className="flex items-center space-x-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
                    <FaUserCheck />
                    <span>Active Engineer</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {resumeData.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    React Native Developer @ Alpha ERP Solutions Pvt. Ltd.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Details & Highlights */}
          <div className="lg:col-span-7 space-y-8 animate-slide-in-right">
            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4 flex items-center space-x-3">
                <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
                <span>Professional Summary</span>
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80">
                {resumeData.summary}
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card-interactive p-5 rounded-2xl border flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl border ${item.color}`}>
                      <item.icon className="text-lg" />
                    </div>
                    <h4 className="font-bold text-white text-sm sm:text-base">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
