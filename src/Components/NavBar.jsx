import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";
import { Link } from "react-scroll";
import { resumeData } from "../data/resumeData";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, link: "home", label: "Home" },
    { id: 2, link: "about", label: "About" },
    { id: 3, link: "skills", label: "Skills" },
    { id: 4, link: "projects", label: "Projects" },
    { id: 5, link: "experience", label: "Experience" },
    { id: 6, link: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3 shadow-2xl shadow-cyan-950/20" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          to="home"
          smooth
          duration={500}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            <FaCode className="text-xl" />
          </div>
          <div>
            <span className="text-xl font-bold text-gradient tracking-tight">
              {resumeData.name}
            </span>
            <div className="flex items-center space-x-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs text-slate-400 font-medium">
                {resumeData.experienceYears} Yrs Exp • React Native Pro
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {links.map(({ id, link, label }) => (
            <li key={id}>
              <Link
                to={link}
                smooth
                duration={500}
                spy={true}
                offset={-80}
                activeClass="!text-cyan-400 font-semibold !bg-slate-800/60 shadow-inner border border-slate-700/50"
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/40 transition-all duration-200 cursor-pointer block"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="contact"
            smooth
            duration={500}
            className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setNav(!nav)}
          aria-label="Toggle Menu"
          className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 md:hidden focus:outline-none transition-colors"
        >
          {nav ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {nav && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-6 py-8 shadow-2xl transition-all animate-fade-in-up">
          <ul className="flex flex-col space-y-4">
            {links.map(({ id, link, label }) => (
              <li key={id}>
                <Link
                  onClick={() => setNav(false)}
                  to={link}
                  smooth
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="text-cyan-400 font-semibold bg-slate-800/80"
                  className="block px-4 py-3 rounded-xl text-lg font-medium text-slate-200 hover:bg-slate-800/50 hover:text-cyan-300 transition-all"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                onClick={() => setNav(false)}
                to="contact"
                smooth
                duration={500}
                className="block text-center w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20"
              >
                Let's Talk
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
