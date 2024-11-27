import { asserts } from "../assets/assets";
import { FaTelegram } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-footerBg relative z-16 w-full py-8 px-4 md:px-6 lg:py-16 lg:pl-24 lg:pr-28">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center">
        <img src={asserts.footerLogo} alt="logo" className="w-24 sm:w-32" />

        <div className="flex flex-col md:flex-col lg:flex-row lg:justify-center gap-4 md:gap-6 lg:gap-10 mb-6 lg:mb-0">
          <button
            onClick={() => scrollToSection("about")}
            className="text-white text-sm sm:text-base font-bold hover:text-yellow text-left"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("roadmap")}
            className="text-white text-sm sm:text-base font-bold hover:text-yellow text-left"
          >
            Roadmap
          </button>
          <button
            onClick={() => scrollToSection("faqs")}
            className="text-white text-sm sm:text-base font-bold hover:text-yellow text-left"
          >
            FAQs
          </button>
          <button
            onClick={() => scrollToSection("footer")}
            className="text-white text-sm sm:text-base font-bold hover:text-yellow text-left"
          >
            Contact Us
          </button>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-white text-xl sm:text-2xl font-bold">
            Contact <span className="text-gold">Us</span>
          </h3>
          <div className="flex justify-start lg:justify-between gap-5 text-white mt-4">
            <FaTelegram className="text-2xl sm:text-3xl hover:text-gold hover:rotate-180" />
            <FaRedditAlien className="text-2xl sm:text-3xl hover:text-gold hover:rotate-180" />
            <FiTwitter className="text-2xl sm:text-3xl hover:text-gold hover:rotate-180" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
