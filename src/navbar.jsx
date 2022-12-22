 import React from "react";
import logo from "../src/resources/Arjun.svg";
import "../src/index.css";

function Navbar() {
  return (
    <div className="mt-0">
      <nav className="flex justify-between items-center  mr-[2.5rem]">
        <div className="ml-[2.5rem] mt-5">
          <img src={logo} className="w-[5rem]" />
        </div>
        <div className="flex justify-evenly m-1 mt-5 text-[#ccd6f6] navText">
          <a href="" className="m-3">
            <span className="m-2 text-[#64ffda]">01.</span>
            <span className="hover:text-[#64ffda] transition delay-175 duration-300 ease-in ">
              Home
            </span>
          </a>
          <a href="" className="m-3">
            <span className="m-2 text-[#64ffda]">02.</span>
            <span className="hover:text-[#64ffda] transition delay-175 duration-300 ease-in ">
              About
            </span>
          </a>
          <a href="" className="m-3">
            <span className="m-2 text-[#64ffda]">03.</span>
            <span className="hover:text-[#64ffda] transition delay-175 duration-300 ease-in ">
              Work
            </span>
          </a>
          <a href="" className="m-3">
            <span className="m-2 text-[#64ffda]">04.</span>
            <span className="hover:text-[#64ffda] transition delay-175 duration-300 ease-in ">
              Contact
            </span>
          </a>
          <div className="m-3 mt-1">
            <a href="https://drive.google.com/file/d/1iYGeCk_n5oB1Vn5I7MAXZjsrORekhxOI/view?usp=share_link" target="_blank">
              <button className="border border-[#64ffda] rounded-md text-[#64ffda] h-[2.5rem] w-[5rem] hover:bg-[rgba(100,255,218,0.1)] transition delay-175 duration-300 ease-in ">
                Resume
              </button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
