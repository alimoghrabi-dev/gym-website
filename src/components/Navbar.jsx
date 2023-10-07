import { icon, menu, close } from "../assets";
import { navLinks } from "../constants";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ active, setActive }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full h-20 border-b z-[1000] border-b-[#E2E2E2] flex justify-between items-center backdrop-blur-sm relative">
      <div className="w-[35%] sm:w-[25%] h-full flex items-center justify-center">
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

      <div className="flex-1 h-full hidden md:flex items-center justify-evenly">
        {navLinks.map((link) => (
          <a
            key={link.id}
            onClick={() => setActive(link.title)}
            href={`#${link.id}`}
            className={`${
              active === link.title ? "text-[#F00]" : "text-white"
            } transition-all duration-150 text-center font-bebas text-[21px] capitalize font-medium hover:scale-[1.05]`}>
            {link.title}
          </a>
        ))}
      </div>

      <div className="w-[25%] h-full hidden md:flex items-center justify-center">
        <button
          className="bg-[#F00] font-bebas text-center capitalize text-[21px] text-white py-[9px] px-[29px]
        rounded-md hover:text-[#F00] hover:bg-transparent border-2 border-[#F00] transition-[1s] duration-500">
          started now
        </button>
      </div>

      <img
        src={toggle ? close : menu}
        alt={toggle ? "closeLine" : "Menu"}
        onClick={() => setToggle(!toggle)}
        className={`flex md:hidden w-12 h-12 = object-contain cursor-pointer mr-8 transform hover:scale-105 transition-all 
        duration-150 ${toggle ? "rotate-180" : "rotate-0"}`}
      />
      {toggle && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: toggle ? "0%" : "-100%" }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
          className="flex md:hidden flex-col items-center justify-center gap-5 absolute bg-white bg-opacity-40
        top-[100%] right-0 border border-[#E2E2E2] menu-container px-6 py-5 menu-container">
          {navLinks.map((link) => (
            <a
              key={link.id}
              onClick={() => setActive(link.title)}
              href={`#${link.id}`}
              className={`${
                active === link.title ? "text-[#F00]" : "text-white"
              } transition-all duration-150 text-center font-bebas text-[21px] capitalize font-medium hover:scale-[1.05]`}>
              {link.title}
            </a>
          ))}
          <button
            className="bg-[#F00] font-bebas text-center capitalize text-[21px] text-white py-[9px] px-[29px]
        rounded-md hover:text-[#F00] hover:bg-transparent border-2 border-[#F00] transition-[1s] duration-500">
            started now
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
