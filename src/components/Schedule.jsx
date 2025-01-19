import React from "react";
import Match from "../img/match.jpeg";
import Accordien from "./Accordien";
import ButtonProp from "./ButtonProp";

function Schedule() {
  return (
    <div className="p-4 md:p-8">
      {/* Header Section */}
      <div className="text-center">
        <ButtonProp val="03" text="Schedule" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 lg:justify-around mt-6">
        {/* Right Side (Text & Image Section) */}
        <div className="flex flex-col flex-1 gap-6 p-4 max-w-md text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
            <span className="text-yellow-400">Game On:</span> <br /> Upcoming
            Match Schedule
          </h1>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Don't miss a single inning! Check out our upcoming matches to stay
            updated on game times, locations, and opponents.
          </p>
          <img
            src={Match}
            alt="Upcoming baseball match"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Left Side (Accordion Section) */}
        <div className="flex-1 max-w-md w-full">
          <Accordien />
        </div>
      </div>
    </div>
  );
}

export default Schedule;
