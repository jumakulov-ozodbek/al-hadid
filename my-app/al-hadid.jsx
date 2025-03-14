import React from "react";

const Portfolio = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="absolute w-2/3 h-2/3 bg-gradient-to-br from-gray-700 to-gray-400 rounded-lg -z-10"></div>
          <img src="/profile.jpg" alt="Profile" className="rounded-lg shadow-lg w-2/3" />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-5xl font-bold">ALI HADID</h1>
          <p className="mt-4 text-gray-300">
            I am a multidisciplinary designer with a passion for art and creativity.
            My problem-solving approach is pragmatic, focusing on delivering simple and functional solutions.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Instagram: @ali.hadid_</a>
            <a href="#" className="text-gray-400 hover:text-white">Facebook: @ali.hadid_</a>
            <a href="#" className="text-gray-400 hover:text-white">Telegram: @ali.hadid_</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
