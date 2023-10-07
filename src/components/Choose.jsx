import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import { whyUs } from "../constants";

const Choose = () => {
  return (
    <section
      id="service"
      className="w-full flex flex-col items-center justify-center mt-6 py-6">
      <motion.div
        variants={fadeIn("", "spring", 0.5, 0.75)}
        className="w-full flex flex-col items-center justify-center">
        <h2 className="text-white text-[56px] sm:text-[82px] font-bebas">
          why <span className="text-[#F00]">choose us</span>
        </h2>
        <p className="font-poppins text-[#e0e0e0] font-normal sm:text-[15px] text-[13px] w-[80%] md:w-[50%] text-center">
          Gym workouts offer a versatile and customisable experience, allowing
          everyone to set specific fitness goals.
        </p>
      </motion.div>

      <motion.div className="w-full grid grid-cols-1 xl:grid-cols-2 items-center justify-items-center gap-8 mt-12">
        {whyUs.map((me) => (
          <div
            key={me.id}
            className="w-[350px] sm:w-[450px] md:w-[650px] xl:w-[550px] py-8 xl:py-4 border border-[#F00] rounded-sm flex justify-center flex-col items-center">
            <div className="w-[80%] flex flex-col items-start gap-4">
              <span className="text-white text-[26px] font-bebas">{me.id}</span>
              <h4 className="text-[#F00] text-[26px] font-bebas">{me.title}</h4>
              <p className="font-poppins text-[#e0e0e0] font-normal text-[14px]">
                {me.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Choose;
