import React from "react";
import "../index.css";



function Contact() {
  return (
    <div
      className="h-[100vh] ] w-[100%] bg-[#0a192f] flex justify-center items-center overflow-hidden scroll-smooth"
      id="contact"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="text-[#64ffda] navText" data-aos="zoom-out-up">
          04. What's Next?
        </div>
        <div
          className="sm:text-[3.243rem] text-[8vw] text-[#ccd6f6] font-bold headline m-4"
          data-aos="zoom-out-up"
        >
          Get In Touch
        </div>
        <div
          className="h-[6rem] sm:w-[38rem]  w-[80vw] text-[1.1rem] text-center text-[#a3adcc]"
          data-aos="zoom-out-up"
        >
          I’m currently looking for any new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I’ll try my
          best to get back to you!
        </div>
        <div className="sm:mt-8 mt-[12vh]" data-aos="zoom-out-up">
          <a href="mailto:arjunprasad3636@gmail.com">
            <button className="h-[3.5rem] w-[8rem] border border-[#64ffda] text-[#64ffda] headline hover:bg-[rgba(100,255,218,0.1)] transition delay-175 duration-300 ease-in rounded">
              Say Hello
            </button>
          </a>
        </div>
        <div className="relative top-[22vh] navText text-[#a3adcc] flex items-center flex-col">
        <p className="">Designed and built by Arjun.</p>
        <p>V.1.1 2023</p>
        </div>
      </div>
      

    </div>
   
  );
}
export default Contact;
      
     
