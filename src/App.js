import React ,{useEffect} from "react";
import About from "./about";
import LandingPage from "./landingPage";
import Navbar from "./navbar";
import WorkPage from "./work";
import Contact from "../src/contact";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({duration:2000},{offset:50});
    AOS.refresh();
  }, []);
  return (
    <div>
      <LandingPage />
      <About />
      <WorkPage />
       <Contact/> 
    </div>
  );
}

export default App;
