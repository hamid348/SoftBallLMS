import CallMadeIcon from "@mui/icons-material/CallMade";
import React from "react";

function RightLinkButton(className) {
  return (
    <div
      className={`${className} hidden lg:flex bg-white text-black  gap-2 p-1 w-fit rounded-full  items-center`}
    >
      <h1 className="text-xl font-semibold">Free Trial</h1>
      <div className=" bg-black rounded-full p-1 text-white">
        <CallMadeIcon />
      </div>
    </div>
  );
}

export default RightLinkButton;
