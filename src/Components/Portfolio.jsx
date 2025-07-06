import React from "react";
import { resumeData } from "../data/resumeData";
import { FaPlay, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Portfolio = () => {
  const getProjectImage = (imageName) => {
    try {
      return require(`../assets/portfolio/${imageName}.png`);
    } catch {
      return null;
    }
  };

  const otherProjects = [
    {
      id: 1,
      name: "Online Book Store",
      description: "A full-stack e-commerce platform for buying and selling books with user authentication and payment integration.",
      Durl: "https://book-store-rohit-makwana.vercel.app/",
      Curl: "https://github.com/makwanarohit7/Book_Store",
      tech: ["React.js", "Tailwind CSS","Redux","REST APIs"],
    },
    {
      id: 2,
      name: "Agent Client Management",
      description: "A comprehensive management system for tracking agent-client relationships and business operations.",
      Durl: "",
      Curl: "https://github.com/makwanarohit7/Agent-Client_Management_App",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-900 to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-6 animate-fade-in-up">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-cyan-500">
            Featured Projects
          </p>
          <p className="py-4 text-gray-300">Check out some of my recent work and achievements</p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {resumeData.projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all duration-300 group shadow-lg hover:shadow-2xl"
            >
              {/* Project Image */}
          
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-gray-300 text-xs leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-3">
                  <h4 className="text-cyan-400 text-xs font-semibold mb-1">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 text-xs font-medium transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-1" />
                      {project.linkText}
                    </a>
                  )}
                  {project.status && (
                    <span className="text-xs text-gray-400">
                      {project.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="animate-fade-in-up">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all duration-300 group shadow-lg hover:shadow-2xl"
              >
           
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-300 text-xs leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-3">
                    <h4 className="text-cyan-400 text-xs font-semibold mb-1">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
