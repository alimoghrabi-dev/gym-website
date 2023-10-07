import { stats } from "../constants";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen flex flex-col items-start justify-start overflow-x-hidden">
      <motion.div className="z-50 flex w-full items-start justify-center flex-col ml-12 mt-20">
        <h1 className="text-white text-[54px] md:text-[78px] font-semibold uppercase font-bebas leading-none tracking-wide">
          ready to train <br /> <span className="text-[#F00]">YOUR BODY</span>
        </h1>
        <p className="text-[#F1F1F1] font-poppins text-[12px] md:text-[15px] mt-3 font-normal w-[70%] md:w-[45%]">
          Gym training is a structured and disciplined approach to physical
          exercise that focuses on strength, endurance and overall fitness
          improvement.
        </p>
      </motion.div>

      <div className="z-50 flex w-full items-start justify-center flex-col ml-12 mt-12">
        <button
          className="hover:bg-[#F00] font-bebas text-center capitalize text-[21px] hover:text-white py-[9px] px-[29px]
        rounded-md text-[#F00] bg-transparent border-2 border-[#F00] transition-[1s] duration-500">
          Lest join now
        </button>
      </div>

      <div className="w-full flex items-start justify-start z-50 mt-12 ml-0 sm:ml-12">
        {stats.map((stat, index) => (
          <div key={stat.id} className="flex items-center">
            <div className="w-full flex items-center flex-col">
              <span className="text-[#F00] font-bebas text-[32px] font-semibold">
                {stat.stat}
              </span>
              <p className="text-[#d4d4d4] font-poppins text-[12px] md:text-[15px] font-normal text-center">
                {stat.title}
              </p>
            </div>
            {index === stats.length - 2 && (
              <div className="h-[80px] w-1 bg-[#c9c9c9] mx-6 md:mx-10" />
            )}
            {index === stats.length - 3 && (
              <div className="h-[80px] w-1 bg-[#c9c9c9] mx-6 md:mx-10" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
