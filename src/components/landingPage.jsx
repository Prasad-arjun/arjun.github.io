import React from "react";
import "../index.css";
import instagram from "../resources/instagram.svg";
import twitter0 from "../resources/twitter0.svg";
import linkdein from "../resources/linkdein.svg";
import Navbar2 from "../components/navbar2";

function LandingPage() {
  return (
    <div className="sm:h-[100vh]  w-[100%] h-[100vh] bg-[#0a192f] overflow-hidden  scroll-smooth" id="home">
    <Navbar2/>
      <div className="sm:absolute relative flex left-3 justify-center items-center top-16  ">
        <div className="sm:h-[50vh] sm:w-[55vw] h-[60vh] w-[90vw] relative sm:top-[5rem] sm:left-[15rem] flex flex-col justify-center ">
          <div>
            <span className="text-[#64ffda] navText ml-1" >Hi ,my name is </span>
          </div>
          <div className="sm:mb-[-1.5rem] mt-1.5"  data-aos="zoom-out-down" >
            <span className="headline sm:text-[4rem] text-[2rem] text-[#ccd6f6] font-bold">
              Arjun Prasad.
            </span>
          </div>

          <div className="text-[#8892b0] sm:text-[4rem] text-[2rem] font-bold leading-normal mb-4 "  data-aos="zoom-out-down" >
            <span>I build things for the web.</span>
          </div>
          <div className="headline text-[#8892b0]  "  data-aos="zoom-out-up" >
            <div>I'm BCA science student 👨‍🎓, specializing web-Development.</div>
            <div>I ❤️ to explore out the new things.</div>
          </div>
          <div className="mt-[2.5rem] "  data-aos="zoom-out-up" >
            <a href="mailto:arjunprasad3636@gmail.com">
              
              <button className="border border-[#64ffda] rounded-md text-[#64ffda] h-[2.5rem] w-[10rem] hover:bg-[rgba(100,255,218,0.1)] transition delay-175 duration-300 ease-in navText">
                Say Hello !
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-between items-center fixed hidden ">
        <div className=" flex flex-col relative top-[26rem] justify-center items-center left-[3rem] ">
          <a href="https://instagram.com/prasad_arjun.27?igshid=YmMyMTA2M2Y=" target="_blank">
            <img
              src={instagram}
              className="w-[3rem]  transition delay-175 duration-300 ease-in hover:fill-white-500"
            />
          </a>

          <a href="">
            <img
              src={twitter0}
              className="w-[3rem]  transition delay-175 duration-300 ease-in  "
            />
          </a>
          <a href="https://www.linkedin.com/in/arjun-prasad-080469230/"   target="_blank">
            <img
              src={linkdein}
              className="w-[3rem]  transition delay-175 duration-300 ease-in  "
            />
          </a>
          <div className="h-[6rem] w-[0.1rem] bg-white  top-[1.5rem]  relative"></div>
        </div>
        <div className=" hidden lg:block relative left-[80rem] ">
          <div className="flex relative">
            <a
              href="mailto:arjunprasad3636@gmail.com"
              className=" text-[#8892b0] hover:text-[#64ffda] transition delay-175 duration-300 ease-in rotate-90 relative top-[24rem] left-[1.8rem]"
            >
              arjunprasad3636@gamil.com
            </a>
          </div>

          <div className="h-[6rem] w-[0.1rem] bg-white relative  top-[31.5rem] left-[8rem]"></div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
