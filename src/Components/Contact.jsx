import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
        </div>
        <div className=" justify-center items-center border-2 rounded-2xl  ">
          <p className="text-white text-xl font-semibold  text-center mt-20">
            Email :
            <a href="mailto:makawanarohit70@gmail.com">makawanarohit70@gmail</a>
          </p>
          <p className="text-white text-xl font-semibold mt-5 text-center">
            Mobile : +91 9173493449
          </p>
          <p className="text-white text-xl font-semibold mt-5 text-center mb-20">
            Address : Gandhinagar ,Gujarat
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
