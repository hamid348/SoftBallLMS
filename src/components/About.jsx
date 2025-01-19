import React from "react";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import base from '../img/bas.jpg'
function About() {
  return (
    <div className="h-screen p-2 flex flex-col justify-around relative">
      <img src={base} alt="" className="absolute z-4 rounded-lg rotate-45 opacity-65" width={200}/>
      <div className="flex justify-between items-center p-4">
        <div className="flex gap-0">
          <div className="bg-black text-yellow-200 rounded-full p-4"> 01 </div>
          <div className="bg-gray-400 text-black p-4 rounded-full">About</div>
        </div>
        <div>
          Learn More{" "}
          <span>
            <SportsVolleyballIcon />
          </span>
        </div>
      </div>
         {/* Middle Section: Main Text Content */}
         <div className=" z-10 p-4 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 leading-relaxed">
            We provide exceptional baseball{" "}
            <span className="inline-block rounded-full bg-yellow-300 px-2 py-1 font-bold">
              100+
            </span>{" "}
            training at over{" "}
            <span className="inline-block bg-yellow-300 px-2 py-1 rounded-full">
              <SportsVolleyballIcon/>
            </span>{" "}
            bustling cities
            to picturesque fields in serene settings to create the perfect
            environment for{" "}
            <span className="text-yellow-300 font-bold">
              honing your skills and enjoying the game you love.
            </span>
          </h2>
      </div>

      {/* Bottom Divider Icon */}
      <div className="mt-10 flex justify-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-1 bg-yellow-500 rounded-full"></div>
          <div className="w-12 h-12 border-2 border-gray-300 flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-500"
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









