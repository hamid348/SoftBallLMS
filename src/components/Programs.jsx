import React from "react";
// import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import PlayerImage from "../img/programs.jpeg";
import ButtonProp from "./ButtonProp";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';

function Programs() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 justify-center lg:grid-cols-2 grid-rows-[2,2fr] lg:grid-rows-[1fr,2fr] gap-2">
        <ButtonProp 
          val="02"
          text="Program"
        />
        <div>
          <p className="text-2xl">Courses Desinged for All Levels</p>
        </div>
        <div
          className=" bg-center bg-cover p-4 rounded-lg justify-between"
          style={{ backgroundImage: `url(${PlayerImage})` }}
        >
          <div className=" flex flex-col justify-between h-screen">
            <div>
              <ul className="flex gap-2 items-center ">
                {/* Navigation Buttons */}
                {["Beginner", "Basics"].map((item, index) => (
                  <li key={index} className="text-center md:text-left">
                    <button
                      type="button"
                      className="w-full md:w-auto text-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between items-end text-white">
              <h1 className="text-4xl font-semibold">
                Rooki <br /> Ready
              </h1>
              <div className=" ">
              
              <NorthEastRoundedIcon className="bg-white text-black " />

              </div>
            </div>
          </div>
        </div>
        <div className="last-div grid gap-4 grid-cols-2 p-4 ">
          <div className="border border-gray-400 rounded-lg p-4 grid gap-2 ">
            <div className="flex gap-2 justify-between">
              <ControlPointIcon />
              <img
                src={PlayerImage}
                alt="imga"
                className="w-14 h-14 rounded-lg"
              />
            </div>
            <div>
              <h1 className="font-bold ">Slugger Squad</h1>
            </div>
          </div>
          <div className=" text-white flex flex-col justify-between p-4 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${PlayerImage})` }}>
            <ControlPointIcon />
            <h1>MVP Grind</h1>
          </div>
          <div></div>
          <div className="flex flex-col justify-between">
            <div className="text-right">
              < NavigateBeforeRoundedIcon/>
              <NavigateNextRoundedIcon className="bg-black text-white rounded-full" />
            </div>
            <p className="bottom-0 pb-1 pt-4">
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
