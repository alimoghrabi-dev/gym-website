import { motion } from "framer-motion";
import { trainers } from "../constants";
import { scrollLeft, scrollRight } from "../assets";

const Trainers = () => {
  return (
    <section
      id="trainers"
      className="w-full flex flex-col items-center justify-center mt-6 pb-12">
      <motion.div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-white text-[46px] sm:text-[82px] font-bebas leading-none text-center">
          our professional <br /> <span className="text-[#F00]">trainers</span>
        </h2>
        <p className="font-poppins text-[#e0e0e0] font-normal sm:text-[15px] mt-4 text-[13px] w-[80%] md:w-[50%] text-center">
          Gym workouts offer a versatile and customisable experience, allowing
          everyone to set specific fitness goals.
        </p>
      </motion.div>

      <div
        className="grid-cols-1 grid sm:grid-cols-2 xl:grid-cols-4 items-center gap-12 xl:gap-4 mt-12 relative overflow-auto
        scroll-smooth">
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            className="w-[228px] h-[326px] lg:w-[298px] lg:h-[426px] border border-[#F00] rounded-sm relative">
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-full h-full object-fill rounded-sm"
            />
            <div
              className="absolute left-0 right-0 bottom-0 py-2 bg-black bg-opacity-50 flex flex-col items-center
             gap-1">
              <span className="text-white font-bebas text-[32px]">
                {trainer.name}
              </span>
              <p className="font-poppins text-[#e9e9e9] text-[13px]">
                {trainer.rate}
              </p>
              <img
                src={trainer.stars}
                alt="rating"
                className="object-contain w-[110px] h-8"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;
