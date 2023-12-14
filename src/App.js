import React, { useEffect } from "react";
import About from "./components/about";
import LandingPage from "./components/landingPage";
import WorkPage from "./components/work";
import Contact from "./components/contact";
import AOS from "aos";
import "aos/dist/aos.css";
import WorkM from "./components/workM";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 }, { offset: 50 });
    AOS.refresh();
  }, []);
  return (
    <div>
      <LandingPage />
      <About />
      <WorkPage />
      <Contact />
    </div>
  );
}

export default App;
