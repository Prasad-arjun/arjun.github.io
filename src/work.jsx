import React from "react";
import "../src/index.css";
import discordWork from "../src/resources/discord.png";
import qouteGenerator from "../src/resources/quoteGenerator.png";

function WorkPage() {
  return (
    <div className="sm:h-[140vh] h-[210vh] w-full bg-[#0a192f] flex justify-center items-start overflow-hidden scroll-smooth" id="work" >
      <div className="h-[80vh] w-[65vw] mt-[4rem] sm:mt-0 " data-aos="zoom-out-up">
        <div className="flex  justify-start items-center headline sm:text-[1.8rem] text-[1.4rem]"  data-aos="zoom-out-up">
          <span className="text-[#64ffda] navText text-[1.6rem]">03. </span>
          <span className="text-[#8892b0] ml-2"> Some Things I’ve Built</span>
          <div className="h-[0.1rem]  sm:w-[15rem]  bg-[#8892b0] sm:ml-4"></div>
        </div>

        <div className="flex justify-center items-center relative top-10 mt-[4rem] sm:flex-row flex-col">
          <div className=" relative ">
            <a href="">
              <img
                src={discordWork}
                className="h-[20rem] sm:w-[35rem]  w-[25rem] "
              />
            </a>
          </div>
          <div className="h-[20rem] w-[25rem] flex flex-col justify-start  sm:items-end items-center mt-[3rem] sm:mt-0"  data-aos="zoom-out-up">
            <span className="text-[#64ffda] navText">Featured Proeject </span>
            <div className="text-[#ccd6f6] text-[1.375rem] headline font-semibold hover:text-[#64ffda]  transition delay-175 duration-300 ease-in mt-2">
              Discord clone
            </div>
            <div className="sm:h-[7rem] sm:w-[28rem] w-[70vw] h-[16vh] bg-[#112240] relative   top-[2rem] text-[1.125] text-[#a3adcc] headline flex  justify-center items-center rounded-lg sm:text-right text-left">
              <div className="w-[67vw]">
                In this build i have tried to recreate the whole Discord website
                using Tailwind & React.js❤️
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center relative top-10 sm:mt-[9rem]  sm:flex-row flex-col-reverse">
          <div className="h-[20rem] w-[25rem] flex flex-col justify-start sm:items-start items-center mt-[4rem] sm:mt-0 z-[1]"  data-aos="zoom-out-up">
            <span className="text-[#64ffda] navText">Featured Proeject </span>
            <div className="text-[#ccd6f6] text-[1.375rem] headline font-semibold hover:text-[#64ffda]  transition delay-175 duration-300 ease-in mt-2">
              Qoute of the day
            </div>
            <div className="sm:h-[7rem] sm:w-[28rem] h-[15vh] w-[72vw] bg-[#112240] relative   top-[2rem] text-[1.125] text-[#a3adcc] headline flex  justify-center items-center rounded-lg sm:text-right text-left">
              <div className="">
                In this build i have builded the random qoute generator with the
                help of
                  <a
                  href="https://rapidapi.com/bitbiscuit-bitbiscuit-default/api/motivational-quotes1/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel"
                  target="_blank"
                  className="hover:text-[#64ffda]  transition delay-175 duration-300 ease-in mt-2 underline decoration-[#64ffda] m-1"
                >
                  Motivational Quotes API
                </a>
                using Tailwind & React.js❤️
              </div>
            </div>
          </div>
          <div className=" z-[0]" >
            <a href="">
              <img
                src={qouteGenerator}
                className="h-[20rem] sm:w-[35rem] w-[25rem] "  data-aos="zoom-out-up"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WorkPage;
