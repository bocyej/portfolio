import "../css/Body.css";
import "../assets/photos/light-mode.png";
import { useEffect } from "react";
import { introductionAnimation, switchTheme } from "../utils/script";
import About from "./pageSections/About";
import Contact from "./pageSections/Contact";
import Home from "./pageSections/Home";
import MobileNavBar from "./MobileNavbar";
import Projects from "./pageSections/Projects";

const Body = () => {
  useEffect(() => {
    introductionAnimation();
    switchTheme();
  });

  return (
    <>
      <MobileNavBar />

      <main id="content">
        
        <Home />

        <About />

        <Projects />

        <Contact />

      </main>
    </>
  );
};

export default Body;
