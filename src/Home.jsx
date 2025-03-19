import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-[#1E2839] to-[#3A3A3A] flex items-center justify-center p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Chap tomonda rasm */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/homepage.jpg"
            alt="Ali Hadid"
            className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* O'ng tomonda matn */}
        <div className="w-full md:w-1/2 text-center md:text-left text-white space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">ALI HADID</h1>
          <p className="text-sm md:text-base text-gray-300">
            I am a multidisciplinary designer with a passion for art and creativity. My problem-solving approach is pragmatic, focusing on delivering simple and functional solutions.
          </p>
          {/* Ijtimoiy tarmoqlar */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-white text-lg">📷 Instagram</a>
            <a href="#" className="text-gray-300 hover:text-white text-lg">📘 Facebook</a>
            <a href="#" className="text-gray-300 hover:text-white text-lg">✈️ Telegram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;