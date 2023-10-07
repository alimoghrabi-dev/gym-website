import { motion } from "framer-motion";
import { icon } from "../assets";
import { navLinks } from "../constants";
import { useState } from "react";

const Footer = ({ active, setActive }) => {
  return (
    <footer className="w-full flex flex-col items-center mt-12">
      <motion.div className="w-full flex flex-col items-center justify-center gap-6">
        <div className="w-full flex items-center justify-center">
          <img
            onClick={(e) => {
              e.preventDefault();
              setActive("");
              window.location.href = "/";
            }}
            src={icon}
            alt="icon"
            className="w-[120.251px] h-[32px] object-contain cursor-pointer ml-4 sm:ml-0"
          />
        </div>
        <div className="w-full flex items-center justify-center gap-5 sm:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.id}
              onClick={() => setActive(link.title)}
              href={`#${link.id}`}
              className={`${
                active === link.title ? "text-[#F00]" : "text-white"
              } transition-all duration-150 text-center font-bebas text-[17px] sm:text-[21px] capitalize font-medium hover:scale-[1.05]`}>
              {link.title}
            </a>
          ))}
        </div>
      </motion.div>

      <div className="mt-12 w-full border-t-2 border-[#484848] flex items-center justify-center py-4">
        <div className="w-[92%] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="flex-1 flex items-center gap-4">
            <span className="text-[#FFF] text-[12px] font-poppin cursor-pointer">
              Privacy
            </span>
            <div className="w-[1px] h-[12px] bg-white" />
            <span className="text-[#FFF] text-[12px] font-poppins cursor-pointer">
              Terms and Condition
            </span>
          </div>

          <p className="text-[#FFF] text-[12px] font-poppins">
            Ⓒ 2023 All rights reserved. IronGym Company
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
