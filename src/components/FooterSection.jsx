import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import React from "react";
import BaseBall from "../img/baseball.jpg";
import BaseLogo from "../img/BaseLogo.png";
import FooterLogo from "./FooterLogo";

function FooterSection() {
  return (
    <div className="bg-black py-8 rounded-b-lg min-h-screen flex flex-col justify-around">
      {/* Top Divider */}
      <hr className="h-1 my-8 w-4/5 bg-slate-300 mx-auto" />

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-around mx-auto my-16 w-4/5 gap-12">
        {/* Left Section */}
        <div className="text-white flex flex-col justify-between flex-1 space-y-6 text-center lg:text-left">
          <FooterLogo />
          <p className="text-2xl md:text-4xl leading-snug">
            We're dedicated to empowering baseball players of all skill levels.
          </p>
        </div>

        {/* Right Section (Images) */}
        <div className="flex-1 flex justify-center lg:justify-end items-end">
          <div className="relative flex gap-4">
            <img
              src={BaseBall}
              alt="Baseball"
              className="w-40 md:w-48 object-cover rounded-lg"
            />
            <img
              src={BaseLogo}
              alt="Baseball Logo"
              className="w-40 md:w-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <hr className="h-1 my-8 w-4/5 bg-slate-300 mx-auto" />

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-between text-gray-400 text-lg md:text-2xl w-4/5 mx-auto text-center md:text-left space-y-4 md:space-y-0">
        <div>123 Baseball Lane, Sports City, USA</div>
        <div>+1 (555) 123-4567</div>
        <div>info@sluggeracademy.com</div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-4/5 mx-auto mt-8 text-center">
        <p className="text-white text-sm md:text-base">
          © 2025 Slugger All Rights Reserved
        </p>

        {/* Navigation Buttons */}
        <ul className="flex flex-col md:flex-row gap-4 mt-6 md:mt-0">
          {["Home", "Programs", "Coaches", "Schedule"].map((item, index) => (
            <li key={index} className="text-center">
              <button
                type="button"
                className="text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 transition-all dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {item}
              </button>
            </li>
          ))}

          {/* Social Icon */}
          <li className="flex justify-center">
            <div className="rounded-full p-3 bg-yellow-600 hover:bg-yellow-700 transition-all">
              <SportsVolleyballIcon className="text-white" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterSection;
