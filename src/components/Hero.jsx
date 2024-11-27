import { asserts } from "../assets/assets";
import Content from "./Content";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="">
        <img src={asserts.bg} alt="" className="z-2 h-screen" />
        <img
          src={asserts.foreground}
          alt=""
          className="absolute top-0 z-5 w-full h-screen"
        />
      </div>

      <Content />
    </div>
  );
};

export default Hero;
