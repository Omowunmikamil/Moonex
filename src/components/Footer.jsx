import React from "react";
import { asserts } from "../assets/assets";
import { Link } from "react-router-dom";
import { FaTelegram } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-footerBg relative z-16 w-full py-16 px-28 h-[250px]">
      <div className="flex justify-between items-center">
        <img src={asserts.footerLogo} alt="logo" className="w-24 sm:w-32" />

        <div className="flex justify-center gap-10">
          <Link
            to="/about"
            className="text-white text-base font-bold hover:text-yellow"
          >
            About Us
          </Link>
          <Link
            to="/roadmap"
            className="text-white text-base font-bold hover:text-yellow"
          >
            Roadmap
          </Link>
          <Link
            to="/faqs"
            className="text-white text-base font-bold hover:text-yellow"
          >
            FAQs
          </Link>
          <Link
            to="/footer"
            className="text-white text-base font-bold hover:text-yellow"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-white text-2xl font-bold">
            Contact <span className="text-gold">Us</span>
          </h3>
          <div className="flex justify-between text-white mt-4">
            <FaTelegram className="text-3xl hover:text-gold hover:rotate-180" />
            <FaRedditAlien className="text-3xl hover:text-gold hover:rotate-180" />
            <FiTwitter className="text-3xl hover:text-gold hover:rotate-180" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
