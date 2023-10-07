import { experienceSection } from "../assets";

const Experience = () => {
  return (
    <section className="mt-[8rem] w-full flex items-center justify-center pb-[8rem]">
      <div className="w-full lg:w-[92%] flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start gap-8">
          <h2 className="text-white text-[52px] sm:text-[82px] font-bebas leading-none text-center lg:text-start">
            why we have a lot of <br />
            <span className="text-[#F00]"> experience</span>
          </h2>

          <p className="font-poppins w-[80%] text-center lg:text-start lg:w-full text-[#e0e0e0] font-normal md:text-[14px] text-[12px]">
            In quisque nunc dictumst etiam pellentesque et. Vel malesuada diam
            lorem tellus. Amet mauris feugiat ipsum natoque odio donec. Sit at
            lacus consequat justo odio condimentum dui. Faucibus id blandit
            feugiat mi tellus sit etiam donec aliquam. Dictumst egestas ut
            facilisi vel. Sem consequat fermentum pellentesque risus purus quis
            gravida. Nulla porttitor ultrices facilisis non commodo diam morbi
            cursus eu. Semper ut in mauris gravida id cursus urna. Magnis
            vulputate orci risus felis eget lectus morbi. Et cursus mauris
            condimentum pretium arcu sed dignissim.
          </p>

          <button
            className="hover:bg-[#F00] font-bebas text-center capitalize text-[21px] hover:text-white py-[9px] px-[29px]
          rounded-md text-[#F00] bg-transparent border-2 border-[#F00] transition-[1s] duration-500">
            about us
          </button>
        </div>

        <div className="w-full lg:w-[50%] flex items-center mt-[8rem] lg:mt-0 justify-center lg:justify-end">
          <div className="w-[394px] h-[406px] relative">
            <img
              src={experienceSection}
              alt="pull-up"
              className="w-full h-full object-contain"
            />
            <div className="w-[304px] h-[366px] border border-[#F00] top-[-10%] left-[0%] absolute -z-10" />
            <div className="w-[304px] h-[366px] border border-[#CCC] bottom-[-10%] right-[0%] absolute -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
