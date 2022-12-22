import React  from "react";
import "../src/index.css";
import mainPhoto from "../src/resources/main.svg";


function About() {
  return (
    <div className="sm:h-[110vh] h-[130vh] w-full   flex justify-center  bg-[#0a192f] overflow-hidden scroll-smooth" id="about">
      <div className="h-[65vh] w-[65vw] sm:right-0 relative top-[10rem] sm:top-0  ">
        <div className="flex justify-start items-center headline sm:text-[1.8rem] mb-5 text-[1.5rem]"  data-aos="zoom-out-right">
          <span className="text-[#64ffda] navText text-[1.6rem]">02. </span>
          <span className="text-[#8892b0] ml-2" > About Me</span>
          <div className="h-[0.1rem] sm:w-[15rem] w-[5rem] bg-[#8892b0] ml-4 sm:block"></div>
        </div>
        <div className="flex sm:justify-evenly items-center  justify-center" data-aos="zoom-out-up">
          <div data-aos="zoom-out-up" className="sm:h-[20rem] flex sm:block justify-center items-center flex-col sm:w-[28rem] w-[80vw] relative sm:right-[9rem] sm:text-[1.10rem] text-[#8892b0] headline text-justify ml-4 text-[1rem]">
            <p className="mt-3"  data-aos="zoom-out-up">
              Hello! My name is <span className="text-[#64ffda] ">Arjun</span>{" "}
              and I enjoy creating things that live on the internet. My interest
              in web development started back in 2021 when I decided to try
              editing custom Tumblr themes — turns out hacking together a custom
              reblog button taught me a lot about HTML & CSS!
            </p>
            <p className="mt-3"  data-aos="zoom-out-up">
              Fast-forward to today, I'm sharpening my skills and trying to
              become better everyday at my work. My main focus these days is
              building accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>
            <p className="mt-3"  data-aos="zoom-out-up">
              I was also the part of
              <a href="" className="text-[#64ffda] m-1  hover:underline ">
                Rotary club with BOD post of Community service Director
              </a>
              and under my tenure , I have carry out many projects for the
              betterment of the soicety. Here are a few technologies I’ve been
              working with recently:
            </p>
            <p className="mt-3"  data-aos="zoom-out-up">
              Here are a few technologies I’ve been working with recently:
            </p>
            <p>
              <ul className=" skills text-sm  navText mt-3 "  data-aos="zoom-out-up">
                <li>1.Javascript [ES6+]</li>
                <li>2.HTML & CSS</li>
                <li>3.Tailwind css</li>
                <li>4.React.js❤️</li>
                <li>5.Node.js</li>
                <li>6.Php</li>
              </ul>
            </p>
          </div>
          <div className="relative sm:right-[5rem] flex sm:justify-start sm:items-center top-[27rem]  justify-end sm:top-[2rem] right-[4vh]   "  data-aos="zoom-out-up">
            <div className="sm:h-[20rem] sm:w-[20rem] h-[15rem] w-[15rem] border border-[#64ffda] absolute ">
              <img
                src={mainPhoto}
                className="relative sm:h-[20rem] sm:w-[20rem] bottom-[1rem]  right-[1rem] h-[15rem] w-[15rem] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
export default About;
