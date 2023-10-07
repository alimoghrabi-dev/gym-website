import { motion } from "framer-motion";
import { contact } from "../assets";

const CTA = () => {
  return (
    <section
      id="contact_us"
      className="w-full flex flex-col md:flex-row items-center justify-center gap-[21px] pb-16 mt-16 relative">
      <motion.div className="w-full md:w-[50%] flex items-center justify-end">
        <img
          src={contact}
          className="w-[505.798px] h-[485.833px] object-fill"
        />
      </motion.div>

      <motion.div className="flex flex-col items-center md:items-start justify-center w-full md:w-[50%] gap-3 mt-12">
        <h2 className="text-white text-[46px] sm:text-[82px] font-bebas leading-none">
          Let’s start gym <br />{" "}
          <span className="text-[#F00]">training now</span>
        </h2>
        <p className="font-poppins text-[#e0e0e0] font-normal sm:text-[14px] mb-5 text-[12px] w-[85%] md:w-[75%]">
          get 50% off the first three classes you sign up for this month any GYM
          membership
        </p>
        <div className="w-full flex items-center justify-center md:justify-start gap-4">
          <input
            type="text"
            className="bg-transparent border border-white rounded-[4px] font-poppins 
            placeholder:font-poppins w-[32.26%] outline-none py-2 pl-4 text-white placeholder:text-[12px] lg:placeholder:text-[15px]"
            placeholder="Enter your Name"
          />
          <input
            type="text"
            className="bg-transparent border border-white rounded-[4px] font-poppins 
            placeholder:font-poppins w-[32.26%] outline-none py-2 pl-4 text-white placeholder:text-[12px] lg:placeholder:text-[15px]"
            placeholder="Phone Number"
          />
        </div>
        <input
          type="email"
          className="bg-transparent border border-white rounded-[4px] font-poppins placeholder:text-[15px] placeholder:font-poppins outline-none py-2 pl-4 w-[67.05%] text-white"
          placeholder="Enter your email"
          required
        />
        <button
          className="hover:bg-[#F00] font-bebas text-center capitalize mt-2 text-[18px] hover:text-white py-[10px] px-[22px]
      rounded-md text-[#F00] bg-transparent border-2 border-[#F00] transition-[1s] duration-500">
          Lest join now
        </button>
      </motion.div>

      <svg
        className="absolute -z-20 top-8 right-[-5%] bottom-0 hidden lg:block"
        xmlns="http://www.w3.org/2000/svg"
        width="1328"
        height="374"
        viewBox="0 0 1328 374"
        fill="none">
        <path
          d="M80.4431 641.513L0.566224 1.49954L1227.42 0.500475L1123.57 673.487L80.4431 641.513Z"
          fill="black"
          stroke="#FF0000"
        />
      </svg>
    </section>
  );
};

export default CTA;
