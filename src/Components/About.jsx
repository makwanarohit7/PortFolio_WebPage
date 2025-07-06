import React from "react";
import { resumeData } from "../data/resumeData";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 animate-fade-in-up">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            About Me
          </p>
          <p className="py-6 text-gray-300">Get to know me better</p>
        </div>

        <div className="animate-slide-in-left">
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Who I Am</h3>
            <p className="text-lg leading-relaxed text-gray-300 max-w-4xl">
              {resumeData.summary}
            </p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default About;
