import "../css/Body.css";
import "../assets/photos/light-mode.png";
import { useEffect } from "react";
import { introductionAnimation, switchTheme } from "../utils/script";
import Home from "./pageSections/Home";
import MobileNavBar from "./MobileNavbar";
import Projects from "./projects/Projects";
import { Routes, Route } from "react-router-dom";
import CertificationTimeline from "./about/CertificationTimeline";
import ExperienceTimeline from "./about/ExperienceTimeline";
import MoreTechStack from "./tech/MoreTechStack";

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
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/tech-stack" element={<MoreTechStack />}></Route>
        </Routes>

      </main>
      
      <Footer />
    </>
  );
};

export default Body;
