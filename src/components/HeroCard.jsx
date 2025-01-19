import CallMadeIcon from "@mui/icons-material/CallMade";
import MouseIcon from "@mui/icons-material/Mouse";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import heroImage1 from "../img/1.jpg";
import heroImage2 from "../img/2.jpg";
import heroImage3 from "../img/3.jpg";
import heroImage from "../img/hero.jpeg";
import LinkButton from "./LinkButton";
import RightLinkButton from "./RightLinkButton";

function HeroCard() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const manuItems = [
    { name: "Home" },
    { name: "Programs" },
    { name: "Coaches" },
    { name: "Schedule" },
  ];

  return (
    <div
      className="lg:h-screen flex flex-col justify-around bg-cover bg-center m-2 rounded-xl p-8 relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl z-0"></div>

      {/* Navbar */}
      <div className="flex items-center justify-between relative z-20">
        <LinkButton />

        {/* Mobile Menu Icon (visible on small screens) */}
        <GiHamburgerMenu
          className="text-white text-3xl md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />

        {/* Navigation Menu */}
        <div
          className={`${
            isOpen
              ? "fixed inset-0 bg-black bg-opacity-70 z-[60] flex flex-col items-center justify-center text-white md:hidden"
              : "hidden"
          } md:flex md:gap-6 md:items-center md:static md:bg-transparent md:z-auto md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row gap-8 text-center md:text-left">
            {manuItems.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  className="text-white text-lg md:text-base font-medium border border-gray-300 rounded-full px-8 py-3 bg-gray-800 hover:bg-gray-700 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </button>
              </li>
            ))}
            <li className="mt-6 md:mt-0">
              <div className="rounded-full p-4 bg-white inline-block">
                <SearchIcon className="text-black text-3xl" />
              </div>
            </li>
          </ul>
          {/* Close Button for Mobile Menu */}
          <button
            className="mt-8 text-lg md:hidden underline"
            onClick={() => setIsOpen(false)}
          >
            Close Menu
          </button>
        </div>

        <RightLinkButton />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1  gap-4 py-3 max-w-sm lg:max-w-md relative">
        <div className="flex items-start bg-white w-fit p-2 rounded-full bg-opacity-55">
          <AvatarGroup spacing="small">
            <Avatar alt="Remy Sharp" src={heroImage1} />
            <Avatar alt="Travis Howard" src={heroImage2} />
            <Avatar alt="Cindy Baker" src={heroImage3} />
          </AvatarGroup>
        </div>
        <div className="text-white text-justify leading-relaxed">
          Join a growing community of baseball enthusiasts who've sharpened
          their skills and boosted their confidence with our expert-led
          training. Be part of the success stories!
        </div>
      </div>

      {/* Call to Action */}
      <div className=" max-w-sm lg:max-w-md relative">
        <p className="font-sans text-2xl lg:text-6xl text-white leading-tight">
          Join a Passionate Community of Softball Enthusiasts!
          <span className="bg-black rounded-full p-3 text-white text-sm ml-2 lg:text-xl inline-flex items-center">
            Join Us
            <CallMadeIcon className="text-black bg-white rounded-lg ml-2 w-8 h-8 lg:w-12 lg:h-12" />
          </span>
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute right-4 bottom-4 flex items-center gap-2 text-white z-50">
        <p className="text-sm lg:text-base">Scroll Down</p>
        <MouseIcon className="w-6 h-6" />
      </div>
    </div>
  );
}

export default HeroCard;
