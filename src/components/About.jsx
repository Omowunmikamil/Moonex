import { asserts } from "../assets/assets";
import Table from "./Table";

const About = () => {
  return (
    <div className="relative h-screen">
      <img src={asserts.aboutBg} alt="" className="z-2 h-screen w-full" />

      <Table />
    </div>
  );
};

export default About;
