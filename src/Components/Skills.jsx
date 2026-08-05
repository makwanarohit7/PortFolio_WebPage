import React, { useState } from "react";
import {
  SiPostgresql,
  SiNestjs,
  SiExpress,
  SiDotnet,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiGit,
  SiPostman
} from "react-icons/si";
import { FaMobileAlt, FaDatabase, FaServer, FaCode, FaTools } from "react-icons/fa";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { name: "All", icon: FaCode },
    { name: "Mobile", icon: FaMobileAlt },
    { name: "Frontend", icon: FaCode },
    { name: "Backend", icon: FaServer },
    { name: "Databases", icon: FaDatabase },
    { name: "Tools", icon: FaTools },
  ];

  const skillList = [
    // Mobile
    {
      name: "React Native",
      category: "Mobile",
      icon: SiReact,
      color: "text-cyan-400",
      bgHover: "hover:border-cyan-400/60 hover:shadow-cyan-500/20",
      level: "Advanced",
      badge: "Primary"
    },
    // Backend
    {
      name: "Node.js",
      category: "Backend",
      icon: SiNodedotjs,
      color: "text-emerald-400",
      bgHover: "hover:border-emerald-400/60 hover:shadow-emerald-500/20",
      level: "Advanced"
    },
    {
      name: "Express.js",
      category: "Backend",
      icon: SiExpress,
      color: "text-slate-100",
      bgHover: "hover:border-slate-300/60 hover:shadow-slate-400/20",
      level: "Proficient",
      badge: "New"
    },
    {
      name: "NestJS",
      category: "Backend",
      icon: SiNestjs,
      color: "text-rose-500",
      bgHover: "hover:border-rose-500/60 hover:shadow-rose-500/20",
      level: "Proficient",
      badge: "New"
    },
    {
      name: ".NET",
      category: "Backend",
      icon: SiDotnet,
      color: "text-purple-400",
      bgHover: "hover:border-purple-400/60 hover:shadow-purple-500/20",
      level: "Proficient",
      badge: "New"
    },
    // Databases
    {
      name: "PostgreSQL",
      category: "Databases",
      icon: SiPostgresql,
      color: "text-blue-400",
      bgHover: "hover:border-blue-400/60 hover:shadow-blue-500/20",
      level: "Proficient",
      badge: "New"
    },
    {
      name: "MongoDB",
      category: "Databases",
      icon: SiMongodb,
      color: "text-green-500",
      bgHover: "hover:border-green-500/60 hover:shadow-green-500/20",
      level: "Proficient"
    },
    {
      name: "MySQL",
      category: "Databases",
      icon: SiMysql,
      color: "text-amber-400",
      bgHover: "hover:border-amber-400/60 hover:shadow-amber-500/20",
      level: "Proficient"
    },
    {
      name: "Firebase",
      category: "Databases",
      icon: SiFirebase,
      color: "text-amber-500",
      bgHover: "hover:border-amber-500/60 hover:shadow-amber-500/20",
      level: "Proficient"
    },
    // Frontend
    {
      name: "React.js",
      category: "Frontend",
      icon: SiReact,
      color: "text-cyan-400",
      bgHover: "hover:border-cyan-400/60 hover:shadow-cyan-500/20",
      level: "Advanced"
    },
    {
      name: "Next.js",
      category: "Frontend",
      icon: SiNextdotjs,
      color: "text-slate-100",
      bgHover: "hover:border-slate-300/60 hover:shadow-slate-400/20",
      level: "Proficient"
    },
    {
      name: "TypeScript",
      category: "Frontend",
      icon: SiTypescript,
      color: "text-blue-500",
      bgHover: "hover:border-blue-500/60 hover:shadow-blue-500/20",
      level: "Proficient"
    },
    {
      name: "JavaScript",
      category: "Frontend",
      icon: SiJavascript,
      color: "text-yellow-400",
      bgHover: "hover:border-yellow-400/60 hover:shadow-yellow-500/20",
      level: "Advanced"
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      icon: SiTailwindcss,
      color: "text-cyan-300",
      bgHover: "hover:border-cyan-300/60 hover:shadow-cyan-400/20",
      level: "Advanced"
    },
    {
      name: "HTML5",
      category: "Frontend",
      icon: SiHtml5,
      color: "text-orange-500",
      bgHover: "hover:border-orange-500/60 hover:shadow-orange-500/20",
      level: "Advanced"
    },
    {
      name: "CSS3",
      category: "Frontend",
      icon: SiCss3,
      color: "text-blue-400",
      bgHover: "hover:border-blue-400/60 hover:shadow-blue-500/20",
      level: "Advanced"
    },
    // Tools
    {
      name: "Git & GitHub",
      category: "Tools",
      icon: SiGit,
      color: "text-orange-600",
      bgHover: "hover:border-orange-600/60 hover:shadow-orange-600/20",
      level: "Proficient"
    },
    {
      name: "Postman",
      category: "Tools",
      icon: SiPostman,
      color: "text-orange-400",
      bgHover: "hover:border-orange-400/60 hover:shadow-orange-400/20",
      level: "Proficient"
    },
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skillList
      : skillList.filter((s) => s.category === activeCategory);

  return (
    <section
      name="skills"
      className="bg-slate-950 w-full min-h-screen py-24 text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
          <span className="text-cyan-400 font-semibold text-xs tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 inline-block mb-3">
            Technical Expertise
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Technologies and frameworks I utilize to construct production-ready mobile applications and backend services.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 animate-fade-in-up">
          {categories.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setActiveCategory(name)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === name
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 scale-105"
                  : "glass-pill hover:bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              <Icon className="text-sm" />
              <span>{name}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 animate-fade-in">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className={`glass-card p-5 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:-translate-y-1.5 ${skill.bgHover} group border border-slate-800 relative overflow-hidden`}
              >
                {skill.badge && (
                  <span className="absolute top-2 right-2 px-1.5 py-0.5 text-[10px] font-bold rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    {skill.badge}
                  </span>
                )}

                <div className={`text-4xl sm:text-5xl mb-3 ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon />
                </div>

                <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
                
                <span className="text-[11px] text-slate-400 mt-1 font-medium">
                  {skill.level}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;