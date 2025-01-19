import ControlPointIcon from "@mui/icons-material/ControlPoint";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import React from "react";
import PlayerImage from "../img/programs.jpeg";
import ButtonProp from "./ButtonProp";

function Programs() {
  return (
    <div className="p-4 md:p-8 ">
      {/* Section Header */}
      <div className="flex w-full items-center justify-between gap-4 py-7">
        <ButtonProp val="02" text="Program" />
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
          Courses Designed for All Levels
        </p>
      </div>
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Image with Text Overlay */}
        <div
          className="bg-center bg-cover p-6 rounded-lg relative text-white flex flex-col justify-between"
          style={{ backgroundImage: `url(${PlayerImage})` }}
        >
          <div className="flex flex-col gap-4">
            <ul className="flex gap-3 items-center flex-wrap">
              {["Beginner", "Basics"].map((item, index) => (
                <li key={index} className="text-center">
                  <button
                    type="button"
                    className="text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 font-medium rounded-full text-sm px-6 py-3 transition-all duration-300 hover:bg-gray-700"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-end mt-10">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Rooki <br /> Ready
            </h1>
            <NorthEastRoundedIcon className="bg-white text-black rounded-full p-1 w-10 h-10" />
          </div>
        </div>

        {/* Program Details Section */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 p-4">
          {/* Card 1 */}
          <div className="border border-gray-400 rounded-lg p-6 flex flex-col gap-4 bg-white shadow-lg">
            <div className="flex justify-between items-center">
              <ControlPointIcon className="text-gray-700" />
              <img
                src={PlayerImage}
                alt="Program"
                className="w-16 h-16 rounded-lg object-cover"
              />
            </div>
            <h1 className="font-bold text-lg md:text-xl text-gray-900">
              Slugger Squad
            </h1>
          </div>

          {/* Card 2 */}
          <div
            className="text-white flex flex-col justify-between p-6 rounded-lg bg-cover bg-center shadow-lg"
            style={{ backgroundImage: `url(${PlayerImage})` }}
          >
            <ControlPointIcon />
            <h1 className="text-lg md:text-xl font-semibold">MVP Grind</h1>
          </div>

          {/* Placeholder Div */}
          <div className="hidden md:block"></div>

          {/* Navigation and Text */}
          <div className="flex flex-col justify-between">
            <div className="text-right space-x-2">
              <NavigateBeforeRoundedIcon className="text-gray-700 cursor-pointer hover:scale-110 transition" />
              <NavigateNextRoundedIcon className="bg-black text-white rounded-full cursor-pointer p-1 hover:scale-110 transition" />
            </div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              aliquam maiores a totam consequatur error atque quaerat quam.
              Nobis rem soluta officia saepe facere porro, unde pariatur impedit
              sequi qui.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;
