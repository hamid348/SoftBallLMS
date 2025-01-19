import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import React from "react";
import Person from "../img/programs.jpeg";
import ButtonProp from "./ButtonProp";
import NomialCard from "./NomialCard";

function Testimonial() {
  return (
    <div className="p-4 md:p-8">
      {/* Header Section */}
      <div className="text-center">
        <ButtonProp val="04." text="Testimonial" />
      </div>

      {/* Testimonial Content */}
      <div className="flex flex-col lg:flex-row gap-6 py-6">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-6 items-center lg:items-start">
          <img
            src={Person}
            alt="Baseball player"
            className="rounded-lg w-3/4 md:w-1/2 lg:w-3/4 shadow-lg"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
              From Our Baseball Community
            </h1>
            <div className="flex justify-center lg:justify-start gap-4 mt-4">
              <NavigateBeforeRoundedIcon className="cursor-pointer hover:scale-110 transition-all text-gray-700" />
              <NavigateNextRoundedIcon className="bg-black text-white rounded-full p-1 cursor-pointer hover:scale-110 transition-all" />
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="flex-1 flex flex-col md:flex-row gap-6">
          <NomialCard
            title="Hamid"
            icon={Person}
            desc="The coaching here transformed my game. I'm more confident at the plate!"
            person={Person}
            name="Mudasir"
            address={
              <>
                Lesch-Jakubowski <br />
                577 Glover Lights, Reichertland, British Indian
              </>
            }
          />

          <NomialCard
            title="Hamid"
            icon={Person}
            desc="The coaching here transformed my game. I'm more confident at the plate!"
            person={Person}
            name="Mudasir"
            address={
              <>
                Lesch-Jakubowski <br />
                577 Glover Lights, Reichertland, British Indian
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
