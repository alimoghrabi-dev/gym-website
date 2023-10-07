import { motion } from "framer-motion";
import { stars, testi1 } from "../assets";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="w-full flex items-center justify-center flex-col mt-16 pb-8">
      <motion.div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-white text-[46px] sm:text-[82px] font-bebas leading-none text-center">
          What <span className="text-[#F00]">clients say</span> about us
        </h2>
        <p className="font-poppins text-[#e0e0e0] font-normal sm:text-[15px] mt-8 text-[13px] w-[85%] md:w-[75%] text-center">
          {`"I am extremely grateful for the positive impact gym training has had
          on my life; through consistent training, expert guidance from coaches,
          and access to top-notch facilities, I have witnessed a remarkable
          transformation in strength, endurance, and overall fitness levels."`}
        </p>
      </motion.div>

      <motion.div className="w-full flex flex-col items-center justify-center mt-8">
        <img src={stars} alt="rating" />
        <h3 className="text-white font-bebas mt-6 text-[38px]">
          Jhony breaker
        </h3>
        <img
          src={testi1}
          alt="client"
          className="w-[235px] h-[200px] object-contain rounded-md"
        />
      </motion.div>
    </section>
  );
};

export default Testimonials;
