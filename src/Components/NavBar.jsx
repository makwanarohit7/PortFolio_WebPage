import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { resumeData } from "../data/resumeData";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      label: "Home",
    },
    {
      id: 2,
      link: "about",
      label: "About",
    },
    {
      id: 3,
      link: "skills",
      label: "Skills",
    },
    {
      id: 4,
      link: "projects",
      label: "Projects",
    },
    {
      id: 5,
      link: "experience",
      label: "Experience",
    },
    {
      id: 6,
      link: "contact",
      label: "Contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`flex justify-between items-center w-full h-20 px-4 text-white fixed z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-gray-800 shadow-lg' 
        : 'bg-black/80 backdrop-blur-sm'
    }`}>
      <div className="flex items-center">
        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
          {resumeData.name}
        </h1>
        <span className="text-gray-400 text-sm ml-2 hidden sm:block">| Developer</span>
      </div>

      <ul className="hidden md:flex space-x-8">
        {links.map(({ id, link, label }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group"
          >
            <Link 
              to={link} 
              smooth 
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-cyan-400"
              className="relative"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu button */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-gray-300 hover:text-cyan-400 transition-colors duration-200 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile menu */}
      {nav && (
        <div className="fixed inset-0 bg-black/98 backdrop-blur-lg  flex items-center justify-center">
          <ul className="flex flex-col justify-center items-center h-full text-white space-y-4">
            {links.map(({ id, link, label }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-4 text-3xl hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="text-cyan-400"
                >
                  {label}
                </Link>
              </li>
            ))}
            
            {/* Mobile social links */}
            <div className="flex space-x-6 mt-8">
              <a
                href={resumeData.onlineProfiles[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl"
                onClick={() => setNav(false)}
              >
                {React.createElement(resumeData.onlineProfiles[1].icon)}
              </a>
              <a
                href={resumeData.onlineProfiles[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-colors duration-300 text-2xl"
                onClick={() => setNav(false)}
              >
                {React.createElement(resumeData.onlineProfiles[0].icon)}
              </a>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
