import React from "react";
import { resumeData } from "../data/resumeData";
import { FaExternalLinkAlt, FaGithub, FaMobileAlt, FaCode } from "react-icons/fa";

const Portfolio = () => {
  const otherProjects = [
    {
      id: 1,
      name: "Online Book Store",
      description:
        "Full-stack e-commerce platform for purchasing books with integrated user authentication, search filtering, and state management.",
      Durl: "https://book-store-rohit-makwana.vercel.app/",
      Curl: "https://github.com/makwanarohit7/Book_Store",
      tech: ["React.js", "Tailwind CSS", "Redux", "REST APIs"],
    },
    {
      id: 2,
      name: "Agent Client Management System",
      description:
        "Comprehensive client and business tracking system for agents, managing operational workflows, tasks, and data dashboards.",
      Durl: "",
      Curl: "https://github.com/makwanarohit7/Agent-Client_Management_App",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
  ];

  return (
    <section
      name="projects"
      className="bg-slate-950 w-full min-h-screen py-24 text-white relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-cyan-400 font-semibold text-xs tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 inline-block mb-3">
            Featured Works
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Projects & <span className="text-gradient">Portfolio</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A showcase of production-ready mobile applications and web systems engineered with React Native, Node.js, and modern APIs.
          </p>
        </div>

        {/* Primary Featured Mobile Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-fade-in">
          {resumeData.projects.map((project, index) => (
            <div
              key={index}
              className="glass-card-interactive rounded-3xl p-6 flex flex-col justify-between border border-slate-800 hover:border-cyan-500/50 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xl font-bold border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    <FaMobileAlt />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-500/30">
                    Mobile App
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.name}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="mb-6">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Technologies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-800/80 text-cyan-300 border border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs transition-all shadow-md shadow-cyan-500/20 hover:scale-[1.02]"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    <span>{project.linkText || "View Live"}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Secondary / Other Web Projects */}
        <div className="animate-fade-in-up">
          <h3 className="text-2xl font-bold text-slate-200 mb-6 flex items-center space-x-3">
            <FaCode className="text-cyan-400" />
            <span>Web Applications & Open Source</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((proj) => (
              <div
                key={proj.id}
                className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-slate-700 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {proj.name}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3 pt-2">
                  {proj.Durl && (
                    <a
                      href={proj.Durl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-semibold flex items-center border border-slate-700 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                  {proj.Curl && (
                    <a
                      href={proj.Curl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center border border-slate-700 transition-colors"
                    >
                      <FaGithub className="mr-2" /> Code Repo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
