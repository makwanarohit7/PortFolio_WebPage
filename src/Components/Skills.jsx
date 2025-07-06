import React from "react";
import { resumeData } from "../data/resumeData";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import mysql from "../assets/mysql.png";
import nextjs from "../assets/nextjs.png";
import typescript from "../assets/graphql.png"; // Using graphql icon for TypeScript
import firebase from "../assets/firebase.png"; // Using firebase icon
import mongodb from "../assets/mongodb.png"; // Using mongodb icon

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: reactImage,
      title: "React Native",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next.js",
      style: "shadow-white",
    },
    {
      id: 7,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 9,
      src: node,
      title: "Node.js",
      style: "shadow-green-400",
    },
    {
      id: 10,
      src: mysql,
      title: "MySQL",
      style: "shadow-orange-400",
    },
    {
      id: 11,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-500",
    },
    {
      id: 12,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black to-gray-900 w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8 animate-fade-in-up">
          <p className="text-3xl sm:text-4xl font-bold border-b-4 border-cyan-500 p-2 inline">
            Skills & Technologies
          </p>
          <p className="py-6 text-gray-300">Technologies I've been working with</p>
        </div>

        {/* Technology Icons */}
        <div className="animate-fade-in-up">
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center py-8 px-4 sm:px-8 md:px-12">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} bg-gray-800 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-cyan-500/50 group`}
              >
                <img src={src} alt="" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3" />
                <p className="mt-2 sm:mt-4 font-medium text-sm sm:text-base text-white">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills; 