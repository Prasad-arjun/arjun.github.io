import React from "react";
import "../index.css";
import gitLogo from "../resources/icon-githubC.svg";
import folderLogo from "../resources/icon-folderC.svg";
import openLinkLogo from "../resources/linkButton.svg";
function WorkM() {
  return (
    <>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-y-6 gap-x-24">
        <div className=" lg:w-[22vw] w-[73vw] h-[35vh]  lg:h-[38vh] bg-[#112240] justify-center flex p-0 rounded">
          <div className="lg:w-[18vw] lg:h-[36vh] w-[70vw] h-[30vh] lg:mt-5 mt-10 ">
            <div className="flex justify-between items-center ">
              <a href="" className=" ">
                <img src={folderLogo} className="h-[7.5vh] relative" />
              </a>
              <div className="flex justify-around">
                <a href="">
                  <img
                    src={openLinkLogo}
                    className="h-[3.5vh] relative right-4"
                  />
                </a>
                <a href="">
                  <img src={gitLogo} className="h-[3.5vh]" />
                </a>
              </div>
            </div>
            <div className="mt-6">
              <h1 className="text-2xl font-bold text-[#b8c2e2] mb-2 hover:text-[#64ffda] headline">
                Discord clone
              </h1>
              <p className="text-[#8892b0] sm:text-[1rem] text-[2rem]  leading-normal">
                In this build i have tried to recreate the whole Discord website
                using Tailwind & React.js
              </p>
            </div>
          </div>
        </div>

        <div className=" w-[22vw]  h-[38vh] bg-[#112240] justify-center flex p-0 rounded">
          <div className="w-[18vw] h-[36vh] mt-5 ">
            <div className="flex justify-between items-center ">
              <a href="" className=" ">
                <img src={folderLogo} className="h-[7.5vh] relative" />
              </a>
              <div className="flex justify-around">
                <a href="">
                  <img
                    src={openLinkLogo}
                    className="h-[3.5vh] relative right-4"
                  />
                </a>
                <a href="">
                  <img src={gitLogo} className="h-[3.5vh]" />
                </a>
              </div>
            </div>
            <div className="mt-6">
              <h1 className="text-2xl font-bold text-[#b8c2e2] mb-2 hover:text-[#64ffda] headline">
                TO-DO APP
              </h1>
              <p className="text-[#8892b0] sm:text-[1rem] text-[2rem]  leading-normal">
                In this build i have builded the simple TO-DO app which uses a
                local storage of your browser to remeber the list items using
                Tailwind & React.js
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:w-[22vw] w-[73vw] h-[38vh] bg-[#112240] justify-center flex p-0 rounded">
          <div className="lg:w-[18vw] w-[70vw] h-[36vh] mt-5 ">
            <div className="flex justify-between items-center ">
              <a href="" className=" ">
                <img src={folderLogo} className="h-[7.5vh] relative" />
              </a>
              <div className="flex justify-around">
                <a href="">
                  <img
                    src={openLinkLogo}
                    className="h-[3.5vh] relative right-4"
                  />
                </a>
                <a href="">
                  <img src={gitLogo} className="h-[3.5vh]" />
                </a>
              </div>
            </div>
            <div className="mt-6">
              <h1 className="text-2xl font-bold text-[#b8c2e2] mb-2 hover:text-[#64ffda] headline">
                Taza khabar
              </h1>
              <p className="text-[#8892b0] sm:text-[1rem] text-[2rem]  leading-normal">
                In this build i have builded the news-web app which keep you
                updated with trending news acorss the world and country Tailwind
                & React.js
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[22vw]  h-[38vh] bg-[#112240] justify-center flex p-0 rounded">
          <div className="w-[18vw] h-[36vh] mt-5">
            <div className="flex justify-between items-center ">
              <a href="" className=" ">
                <img src={folderLogo} className="h-[7.5vh] relative" />
              </a>
              <div className="flex justify-around">
                <a href="">
                  <img
                    src={openLinkLogo}
                    className="h-[3.5vh] relative right-4"
                  />
                </a>
                <a href="">
                  <img src={gitLogo} className="h-[3.5vh]" />
                </a>
              </div>
            </div>
            <div className="mt-6">
              <h1 className="text-2xl font-bold text-[#b8c2e2] mb-2 hover:text-[#64ffda] headline">
                Weather App
              </h1>
              <p className="text-[#8892b0] sm:text-[1rem] text-[2rem]  leading-normal">
                In this build i have builded the Weather web-app which will ,
                keep you updated about the current Weather. This Web-app
                usesopen Weather Api to fetch the Weather condition
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[22vw]  h-[38vh] bg-[#112240] justify-center flex p-0 rounded">
          <div className="w-[18vw] h-[36vh] mt-5">
            <div className="flex justify-between items-center ">
              <a href="" className=" ">
                <img src={folderLogo} className="h-[7.5vh] relative" />
              </a>
              <div className="flex justify-around">
                <a href="">
                  <img
                    src={openLinkLogo}
                    className="h-[3.5vh] relative right-4"
                  />
                </a>
                <a href="">
                  <img src={gitLogo} className="h-[3.5vh]" />
                </a>
              </div>
            </div>
            <div className="mt-6">
              <h1 className="text-2xl font-bold text-[#b8c2e2] mb-2 hover:text-[#64ffda] headline">
                Qoute of the day
              </h1>
              <p className="text-[#8892b0] sm:text-[1rem] text-[2rem]  leading-normal">
                In this build i have builded the random qoute generator with the
                help ofMotivational Quotes APIusing Tailwind & React.js
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[22vw]  h-[38vh] bg-[#112240] justify-center flex p-0 rounded">
          <div className="w-[18vw] h-[36vh] mt-5">
            <div className="flex justify-between items-center ">
              <a href="" className=" ">
                <img src={folderLogo} className="h-[7.5vh] relative" />
              </a>
              <div className="flex justify-around">
                <a href="">
                  <img
                    src={openLinkLogo}
                    className="h-[3.5vh] relative right-4"
                  />
                </a>
                <a href="">
                  <img src={gitLogo} className="h-[3.5vh]" />
                </a>
              </div>
            </div>
            <div className="mt-6">
              <h1 className="text-2xl font-bold text-[#b8c2e2] mb-2 hover:text-[#64ffda] headline">
                Upcoming next soon
              </h1>
              <p className="text-[#8892b0] sm:text-[1rem] text-[2rem]  leading-normal"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkM;

{/* 1st start */}
        {/*  <div className="flex justify-center items-center relative top-10 mt-[4rem] sm:flex-row flex-col">
          <div className=" relative ">
            <a
              href="https://github.com/Prasad-arjun/discordClone"
              target="_blank"
            >
              <img
                src={discordWork}
                alt="discord work image"
                className="h-[20rem] sm:w-[35rem]  w-[25rem] "
              />
            </a>
          </div>
          <div
            className="h-[20rem] w-[25rem] flex flex-col justify-start  sm:items-end items-center mt-[3rem] sm:mt-0"
            data-aos="zoom-out-up"
          >
            <span className="text-[#64ffda] navText">Featured Proeject </span>
            <div className="text-[#ccd6f6] text-[1.375rem] headline font-semibold hover:text-[#64ffda]  transition delay-175 duration-300 ease-in mt-2">
              Discord clone
            </div>
            <div className="sm:h-[7rem] sm:w-[32rem] w-[80vw] h-[16vh] bg-[#112240] relative   top-[2rem] text-[1.125] text-[#a3adcc] headline flex  justify-center items-center rounded-lg sm:text-right text-left">
              <div className="w-[67vw] relative right-4">
                In this build i have tried to recreate the whole Discord website
                using Tailwind & React.js❤️
              </div>
            </div>
            <div className="z-[1] relative top-[3rem]">
              <a
                href="https://github.com/Prasad-arjun/discordClone"
                target="_blank"
              >
                <img src={linkButton} className=" h-8" />
              </a>
            </div>
          </div>
        </div> */}
        {/* 1st end */}
        {/* 2nd start */}
        {/* <div className="flex justify-center items-center relative top-10 sm:mt-[9rem]  sm:flex-row flex-col-reverse">
          <div
            className="h-[20rem] w-[25rem] flex flex-col justify-start sm:items-start items-center mt-[4rem] sm:mt-0 z-[1]"
            data-aos="zoom-out-up"
          >
            <span className="text-[#64ffda] navText">Featured Proeject </span>
            <div className="text-[#ccd6f6] text-[1.375rem] headline font-semibold hover:text-[#64ffda]  transition delay-175 duration-300 ease-in mt-2">
              Qoute of the day
            </div>
            <div className="sm:h-[7rem] sm:w-[30rem] h-[15vh] w-[80vw] bg-[#112240] relative   top-[2rem] text-[1.125] text-[#a3adcc] headline flex  justify-center items-center rounded-lg sm:text-right text-left">
              <div className=" w-[67vw] relative right-4">
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
            <div className="z-[1] relative top-[3rem]">
              <a
                href="https://github.com/Prasad-arjun/Qoute-generator"
                target="_blank"
              >
                <img src={linkButton} className=" h-8" />
              </a>
            </div>
          </div>
          <div className=" z-[0]">
            <a href="">
              <img
                src={qouteGenerator}
                alt="qoute generator photo"
                className="h-[20rem] sm:w-[35rem] w-[25rem] "
                data-aos="zoom-out-up"
              />
            </a>
          </div>
        </div> */}
        {/* 2nd end */}
        {/* 3rd start */}
        {/* <div className="flex justify-center items-center relative top-10 mt-[4rem] sm:mt-[9rem] sm:flex-row flex-col">
          <div className=" relative ">
            <a href="https://todo-arjunprasad.web.app/" target="_blank">
              <img
                src={todoWork}
                alt="discord work image"
                className="h-[20rem] sm:w-[35rem]  w-[25rem] "
                data-aos="zoom-out-up"
              />
            </a>
          </div>
          <div
            className="h-[20rem] w-[25rem] flex flex-col justify-start  sm:items-end items-center mt-[3rem] sm:mt-0"
            data-aos="zoom-out-up"
          >
            <span className="text-[#64ffda] navText">Featured Proeject </span>
            <div className="text-[#ccd6f6] text-[1.375rem] headline font-semibold hover:text-[#64ffda]  transition delay-175 duration-300 ease-in mt-2">
              TO-DO APP
            </div>
            <div className="sm:h-[7rem] sm:w-[30rem] w-[70vw] h-[16vh] bg-[#112240] relative  top-[2rem] text-[1.125] text-[#a3adcc] headline flex  justify-center items-center rounded-lg sm:text-right text-left">
              <div className="w-[59vw] relative right-4">
                In this build i have builded the simple TO-DO app which uses a
                local storage of your browser to remeber the list items using
                Tailwind & React.js❤️
              </div>
            </div>
            <div className="z-[1] relative top-[3rem]">
              <a href="https://todo-arjunprasad.web.app/" target="_blank">
                <img src={linkButton} className=" h-8" />
              </a>
            </div>
          </div>
          </div> */}
        {/* 3rd end */}

        {/* 4th start  */}
        {/*  <div className="flex justify-center items-center relative top-12 sm:mt-[9rem] mt-[3rem] sm:flex-row flex-col-reverse">
          <div
            className="h-[20rem] w-[25rem] flex flex-col justify-start sm:items-start items-center mt-[4rem] sm:mt-0 z-[1]"
            data-aos="zoom-out-up"
          >
            <span className="text-[#64ffda] navText">Featured Proeject </span>
            <div className="text-[#ccd6f6] text-[1.375rem] headline font-semibold hover:text-[#64ffda]  transition delay-175 duration-300 ease-in mt-2">
              Weather App
            </div>
            <div className="sm:h-[7rem] sm:w-[30rem] h-[15vh] w-[80vw] bg-[#112240] relative   top-[2rem] text-[1.125] text-[#a3adcc] headline flex  justify-center items-center rounded-lg sm:text-right text-left">
              <div className=" w-[67vw] relative right-4">
                In this build i have builded the Weather web-app which will ,
                keep you updated about the current Weather. This Web-app uses
                <a
                  href="https://openweathermap.org/api"
                  target="_blank"
                  className="hover:text-[#64ffda]  transition delay-175 duration-300 ease-in mt-2 underline decoration-[#64ffda] m-1"
                >
                  open Weather Api
                </a>
                to fetch the Weather condition
              </div>
            </div>
            <div className="z-[1] relative top-[3rem]">
              <a href="https://weatherapp-arjun.web.app/" target="_blank">
                <img src={linkButton} className=" h-8" />
              </a>
            </div>
          </div>
          <div className=" z-[0]">
            <a href="">
              <img
                src={weather}
                alt="qoute generator photo"
                className="h-[20rem] sm:w-[35rem] w-[25rem] "
                data-aos="zoom-out-up"
              />
            </a>
          </div>
          </div> */}
        {/* 4th end */}