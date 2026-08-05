import React from "react";
import { resumeData } from "../data/resumeData";
import {
  FaBriefcase,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaGlobe,
  FaCertificate,
  FaBuilding,
  FaLaptopCode
} from "react-icons/fa";

const Experience = () => {
  return (
    <section
      name="experience"
      className="bg-slate-950 w-full min-h-screen py-20 sm:py-28 text-white relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in-up">
          <span className="text-cyan-400 font-semibold text-xs tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 inline-block mb-3 shadow-lg shadow-cyan-950/50">
            Professional Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Work Experience & <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed px-2">
            My live industry experience, core enterprise projects at Alpha ERP Solutions Pvt. Ltd., and academic accomplishments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Work Experience Timeline (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 animate-slide-in-left">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center space-x-3 pb-3 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/30 shadow-md">
                <FaBriefcase className="text-lg" />
              </div>
              <span>Live Work Experience</span>
            </h3>

            <div className="relative border-l-2 border-slate-800/80 ml-3 sm:ml-4 pl-4 sm:pl-8 space-y-8">
              {resumeData.experience.map((job, index) => {
                const isCurrent = index === 0;

                return (
                  <div key={index} className="relative group">
                    
                    {/* Timeline Node Icon */}
                    <div
                      className={`absolute -left-[27px] sm:-left-[43px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        isCurrent
                          ? "bg-slate-950 border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-500/50"
                          : "bg-slate-950 border-slate-700 text-slate-400"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isCurrent ? "bg-cyan-400 animate-ping" : "bg-slate-500"
                        }`}
                      />
                    </div>

                    {/* Experience Card */}
                    <div
                      className={`glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-300 shadow-xl ${
                        isCurrent
                          ? "border-cyan-500/40 bg-slate-900/80 shadow-cyan-950/30 hover:border-cyan-400"
                          : "border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      {/* Top Meta Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div className="flex items-center space-x-2">
                          <span
                            className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                              isCurrent
                                ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/40 shadow-sm"
                                : "bg-slate-800 text-slate-400 border-slate-700"
                            }`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${
                                isCurrent ? "bg-emerald-400 animate-pulse" : "bg-slate-500"
                              }`}
                            />
                            <span>{isCurrent ? "Live / Current Role" : "Past Role"}</span>
                          </span>
                        </div>

                        {/* Date & Location Pills */}
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 font-medium">
                          <span className="flex items-center px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60">
                            <FaCalendarAlt className="mr-1.5 text-cyan-400" />
                            {job.date}
                          </span>
                          <span className="flex items-center px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60">
                            <FaMapMarkerAlt className="mr-1.5 text-slate-400" />
                            {job.location}
                          </span>
                        </div>
                      </div>

                      {/* Role & Company Name */}
                      <div className="mb-5">
                        <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {job.role}
                        </h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <FaBuilding className="text-cyan-400 text-sm" />
                          <p className="text-cyan-400 font-semibold text-base sm:text-lg">
                            {job.company}
                          </p>
                        </div>
                      </div>

                      {/* Duties List */}
                      <ul className="space-y-3 mb-6">
                        {job.duties.map((duty, dutyIndex) => (
                          <li
                            key={dutyIndex}
                            className="text-slate-300 text-xs sm:text-sm leading-relaxed flex items-start"
                          >
                            <FaCheckCircle className="text-cyan-400 mr-2.5 sm:mr-3 mt-1 flex-shrink-0 text-xs" />
                            <span>{duty}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Highlights Tech Tags */}
                      {isCurrent && (
                        <div className="pt-4 border-t border-slate-800/80">
                          <span className="text-[11px] font-semibold uppercase text-slate-400 tracking-wider block mb-2">
                            Key Technologies Used:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {[
                              "React Native CLI",
                              "Custom Native Modules",
                              "SQLite Sync",
                              ".NET APIs",
                              "NestJS",
                              "Express.js",
                              "PostgreSQL",
                              "WebView",
                            ].map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-xs px-2.5 py-1 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-800/40 font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Education, Languages, Certifications (5 Cols) */}
          <div className="lg:col-span-5 space-y-8 sm:space-y-10 animate-slide-in-right">
            
            {/* Education Block */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center space-x-3 pb-3 border-b border-slate-800 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/30 shadow-md">
                  <FaGraduationCap className="text-lg" />
                </div>
                <span>Education</span>
              </h3>

              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div
                    key={index}
                    className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all"
                  >
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-cyan-400 text-xs sm:text-sm font-semibold mb-3">
                      {edu.school}
                    </p>
                    <div className="flex flex-wrap justify-between items-center text-xs text-slate-400 gap-2">
                      <span className="flex items-center px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                        <FaCalendarAlt className="mr-1.5 text-slate-400" />
                        {edu.date}
                      </span>
                      <span className="flex items-center px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                        <FaMapMarkerAlt className="mr-1.5 text-slate-400" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Block */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 flex items-center space-x-3 mb-4">
                <FaGlobe className="text-cyan-400" />
                <span>Languages</span>
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {resumeData.languages.map((lang, index) => (
                  <div
                    key={index}
                    className="glass-card p-3.5 sm:p-4 rounded-xl text-center border border-slate-800 hover:border-cyan-500/30 transition-all"
                  >
                    <span className="text-xs sm:text-sm font-bold text-white block mb-1">
                      {lang.name}
                    </span>
                    <span className="text-[11px] sm:text-xs text-cyan-400 font-semibold">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Block */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 flex items-center space-x-3 mb-4">
                <FaCertificate className="text-purple-400" />
                <span>Certifications & Courses</span>
              </h3>

              <div className="space-y-3">
                {resumeData.courses.map((course, index) => (
                  <div
                    key={index}
                    className="glass-card p-4 rounded-xl border border-slate-800"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <FaLaptopCode className="text-purple-400 text-sm" />
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {course.provider}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {course.subjects.map((sub, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-md bg-purple-950/60 text-purple-300 border border-purple-800/40 font-medium"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
