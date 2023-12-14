import React from "react";
import "../index.css";
import gitLogo from "../resources/icon-githubC.svg";
import folderLogo from "../resources/icon-folderC.svg";
import openLinkLogo from "../resources/linkButton.svg";
import discordWork from "../resources/discord.png";
import qouteGenerator from "../resources/quoteGenerator.png";
import linkButton from "../resources/linkButton.svg";
import todoWork from "../resources/todo.png";
import weather from "../resources/weatherApp.png";

/* bg-[#0a192f]
text-[#64ffda] */
function WorkPage() {
  return (
    <>
      <div
        className="lg:h-[100] scroll-mt-2  w-[100%]  bg-[#0a192f] flex lg:justify-center lg:items-center justify-center items-start overflow-hidden scroll-smooth"
        id="projects"
      >
        <div className="lg:h-[100vh] h-[240vh] w-[80vw] flex flex-col justify-center items-center">
          <div className=" flex items-start justify-start relative  bottom-10 lg:right-[53vh] ">
            <h3
              className="lg:text-2xl text-3xl text-[#64ffda] navText"
              data-aos="zoom-out-up"
            >
              03.
            </h3>
            <p
              className="lg:text-2xl text-2xl navText text-[#b8c2e2] ml-2"
              data-aos="zoom-out-up"
            >
              Noteworthy Projects
            </p>
          </div>

          <div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-y-6 gap-x-6">
              <div>
                <div
                  className=" lg:w-[22vw] w-[85vw] h-[40vh]  lg:h-[41vh] bg-[#112240] justify-center flex p-0 rounded"
                  data-aos="zoom-out-up"
                >
                  <div className="lg:w-[18vw] lg:h-[40vh] w-[70vw] h-[30vh] lg:mt-5 mt-10 ">
                    <div className="flex justify-between items-center ">
                      <a
                        href="https://github.com/Prasad-arjun/BeNeutral"
                        target="_blank"
                        className=" "
                      >
                        <img
                          src={folderLogo}
                          className="lg:h-[7.5vh] h-[5vh] relative"
                        />
                      </a>
                      <div className="flex justify-around">
                        <a href="https://benuetral2.web.app/" target="_blank">
                          <img
                            src={openLinkLogo}
                            className="lg:h-[3.5vh] h-[3vh] relative right-4"
                          />
                        </a>
                        <a
                          href="https://github.com/Prasad-arjun/BeNeutral"
                          target="_blank"
                        >
                          <img src={gitLogo} className="lg:h-[3.5vh] h-[3vh]" />
                        </a>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h1 className="lg:text-2xl text-xl font-bold text-[#b8c2e2] mb-2 hover:text-[#64ffda] headline">
                        BeNuetral
                      </h1>
                      <p className="text-[#8892b0] text-[1.3rem] lg:text-[1.1rem]  leading-normal">
                        BeNuetral helps individuals measure their carbon
                        footprint and provides personalized suggestions to
                        reduce it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className=" lg:w-[22vw] w-[85vw] h-[40vh]  lg:h-[41vh] bg-[#112240] justify-center flex p-0 rounded"
                  data-aos="zoom-out-up"
                >
                  <div className="lg:w-[18vw] lg:h-[40vh] w-[70vw] h-[30vh] lg:mt-5 mt-10 ">
                    <div className="flex justify-between items-center ">
                      <a
                        href="https://github.com/Prasad-arjun/Taza-khabar"
                        target="_blank"
                        className=" "
                      >
                        <img
                          src={folderLogo}
                          className="lg:h-[7.5vh] h-[5vh] relative"
                        />
                      </a>
                      <div className="flex justify-around">
                        <a
                          href="https://taza-khabar-arjun.firebaseapp.com/"
                          target="_blank"
                        >
                          <img
                            src={openLinkLogo}
                            className="lg:h-[3.5vh] h-[3vh] relative right-4"
                          />
                        </a>
                        <a
                          href="https://github.com/Prasad-arjun/Taza-khabar"
                          target="_blank"
                        >
                          <img src={gitLogo} className="lg:h-[3.5vh] h-[3vh]" />
                        </a>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h1 className="lg:text-2xl text-xl font-bold text-[#b8c2e2] mb-2 hover:text-[#64ffda] headline">
                        Taza khabar
                      </h1>
                      <p className="text-[#8892b0] text-[1.3rem] lg:text-[1.1rem]  leading-normal">
                        In this build i have builded the news web app which will
                        keep you updated with trending news around the world and
                        country
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className=" lg:w-[22vw] w-[85vw] h-[40vh]  lg:h-[41vh] bg-[#112240] justify-center flex p-0 rounded"
                  data-aos="zoom-out-up"
                >
                  <div className="lg:w-[18vw] lg:h-[40vh] w-[70vw] h-[35vh] lg:mt-5 mt-10 ">
                    <div className="flex justify-between items-center ">
                      <a
                        href="https://github.com/Prasad-arjun/TO-DO-AP"
                        target="_blank"
                        className=" "
                      >
                        <img
                          src={folderLogo}
                          className="lg:h-[7.5vh] h-[5vh] relative"
                        />
                      </a>
                      <div className="flex justify-around">
                        <a
                          href="https://todo-arjunprasad.web.app/"
                          target="_blank"
                        >
                          <img
                            src={openLinkLogo}
                            className="lg:h-[3.5vh] h-[3vh] relative right-4"
                          />
                        </a>
                        <a
                          href="https://github.com/Prasad-arjun/TO-DO-AP"
                          target="_blank"
                        >
                          <img src={gitLogo} className="lg:h-[3.5vh] h-[3vh]" />
                        </a>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h1 className="lg:text-2xl text-xl font-bold text-[#b8c2e2] mb-2 hover:text-[#64ffda] headline">
                        TO-DO APP
                      </h1>
                      <p className="text-[#8892b0] text-[1.27rem] lg:text-[1.1rem]  leading-normal">
                        In this build i have builded the simple TO-DO app which
                        uses a local storage of your browser to remeber the list
                        items using Tailwind & React.js
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className=" lg:w-[22vw] w-[85vw] h-[40vh]  lg:h-[41vh] bg-[#112240] justify-center flex p-0 rounded"
                  data-aos="zoom-out-up"
                >
                  <div className="lg:w-[18vw] lg:h-[40vh] w-[70vw] h-[30vh] lg:mt-5 mt-10 ">
                    <div className="flex justify-between items-center ">
                      <a
                        href="https://github.com/Prasad-arjun/Weather-ap"
                        target="_blank"
                        className=" "
                      >
                        <img
                          src={folderLogo}
                          className="lg:h-[7.5vh] h-[5vh] relative"
                        />
                      </a>
                      <div className="flex justify-around">
                        <a
                          href="https://weatherapp-arjun.web.app/"
                          target="_blank"
                        >
                          <img
                            src={openLinkLogo}
                            className="lg:h-[3.5vh] h-[3vh] relative right-4"
                          />
                        </a>
                        <a
                          href="https://github.com/Prasad-arjun/Weather-ap"
                          target="_blank"
                        >
                          <img src={gitLogo} className="lg:h-[3.5vh] h-[3vh]" />
                        </a>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h1 className="lg:text-2xl text-xl font-bold text-[#b8c2e2] mb-2 hover:text-[#64ffda] headline">
                        Weather App
                      </h1>
                      <p className="text-[#8892b0] text-[1.3rem] lg:text-[1.1rem]  leading-normal">
                        In this build i have builded the Weather web-app which
                        will,keep you updated about the current Weather.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
             
              <div>
                <div
                  className=" lg:w-[22vw] w-[85vw] h-[40vh]  lg:h-[41vh] bg-[#112240] justify-center flex p-0 rounded"
                  data-aos="zoom-out-up"
                >
                  <div className="lg:w-[18vw] lg:h-[40vh] w-[70vw] h-[30vh] lg:mt-5 mt-10 ">
                    <div className="flex justify-between items-center ">
                      <a
                        href="https://github.com/Prasad-arjun/gossipHubWithGoogleAuthenticator"
                        target="_blank"
                        className=" "
                      >
                        <img
                          src={folderLogo}
                          className="lg:h-[7.5vh] h-[5vh] relative"
                        />
                      </a>
                      <div className="flex justify-around">
                        <a href="#">
                          <img
                            src={openLinkLogo}
                            className="lg:h-[3.5vh] h-[3vh] relative right-4"
                          />
                        </a>
                        <a
                          href="https://github.com/Prasad-arjun/gossipHubWithGoogleAuthenticator"
                          target="_blank"
                        >
                          <img src={gitLogo} className="lg:h-[3.5vh] h-[3vh]" />
                        </a>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h1 className="lg:text-2xl text-xl font-bold text-[#b8c2e2] mb-2 hover:text-[#64ffda] headline">
                        Gossip Hub
                      </h1>
                      <p className="text-[#8892b0] text-[1.3rem] lg:text-[1.1rem]  leading-normal">
                        A Chat room web application. This project features a
                        seamless connection with two options for users to access
                        the app, either through registration or their Google
                        account.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
               <div>
                <div
                  className=" lg:w-[22vw] w-[85vw] h-[40vh]  lg:h-[41vh] bg-[#112240] justify-center flex p-0 rounded"
                  data-aos="zoom-out-up"
                >
                  <div className="lg:w-[18vw] lg:h-[40vh] w-[70vw] h-[30vh] lg:mt-5 mt-10 ">
                    <div className="flex justify-between items-center ">
                      <a
                        href="https://github.com/Prasad-arjun/discordClone"
                        target="_blank"
                        className=" "
                      >
                        <img
                          src={folderLogo}
                          className="lg:h-[7.5vh] h-[5vh] relative"
                        />
                      </a>
                      <div className="flex justify-around">
                        <a href="">
                          <img
                            src={openLinkLogo}
                            className="lg:h-[3.5vh] h-[3vh] relative right-4"
                          />
                        </a>
                        <a
                          href="https://github.com/Prasad-arjun/discordClone"
                          target="_blank"
                        >
                          <img src={gitLogo} className="lg:h-[3.5vh] h-[3vh]" />
                        </a>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h1 className="lg:text-2xl text-xl font-bold text-[#b8c2e2] mb-2 hover:text-[#64ffda] headline">
                        Discord clone
                      </h1>
                      <p className="text-[#8892b0] text-[1.3rem] lg:text-[1.1rem]  leading-normal">
                        In this build i have tried to recreate the whole Discord
                        website using Tailwind & React.js
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WorkPage;
