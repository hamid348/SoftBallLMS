import CallMadeRoundedIcon from "@mui/icons-material/CallMadeRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import React from "react";
import acc from "../img/match.jpeg";

function Accordien() {
  return (
    <div className="space-y-6">
      <hr />

      {/* Home Run Derby Section */}
      <div className="flex flex-col md:flex-row gap-6 py-4 items-center">
        <div className="text-gray-800 font-bold text-xl">01</div>

        <div className="flex flex-col gap-4 flex-1">
          <h1 className="text-2xl font-semibold">Home Run Derby</h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            This event is all about power-hitting, where players aim to hit the
            most home runs and claim the supercrown.
          </p>
          <button
            type="button"
            className="w-full md:w-auto font-bold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-full text-sm px-6 py-3 bg-gray-800 text-white transition-all hover:bg-gray-700"
          >
            View Details
          </button>
        </div>

        <div className="pt-4 md:pt-0">
          <img
            src={acc}
            alt="Home Run Derby"
            className="rounded-lg w-full md:w-40 object-cover shadow-lg"
          />
        </div>
      </div>

      <hr />

      {/* Other Events */}
      {[
        { id: "02", title: "Diamond ShowDown" },
        { id: "03", title: "FastPitch Frenzy" },
        { id: "04", title: "All-Star Weekend" },
      ].map((event, index) => (
        <div key={index} className="flex justify-between items-center py-4">
          <div className="flex gap-2 items-center">
            <p className="text-gray-800 font-bold text-lg">{event.id}.</p>
            <h1 className="text-2xl font-semibold">{event.title}</h1>
          </div>
          <div>
            <NavigateNextRoundedIcon className="bg-slate-200 rounded-full p-1 cursor-pointer hover:scale-105 transition-all" />
          </div>
        </div>
      ))}

      <hr />

      {/* Join Us Button */}
      <div className="flex justify-end pt-6">
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-6 py-3 flex items-center gap-2 transition-all"
        >
          <span className="hidden sm:inline-block">Join Us</span>
          <CallMadeRoundedIcon className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default Accordien;
