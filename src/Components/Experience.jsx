import React from "react";
import { resumeData } from "../data/resumeData";
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-900 w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8 animate-fade-in-up">
          <p className="text-3xl sm:text-4xl font-bold border-b-4 border-cyan-500 p-2 inline">
            Experience & Education
          </p>
          <p className="py-6 text-gray-300">My professional journey and academic background</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-6 flex items-center">
              <FaBriefcase className="mr-3" />
              Work Experience
            </h3>
            
            {resumeData.experience.map((job, index) => (
              <div 
                key={index} 
                className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:bg-gray-700 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="mb-3 sm:mb-0">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{job.role}</h4>
                    <p className="text-cyan-400 font-medium">{job.company}</p>
                  </div>
                  <div className="text-left sm:text-right text-sm text-gray-400">
                    <p className="flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      {job.date}
                    </p>
                    <p className="flex items-center mt-1">
                      <FaMapMarkerAlt className="mr-1" />
                      {job.location}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {job.duties.map((duty, dutyIndex) => (
                    <li key={dutyIndex} className="text-gray-300 text-sm flex items-start">
                      <span className="text-cyan-400 mr-2 mt-1">•</span>
                      {duty}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-6 flex items-center">
              <FaGraduationCap className="mr-3" />
              Education
            </h3>
            
            {resumeData.education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:bg-gray-700 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="mb-3 sm:mb-0">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                    <p className="text-cyan-400 font-medium">{edu.school}</p>
                  </div>
                  <div className="text-left sm:text-right text-sm text-gray-400">
                    <p className="flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      {edu.date}
                    </p>
                    <p className="flex items-center mt-1">
                      <FaMapMarkerAlt className="mr-1" />
                      {edu.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Languages */}
            <div className="mt-8 animate-fade-in-up">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4">Languages</h3>
              <div className="space-y-3">
                {resumeData.languages.map((lang, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800 p-4 rounded-lg"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{lang.name}</span>
                      <span className="text-cyan-400 text-sm">{lang.level}</span>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 flex-1 rounded ${
                            i < lang.proficiency ? 'bg-cyan-400' : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div className="mt-8 animate-fade-in-up">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4">Certifications & Courses</h3>
              <div className="space-y-3">
                {resumeData.courses.map((course, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800 p-4 rounded-lg"
                  >
                    <h4 className="text-white font-medium mb-2">{course.provider}</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.map((subject, subIndex) => (
                        <span key={subIndex} className="text-sm bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                          {subject}
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
    </div>
  );
};

export default Experience;
