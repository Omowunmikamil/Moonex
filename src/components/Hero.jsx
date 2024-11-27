import React from "react";
import { asserts } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative">
      <div className="">
        <img src={asserts.bg} alt="" className="z-2" />
        <img
          src={asserts.foreground}
          alt=""
          className="absolute top-0 z-5 w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
