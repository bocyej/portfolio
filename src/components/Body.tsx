import "../css/Body.css";
import "../assets/photos/light-mode.png";
import { useEffect } from "react";
import { introductionAnimation, switchTheme } from "../utils/script";
import About from "./pageSections/About";
import Contact from "./pageSections/Contact";
import Home from "./pageSections/Home";
import MobileNavBar from "./MobileNavbar";
import Projects from "./projects/Projects";
import { Routes, Route } from "react-router-dom";
import CertificationTimeline from "./about/CertificationTimeline";
import ExperienceTimeline from "./about/ExperienceTimeline";

const Body = () => {
  useEffect(() => {
    introductionAnimation();
    switchTheme();
  });

  return (
    <>
      <MobileNavBar />

      <main id="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/certifications" element={<CertificationTimeline />}></Route>
          <Route path="/experiences" element={<ExperienceTimeline />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>

      </main>
    </>
  );
};

export default Body;
