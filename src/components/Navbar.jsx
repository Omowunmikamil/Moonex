import { useState, useEffect } from "react";
import { asserts } from "../assets/assets";
import { IoClose } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrollEffect, setScrollEffect] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollEffect(true);
      } else {
        setScrollEffect(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setVisible(false); // Close the mobile menu after navigation
    }
  };

  return (
    <div
      className={`fixed top-0 w-full z-10 ${
        scrollEffect ? "bg-opacity-70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto pt-4 md:pt-8 pb-3 px-4 md:px-6 lg:px-0 flex justify-between items-center ">
        <a href="#home">
          <img src={asserts.logo} alt="logo" className="w-32 md:w-44" />
        </a>

        <ul className="lg:flex gap-4 text-base font-bold hidden text-white">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-yellow1"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-yellow1"
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("roadmap")}
              className="hover:text-yellow1"
            >
              Roadmap
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("faqs")}
              className="hover:text-yellow1"
            >
              FAQs
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("footer")}
              className="hover:text-yellow1"
            >
              Contact Us
            </button>
          </li>
        </ul>
        <div className="">
          <button className="bg-gradient-to-r from-gold to-yellow1 text-btnText text-sm font-bold py-2 px-6 rounded-full hidden animate-bounce lg:flex">
            Connect Wallet
          </button>
        </div>
        <RiMenu4Line
          onClick={() => setVisible(true)}
          className="text-3xl text-gold lg:hidden z-10"
        />

        {/* Mobile Nav */}
        <div
          className={`absolute left-0 right-0 top-0 flex flex-col py-10 pl-6 gap-4 bg-footerBg z-20 bg-opacity-70 backdrop-blur-md lg:hidden overflow-hidden transition-all ${
            visible ? "w-full" : "hidden"
          }`}
        >
          <IoClose
            onClick={() => setVisible(false)}
            className="text-3xl text-gold"
          />
          <button
            onClick={() => {
              scrollToSection("home");
              setVisible(false);
            }}
            className="text-white hover:text-yellow1 text-left"
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollToSection("about");
              setVisible(false);
            }}
            className="text-white hover:text-yellow1 text-left"
          >
            About Us
          </button>
          <button
            onClick={() => {
              scrollToSection("roadmap");
              setVisible(false);
            }}
            className="text-white hover:text-yellow1 text-left"
          >
            Roadmap
          </button>
          <button
            onClick={() => {
              scrollToSection("faqs");
              setVisible(false);
            }}
            className="text-white hover:text-yellow1 text-left"
          >
            FAQs
          </button>
          <button
            onClick={() => {
              scrollToSection("footer");
              setVisible(false);
            }}
            className="text-white hover:text-yellow1 text-left"
          >
            Contact Us
          </button>

          <button
            className="w-3/4 md:w-4/12 bg-gradient-to-r from-gold to-yellow1 text-btnText text-sm font-bold py-2 px-6 mt-4 rounded-full hover:bg-yellow"
            onClick={() => setVisible(false)}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
