import React from "react";
import heroImage from "../img/gloves.jpeg";
import ButtonProp from "./ButtonProp";

function JoinUs() {
  return (
    <div
      className="lg:h-screen flex flex-col justify-center items-center bg-cover bg-center m-2 rounded-xl p-4 relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

      {/* Title at the Top-Left */}
      <div className="absolute top-6 left-6 z-20">
        <ButtonProp val="04" text="Join Us" />
      </div>

      {/* Content Section */}
      <div className="z-10 flex flex-col gap-8 w-full max-w-4xl text-center">
        <div className="relative bg-white pb-24 rounded-lg p-6 md:p-10 flex flex-col gap-6 items-center shadow-lg">
          <h1 className="text-2xl md:text-3xl text-black leading-snug text-center">
            Join the team today and start your journey toward excellence!
          </h1>
          <p className="text-gray-500 leading-relaxed max-w-lg text-center">
            <span className="font-bold text-black underline">
              Join our team
            </span>{" "}
            to grow your skills, connect with a supportive community, and
            achieve your goals. Start your journey to excellence today!
          </p>

          {/* Floating Image */}
          <img
            src={heroImage}
            alt="Baseball gloves"
            className="border-4 border-white absolute rounded-2xl w-36 h-28 bottom-[-50px] md:bottom-[-80px] md:right-[-50px] shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
