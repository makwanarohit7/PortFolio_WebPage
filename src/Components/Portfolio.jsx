import React from "react";
import bookstore from "../assets/portfolio/bookstore.png";
import AgentClient from "../assets/portfolio/Agent-Client.png";
import MusicApp from "../assets/portfolio/MusicApp.png";
import TravelApp from "../assets/portfolio/TravelApp.jpg";
import MusicPlayer from "../assets/portfolio/MusicPlayer.jpg";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: bookstore,
      Durl: "https://book-store-rohit-makwana.vercel.app/",
      Curl: "https://github.com/makwanarohit7/Book_Store",
      name: "Online Book Store",
    },
    {
      id: 2,
      src: AgentClient,
      Durl: "",
      Curl: "https://github.com/makwanarohit7/Agent-Client_Management_App",
      name: "Agent Client Management",
    },
    {
      id: 3,
      src: MusicApp,
      Durl: "",
      Curl: "https://github.com/makwanarohit7/Music-App",
      name: "Music Player",
    },
    {
      id: 4,
      src: TravelApp,
      Durl: "",
      Curl: "https://github.com/makwanarohit7/Travel_App",
      name: "Travel Application",
    },
    {
      id: 5,
      src: MusicPlayer,
      Durl: "",
      Curl: "https://github.com/makwanarohit7/Music_Android_App",
      name: "Music Player Android App",
    },
    // {
    //   id: 6,
    //   src: reactWeather,
    //   Durl: "",
    //   Curl: "https://github.com/makwanarohit7/React-Native-Firebase-App",
    //   name: "React Native CLI Firebase",
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-16 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 px-12 sm:px-0">
          {portfolios.map(({ id, src, Durl, Curl, name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-36"
              />
              <p className="m-3 ">{name}</p>
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-2 m-2 duration-300 hover:scale-110"
                  onClick={() => {
                    if (Durl) window.open(Durl);
                    else {
                      alert("Demo of this WebSite Currently Not Available");
                    }
                  }}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105"
                  onClick={() => {
                    window.open(Curl);
                  }}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
