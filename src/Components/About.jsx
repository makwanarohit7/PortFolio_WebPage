import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const About = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/makwana-rohit/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/makwanarohit7",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:makawanarohit70@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/146eOdje298657w5d_T_cTTL9PTPhOOWZ/view?usp=drive_link",
      style: "rounded-br-md",
      download: true,
    },
  ];

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

        <div className="flex justify-between mt-10 hadow-md ">
          {links.map(({ id, child, href, style, download }) => (
            <a
              key={id}
              href={href}
              className="flex items-center w-full text-white hover:scale-110 duration-500"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
