import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import React from "react";
import base from "../img/bas.jpg";

function About() {
  return (
    <div className="h-full p-4 md:p-8 flex flex-col justify-around relative bg-white">
      {/* Floating Baseball Image */}
      <img
        src={base}
        alt="Baseball"
        className="absolute z-0 hidden lg:block rotate-45 rounded-lg opacity-65 top-16 left-1/2 transform -translate-x-1/2 xl:left-[30rem] xl:translate-x-0"
        width={150}
      />

      {/* Top Section: Number & Title */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="bg-black text-yellow-200 rounded-full p-4 md:p-5 text-xl md:text-2xl font-bold">
            01
          </div>
          <div className="bg-gray-400 text-black p-4 md:p-5 rounded-full text-lg md:text-xl font-medium">
            About
          </div>
        </div>
        <div className="text-gray-700 text-lg md:text-xl font-medium flex items-center gap-2 cursor-pointer">
          Learn More
          <SportsVolleyballIcon className="text-yellow-500 text-2xl md:text-3xl" />
        </div>
      </div>

      {/* Middle Section: Main Text Content */}
      <div className="z-10 p-4 text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 leading-relaxed mx-auto max-w-lg md:max-w-xl lg:max-w-3xl">
          We provide exceptional baseball{" "}
          <span className="inline-block rounded-full bg-yellow-300 px-3 py-1 font-bold text-black">
            100+
          </span>{" "}
          training at over{" "}
          <span className="inline-block bg-yellow-300 px-3 py-1 rounded-full">
            <SportsVolleyballIcon className="text-black" />
          </span>{" "}
          bustling cities to picturesque fields in serene settings to create the
          perfect environment for{" "}
          <span className="text-yellow-300 font-bold">
            honing your skills and enjoying the game you love.
          </span>
        </h2>
      </div>

      {/* Bottom Divider Icon */}
      <div className="mt-12 flex justify-center pb-20 pt-5">
        <div className="flex items-center gap-4">
          <div className="w-10 h-1 bg-yellow-500 rounded-full"></div>
          <div className="w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6V18M6 12H18"
              />
            </svg>
          </div>
          <div className="w-10 h-1 bg-yellow-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
