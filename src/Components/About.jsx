import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 leading-relaxed">
          Hello! My name is Rohit Makwana and I am currently pursuing my
          Bachelor's degree in Information Technology from LDRP-ITR College. I
          am in my 7th semester and have been learning various programming
          languages and technologies during my course. I have a keen interest in
          React And React Native and have been actively working on projects
          related to React. Apart from academics, I enjoy learning new
          technologies. I am excited to showcase my skills and projects through
          this portfolio and hope to connect with like-minded individuals in the
          industry.
        </p>
      </div>
    </div>
  );
};

export default About;
