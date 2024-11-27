import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { asserts } from "../assets/assets";
import { IoClose } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrollEffect, setScrollEffect] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 50) {
        setScrollEffect(true);
      } else {
        setScrollEffect(false);
      }
    };
    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-10 ${
        scrollEffect ? "bg-opacity-70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto pt-8 pb-3 px-4 md:px-0 flex justify-between items-center ">
        <Link to="/">
          <img src={asserts.logo} alt="logo" className="w-32 md:w-44" />
        </Link>

        <ul className="sm:flex gap-4 text-base font-bold hidden text-white">
          <NavLink to="/" className="hover:text-yellow1">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-yellow1">
            About Us
          </NavLink>
          <NavLink to="/roadmap" className="hover:text-yellow1">
            Roadmap
          </NavLink>
          <NavLink to="/faqs" className="hover:text-yellow1">
            FAQs
          </NavLink>
          <NavLink to="/footer" className="hover:text-yellow1">
            contact Us
          </NavLink>
        </ul>
        <div className="">
          <button className="bg-gradient-to-r from-gold to-yellow1 text-btnText text-sm font-bold py-2 px-6 rounded-full hidden md:flex animate-bounce">
            Connect Wallet
          </button>
        </div>
        <RiMenu4Line
          onClick={() => setVisible(true)}
          className="text-3xl text-gold lg:hidden z-10"
        />

        {/* Mobile Nav */}
        <div
          className={`fixed right-0 top-0 flex flex-col py-10 pl-6 gap-4 bg-footerBg z-20 bg-opacity-60 backdrop-blur-lg lg:hidden overflow-hidden transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <IoClose
            onClick={() => setVisible(false)}
            className="text-3xl text-gold"
          />

          <NavLink
            to="/"
            className="text-white hover:text-yellow1"
            onClick={() => setVisible(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-white hover:text-yellow1"
            onClick={() => setVisible(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/roadmap"
            className="text-white hover:text-yellow1"
            onClick={() => setVisible(false)}
          >
            Roadmap
          </NavLink>
          <NavLink
            to="/faqs"
            className="text-white hover:text-yellow1"
            onClick={() => setVisible(false)}
          >
            FAQs
          </NavLink>
          <NavLink
            to="/footer"
            className="text-white hover:text-yellow1"
            onClick={() => setVisible(false)}
          >
            contact Us
          </NavLink>

          <button
            className="w-7/12 bg-gradient-to-r from-gold to-yellow1 text-btnText text-sm font-bold py-2 px-6 rounded-full md:flex hover:bg-yellow"
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
