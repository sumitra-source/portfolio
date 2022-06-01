import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#faf3dd]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#5e6472]">
          Sumitra Shrestha
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#565f7c]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#1e2027] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="text- bg-[#b5c2d0] group border-1 px-6 py-3 my-2 flex items-center hover:bg-[#94d1d9] hover:border-[#495b5b]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
