import React from "react";
import heroImage from "../img/gloves.jpeg";
import ButtonProp from "./ButtonProp";

function JoinUs() {
  return (
    <div
      class="lg:h-screen flex flex-col justify-around bg-cover bg-center m-2 rounded-xl p-4 relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div class="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

      <div className="z-10 flex flex-col gap-4">
        <div>
          <ButtonProp val="04" text="Join Us" />
        </div>
        <div className="flex justify-center items-center">
          <div className="lg:max-w-screen-md  bg-white pb-24 relative rounded-lg p-8 flex flex-col gap-5 justify-center items-center">
            <h1 className="text-3xl   text-black p-8">
              Join the team today and start your journey toward excellence!
            </h1>
            <p className="text-gray-400">
              <span className="font-bold text-black underline">Join our team</span> to grow your skills, connect with a supportive
              community, and achieve your goals. Start your journey to
              excellence today!
            </p>
          
            <img src={heroImage} alt=""  className=" border-2 border-white absolute rounded-2xl w-44 h-36 bottom-[-80px] lg:right-[-50px] right-auto"/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
