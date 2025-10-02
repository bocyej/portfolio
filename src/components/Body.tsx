import { useState } from "react";
import "../css/Body.css";
import "../assets/photos/light-mode.png";
import mobileToggleLogo from "../assets/photos/light-mode.png";
import GitHubIcon from "./icons/Github";
import LinkedinIcon from "./icons/Linkedin";
import InstagramIcon from "./icons/Instagram";

function Body() {
  function hideMobileNavModal() {}

  return (
    <>
      {/* <div id="mobile-nav-modal">
        <div className="modal-content">
          <a href="#" onClick={hideMobileNavModal} className="close-icon">
            <i className="fa fa-times"></i>
          </a>
          <ul>
            <li>
              <a href="#about">// About</a>
            </li>
            <li>
              <a href="#projects">// Projects</a>
            </li>
            <li>
              <a href="#contact">// Contact</a>
            </li>
            <li>
              <div id="toggleThemeButtonModal">
                <img
                  id="toggle-theme-logo"
                  src={mobileToggleLogo}
                  alt="Toggle Theme"
                  className="toggle-theme-logo-modal"
                />
              </div>
            </li>
          </ul>
        </div>
      </div> */}

      <main id="content">
        <div id="home">
          <section className="introduction">
            <div className="limited-width">
              <article className="introduction-description">
                <h1>
                  What's Up? I'm <span className="sparkle">Jacob Laurel</span>
                </h1>
                <p>
                  I am a Full Stack Developer and have experience in building
                  applications and websites using Flutter and web technologies.
                  I enjoy coding, so if I think I can create an application,
                  I'll try to do it in my free time. :)
                </p>
                <p>
                  Interested? Check out more information about me and what I do,
                  and you can contact me through my socials.
                </p>
              </article>

              <div className="to-projects">
                <a href="projects.html">
                  <p>
                    See what I do!{" "}
                    <i
                      className="fa fa-long-arrow-right"
                      id="arrow"
                      aria-hidden="true"
                    ></i>
                  </p>
                </a>
              </div>

              <div className="social-media">
                <a
                  href="https://www.linkedin.com/in/laureljacob/"
                  target="_blank"
                >
                  <LinkedinIcon />
                </a>
                <a href="https://github.com/bocyej" target="_blank">
                  <GitHubIcon />
                </a>
                <a href="https://www.instagram.com/bocyej/" target="_blank">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </section>
        </div>

        <div id="about">
          <div className="limited-width">
            <div className="half-screen">
              <section className="label">Work Experience</section>
              <section className="background-rectangle">
                <article className="timeline">
                  <ul>
                    <li className="timeline-circle">
                      <div className="timeline-information">
                        <div className="title-and-year">
                          <h2>Rakso Computer Technology Inc.</h2>
                        </div>
                        <h4 className="role">Intern, Research and Design</h4>
                        <p>January 2025 - April 2025</p>
                      </div>
                    </li>
                    <li className="timeline-circle">
                      <div className="timeline-information">
                        <div className="title-and-year">
                          <h2>Serbiz Inc.</h2>
                        </div>
                        <h4 className="role">
                          Contractual, Full-Stack Flutter Developer
                        </h4>
                        <p>January 2025 - March 2025</p>
                      </div>
                    </li>
                    <li className="timeline-circle">
                      <div className="timeline-information">
                        <div className="title-and-year">
                          <h2>Freelance Web Developer</h2>
                        </div>
                        <p>July 2023 - April 2025</p>
                      </div>
                    </li>
                    <li className="timeline-circle">
                      <div className="timeline-information">
                        <div className="title-and-year">
                          <h2>St. Paul University Manila</h2>
                        </div>
                        <h4 className="role">
                          Contractual, Full-Stack Web Developer
                        </h4>
                        <p>April 2023 - May 2024</p>
                      </div>
                    </li>
                  </ul>
                </article>
              </section>
            </div>
            <div className="half-screen">
              <div className="horizontal-divider"></div>
            </div>
            <div className="half-screen">
              <section className="label">Certifications</section>
              <section className="background-rectangle">
                <article className="timeline">
                  <ul>
                    <li className="timeline-circle">
                      <div className="timeline-information">
                        <div className="title-and-year">
                          <h2>Microsoft Certified: Azure Fundamentals</h2>
                          <h4>2024</h4>
                        </div>
                        <h4 className="view-button">
                          <a
                            href="https://www.credly.com/badges/3771544d-338a-4e86-952b-f11446c8536c"
                            target="_blank"
                            className="light-mode"
                          >
                            View Certification
                          </a>
                        </h4>
                      </div>
                    </li>
                    <li className="timeline-circle">
                      <div className="timeline-information">
                        <div className="title-and-year">
                          <h2>
                            Absolute Introduction to Object Oriented Programming
                            in Java
                          </h2>
                          <h4>2024</h4>
                        </div>
                        <h4 className="view-button">
                          <a
                            href="https://www.udemy.com/certificate/UC-f2418b2b-37f7-47e7-a893-51d924f07523/"
                            target="_blank"
                            className="light-mode"
                          >
                            View Certification
                          </a>
                        </h4>
                      </div>
                    </li>
                    <li className="timeline-circle">
                      <div className="timeline-information">
                        <div className="title-and-year">
                          <h2>Intro To PHP For Web Development</h2>
                          <h4>2024</h4>
                        </div>
                        <h4 className="view-button">
                          <a
                            href="https://www.udemy.com/certificate/UC-b2129d1b-0548-46d9-8e01-1d0320ff3d68/"
                            target="_blank"
                            className="light-mode"
                          >
                            View Certification
                          </a>
                        </h4>
                      </div>
                    </li>
                    <li className="timeline-circle">
                      <div className="timeline-information">
                        <div className="title-and-year">
                          <h2>
                            Introduction to Data Structures & Algorithms in Java
                          </h2>
                          <h4>2024</h4>
                        </div>
                        <h4 className="view-button">
                          <a
                            href="https://www.udemy.com/certificate/UC-eeb1fddf-0e4d-4238-aebf-d0c4e5d6a2a3/"
                            target="_blank"
                            className="light-mode"
                          >
                            View Certification
                          </a>
                        </h4>
                      </div>
                    </li>
                    <li className="timeline-circle">
                      <div className="timeline-information">
                        <div className="title-and-year">
                          <h2>
                            Java 21 Programming Masterclass: Fundamentals for
                            Beginners
                          </h2>
                          <h4>2024</h4>
                        </div>
                        <h4 className="view-button">
                          <a
                            href="https://www.udemy.com/certificate/UC-687d72ab-d0c7-4933-8459-f64acab2a0d1/"
                            target="_blank"
                            className="light-mode"
                          >
                            View Certification
                          </a>
                        </h4>
                      </div>
                    </li>
                    <li className="timeline-circle">
                      <div className="timeline-information">
                        <div className="title-and-year">
                          <h2>SQL - Introduction to SQL with MySQL</h2>
                          <h4>2024</h4>
                        </div>
                        <h4 className="view-button">
                          <a
                            href="https://www.udemy.com/certificate/UC-9a9ff720-0142-4c6c-9004-63a18982debb/"
                            target="_blank"
                            className="light-mode"
                          >
                            View Certification
                          </a>
                        </h4>
                      </div>
                    </li>
                    <li className="timeline-circle">
                      <div className="timeline-information">
                        <div className="title-and-year">
                          <h2>UML and Object-Oriented Design Foundations</h2>
                          <h4>2024</h4>
                        </div>
                        <h4 className="view-button">
                          <a
                            href="https://www.udemy.com/certificate/UC-0ba4bdc6-6934-46d2-abfe-fb0ac7732ace/"
                            target="_blank"
                            className="light-mode"
                          >
                            View Certification
                          </a>
                        </h4>
                      </div>
                    </li>
                    <li className="timeline-circle">
                      <div className="timeline-information">
                        <div className="title-and-year">
                          <h2>
                            Build your Brand with Digital Marketing Planning
                          </h2>
                          <h4>2021</h4>
                        </div>
                        <h4 className="view-button">
                          <a
                            href="https://drive.google.com/file/d/1e54JvnOqbX1JpfxykyvlC3uXQAO8C2Yj/view?usp=sharing"
                            target="_blank"
                            className="light-mode"
                          >
                            View Certification
                          </a>
                        </h4>
                      </div>
                    </li>
                    <li className="timeline-circle">
                      <div className="timeline-information">
                        <div className="title-and-year">
                          <h2>
                            STEAM: Circuits and IOT with Arduino Intermediate
                            Level
                          </h2>
                          <h4>2021</h4>
                        </div>
                        <h4 className="view-button">
                          <a
                            href="https://drive.google.com/file/d/1rv5_L6_Q4a5Y04BV-ooAdu0MCpRtmupG/view?usp=sharing"
                            target="_blank"
                            className="light-mode"
                          >
                            View Certification
                          </a>
                        </h4>
                      </div>
                    </li>
                    <li className="timeline-circle">
                      <div className="timeline-information">
                        <div className="title-and-year">
                          <h2>
                            Microsoft Office Specialist: Excel Associate (Office
                            2019)
                          </h2>
                          <h4>2021</h4>
                        </div>
                        <h4 className="view-button">
                          <a
                            href="https://www.credly.com/badges/4697bcec-80bc-484d-b90c-f883a63c04b6"
                            target="_blank"
                            className="light-mode"
                          >
                            View Certification
                          </a>
                        </h4>
                      </div>
                    </li>
                    <li className="timeline-circle">
                      <div className="timeline-information">
                        <div className="title-and-year">
                          <h2>
                            Microsoft Office Specialist: PowerPoint Associate
                            (Office 2019)
                          </h2>
                          <h4>2021</h4>
                        </div>
                        <h4 className="view-button">
                          <a
                            href="https://www.credly.com/badges/a0c83024-f9b1-4e50-830a-1a9b689355e2"
                            target="_blank"
                            className="light-mode"
                          >
                            View Certification
                          </a>
                        </h4>
                      </div>
                    </li>
                  </ul>
                </article>
              </section>
            </div>
          </div>
        </div>

        <div id="projects">
          <section>
            <div className="limited-width">
              <section id="title">Solo Projects</section>
              <article id="projects-list">
                <ul>
                  <div className="project-card">
                    <div className="default-view">
                      <img
                        src="assets/photos/vital-monitor-thumbnail.png"
                        alt="Project Preview Image"
                        className="project-preview-image"
                      />
                      <h2 className="project-title card-text">Vital Monitor</h2>
                    </div>
                    <a href="#" target="_blank">
                      <div className="card-hover">
                        <h3 className="card-text">Vital Monitor</h3>
                        <p className="card-text">
                          A straightforward, offline-ready application that
                          focuses on tracking your vitals and generate shareable
                          summaries that you can forward to your doctor.
                        </p>
                        <ul className="tools-or-languages-list">
                          <li className="tools-or-languages card-text">
                            Flutter
                          </li>
                          <li className="tools-or-languages card-text">
                            Supabase
                          </li>
                          <li className="tools-or-languages card-text">
                            Android
                          </li>
                          <li className="tools-or-languages card-text">iOS</li>
                        </ul>
                      </div>
                    </a>
                  </div>
                  <div className="project-card">
                    <div className="default-view">
                      <img
                        src="assets/photos/arkibo-thumnail.png"
                        alt="Project Preview Image"
                        className="project-preview-image"
                      />
                      <h2 className="project-title card-text">Arkibo</h2>
                    </div>
                    <a href="#" target="_blank">
                      <div className="card-hover">
                        <h3 className="card-text">Arkibo</h3>
                        <p className="card-text">
                          Social networking platform with modern user interface.
                        </p>
                        <ul className="tools-or-languages-list">
                          <li className="tools-or-languages card-text">
                            Flutter
                          </li>
                          <li className="tools-or-languages card-text">
                            Supabase
                          </li>
                          <li className="tools-or-languages card-text">
                            Android
                          </li>
                          <li className="tools-or-languages card-text">iOS</li>
                        </ul>
                      </div>
                    </a>
                  </div>
                  <div className="project-card">
                    <div className="default-view">
                      <img
                        src="assets/photos/prioritize-thumbnail.png"
                        alt="Project Preview Image"
                        className="project-preview-image"
                      />
                      <h2 className="project-title card-text">Prioritize</h2>
                    </div>
                    <a href="#" target="_blank">
                      <div className="card-hover">
                        <h3 className="card-text">Prioritize</h3>
                        <p className="card-text">
                          Time management application that helps you maximize
                          your productivity. My Google Gemini Competition entry
                          as a solo developer.
                        </p>
                        <ul className="tools-or-languages-list">
                          <li className="tools-or-languages card-text">
                            Flutter
                          </li>
                          <li className="tools-or-languages card-text">
                            Firebase
                          </li>
                          <li className="tools-or-languages card-text">
                            Gemini
                          </li>
                          <li className="tools-or-languages card-text">AI</li>
                          <li className="tools-or-languages card-text">
                            Cloud
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                  <div className="project-card">
                    <div className="default-view">
                      <img
                        src="assets/photos/lobe-website-thumbnail.png"
                        alt="Project Preview Image"
                        className="project-preview-image"
                      />
                      <h2 className="project-title card-text">
                        Lobe Website Mockup
                      </h2>
                    </div>
                    <a
                      href="https://github.com/bocyej/Lobe-Website-Mockup"
                      target="_blank"
                    >
                      <div className="card-hover">
                        <h3 className="card-text">Lobe Website Mockup</h3>
                        <p className="card-text">
                          Lobe Website Mockup using HTML and CSS. The repository
                          is not the official version and was created for
                          learning purposes only.
                        </p>
                        <ul className="tools-or-languages-list">
                          <li className="tools-or-languages card-text">HTML</li>
                          <li className="tools-or-languages card-text">CSS</li>
                        </ul>
                      </div>
                    </a>
                  </div>
                  <div className="project-card">
                    <div className="default-view">
                      <img
                        src="assets/photos/weather-app-thumbnail.png"
                        alt="Project Preview Image"
                        className="project-preview-image"
                      />
                      <h2 className="project-title card-text">
                        Weather App UI Mockup
                      </h2>
                    </div>
                    <a
                      href="https://github.com/bocyej/Weather-App-UI-Mockup"
                      target="_blank"
                    >
                      <div className="card-hover">
                        <h3 className="card-text">Weather App UI Mockup</h3>
                        <p className="card-text">
                          Huawei Weather App mobile UI using Flutter. Created
                          for learning purposes only.
                        </p>
                        <ul className="tools-or-languages-list">
                          <li className="tools-or-languages card-text">
                            Flutter
                          </li>
                          <li className="tools-or-languages card-text">
                            Mobile
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                  <div className="project-card">
                    <div className="default-view">
                      <img
                        src="assets/photos/youtube-mockup-thumbnail.png"
                        alt="Project Preview Image"
                        className="project-preview-image"
                      />
                      <h2 className="project-title card-text">
                        YouTube Mobile UI Mockup
                      </h2>
                    </div>
                    <a
                      href="https://github.com/bocyej/YouTube-Mobile-UI-Mockup"
                      target="_blank"
                    >
                      <div className="card-hover">
                        <h3 className="card-text">YouTube Mobile UI Mockup</h3>
                        <p className="card-text">
                          YouTube mobile UI (dark theme) using flutter. Created
                          for learning purposes only.
                        </p>
                        <ul className="tools-or-languages-list">
                          <li className="tools-or-languages card-text">
                            Flutter
                          </li>
                          <li className="tools-or-languages card-text">
                            Mobile
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                  <div className="project-card">
                    <div className="default-view">
                      <img
                        src="assets/photos/facebook-mockup-thumbnail.png"
                        alt="Project Preview Image"
                        className="project-preview-image"
                      />
                      <h2 className="project-title card-text">
                        Facebook Mobile UI Mockup
                      </h2>
                    </div>
                    <a
                      href="https://github.com/bocyej/Facebook-Mobile-UI-Mockup"
                      target="_blank"
                    >
                      <div className="card-hover">
                        <h3 className="card-text">Facebook Mobile UI Mockup</h3>
                        <p className="card-text">
                          Facebook mobile UI using flutter. Created for learning
                          purposes only.
                        </p>
                        <ul className="tools-or-languages-list">
                          <li className="tools-or-languages card-text">
                            Flutter
                          </li>
                          <li className="tools-or-languages card-text">
                            Mobile
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                  <div className="project-card">
                    <div className="default-view">
                      <img
                        src="assets/photos/twitter-mockup-thumbnail.png"
                        alt="Project Preview Image"
                        className="project-preview-image"
                      />
                      <h2 className="project-title card-text">
                        Twitter Mobile UI Mockup
                      </h2>
                    </div>
                    <a
                      href="https://github.com/bocyej/Twitter-Mobile-UI-Mockup"
                      target="_blank"
                    >
                      <div className="card-hover">
                        <h3 className="card-text">Twitter Mobile UI Mockup</h3>
                        <p className="card-text">
                          Twitter mobile UI (light theme) using flutter. Created
                          for learning purposes only.
                        </p>
                        <ul className="tools-or-languages-list">
                          <li className="tools-or-languages card-text">
                            Flutter
                          </li>
                          <li className="tools-or-languages card-text">
                            Mobile
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </ul>
              </article>
            </div>
          </section>
          <section>
            <div className="limited-width">
              <section id="title" className="collaboration">
                Collaboration Projects
              </section>
              <article id="projects-list">
                <ul>
                  <div className="project-card">
                    <div className="default-view">
                      <img
                        src="assets/photos/silid-thumbnail.png"
                        alt="Project Preview Image"
                        className="project-preview-image"
                      />
                      <h2 className="project-title card-text">
                        Silid: Securing Rooms for Individuals
                      </h2>
                    </div>
                    <a href="#" target="_blank">
                      <div className="card-hover">
                        <h3 className="card-text">
                          Silid: Securing Rooms for Individuals
                        </h3>
                        <p className="card-text">
                          A rental booking and reservation application for
                          students and professionals, accessible for both mobile
                          and web.
                        </p>
                        <ul className="tools-or-languages-list">
                          <li className="tools-or-languages card-text">
                            Flutter
                          </li>
                          <li className="tools-or-languages card-text">
                            Firebase
                          </li>
                          <li className="tools-or-languages card-text">
                            Cloud
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                  <div className="project-card">
                    <div className="default-view">
                      <img
                        src="assets/photos/payo-thumbnail.png"
                        alt="Project Preview Image"
                        className="project-preview-image"
                      />
                      <h2 className="project-title card-text">Payo</h2>
                    </div>
                    <a href="#" target="_blank">
                      <div className="card-hover">
                        <h3 className="card-text">Payo</h3>
                        <p className="card-text">
                          A university guidance counseling scheduling
                          appointment application.
                        </p>
                        <ul className="tools-or-languages-list">
                          <li className="tools-or-languages card-text">
                            Flutter
                          </li>
                          <li className="tools-or-languages card-text">
                            Firebase
                          </li>
                          <li className="tools-or-languages card-text">
                            Cloud
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                  <div className="project-card">
                    <div className="default-view">
                      <img
                        src="assets/photos/ingat-thumbnail.png"
                        alt="Project Preview Image"
                        className="project-preview-image"
                      />
                      <h2 className="project-title card-text">INGAT</h2>
                    </div>
                    <a
                      href="https://crystalline-dewberry-1d8.notion.site/INGAT-The-Future-of-Crime-Awareness-Technology-and-Community-Safety-1ade0822cce34457b0fa9f0cba56a9e0"
                      target="_blank"
                    >
                      <div className="card-hover">
                        <h3 className="card-text">INGAT</h3>
                        <p className="card-text">
                          This project aims to revolutionize community safety by
                          providing crime data location and date and safety
                          alerts through a user-friendly mobile application.
                        </p>
                        <ul className="tools-or-languages-list">
                          <li className="tools-or-languages card-text">
                            Flutter
                          </li>
                          <li className="tools-or-languages card-text">
                            Firebase
                          </li>
                          <li className="tools-or-languages card-text">
                            Google Maps
                          </li>
                          <li className="tools-or-languages card-text">
                            Cloud
                          </li>
                          <li className="tools-or-languages card-text">
                            Notion
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                  <div className="project-card">
                    <div className="default-view">
                      <img
                        src="assets/photos/mkms-thumnail.png"
                        alt="Project Preview Image"
                        className="project-preview-image"
                      />
                      <h2 className="project-title card-text">
                        Multimedia Keys Monitoring System (MKMS)
                      </h2>
                    </div>
                    <a
                      href="https://www.facebook.com/spumanila/posts/look-students-faculty-and-staff-engaged-in-their-institutional-friday-mass-on-ma/802490218584559/"
                      target="_blank"
                    >
                      <div className="card-hover">
                        <h3 className="card-text">
                          Multimedia Keys Monitoring System (MKMS)
                        </h3>
                        <p className="card-text">
                          Ease of use the borrowing and returning of multimedia
                          keys in the ICT of the university.
                        </p>
                        <ul className="tools-or-languages-list">
                          <li className="tools-or-languages card-text">HTML</li>
                          <li className="tools-or-languages card-text">CSS</li>
                          <li className="tools-or-languages card-text">
                            Springboot
                          </li>
                          <li className="tools-or-languages card-text">
                            MySQL
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                  <div className="project-card">
                    <div className="default-view">
                      <img
                        src="assets/photos/liams-thumbnail.png"
                        alt="Project Preview Image"
                        className="project-preview-image"
                      />
                      <h2 className="project-title card-text">
                        Library Attendance Monitoring System (LiAMS)
                      </h2>
                    </div>
                    <a
                      href="https://www.facebook.com/spumanila/posts/look-students-faculty-and-staff-engaged-in-their-institutional-friday-mass-on-ma/802490218584559/"
                      target="_blank"
                    >
                      <div className="card-hover">
                        <h3 className="card-text">
                          Library Attendance Monitoring System (LiAMS)
                        </h3>
                        <p className="card-text">
                          Digitalized the monitoring attendance of the
                          university library visitors.
                        </p>
                        <ul className="tools-or-languages-list">
                          <li className="tools-or-languages card-text">HTML</li>
                          <li className="tools-or-languages card-text">CSS</li>
                          <li className="tools-or-languages card-text">
                            Bootstrap
                          </li>
                          <li className="tools-or-languages card-text">PHP</li>
                          <li className="tools-or-languages card-text">
                            MySQL
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                  <div className="project-card">
                    <div className="default-view">
                      <img
                        src="assets/photos/innotrash-thumbnail.png"
                        alt="Project Preview Image"
                        className="project-preview-image"
                      />
                      <h2 className="project-title card-text">
                        Project: iNNOTRASH
                      </h2>
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=aQQebqGWRwo"
                      target="_blank"
                    >
                      <div className="card-hover">
                        <h3 className="card-text">Project: iNNOTRASH</h3>
                        <p className="card-text">
                          iNNOTRASH is a solution that would motivate people to
                          throw their trash properly and would later lessen the
                          land pollution while earning points which they can use
                          on their next purchases.
                        </p>
                        <ul className="tools-or-languages-list">
                          <li className="tools-or-languages card-text">
                            Python
                          </li>
                          <li className="tools-or-languages card-text">
                            TensorFlow
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </ul>
              </article>
            </div>
          </section>
        </div>

        <div id="contact">
          <section>
            <div className="limited-width">
              <section id="title">Contact</section>
              <article id="contact-area">
                <div className="socials-row">
                  <div className="socials-container">
                    <a href="https://www.github.com/bocyej/" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          className="icon-path"
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        ></path>
                      </svg>
                    </a>
                    <p>
                      GitHub:
                      <span>
                        <a
                          href="https://www.github.com/bocyej/"
                          target="_blank"
                        >
                          @bocyej &#8599;
                        </a>
                      </span>
                    </p>
                  </div>
                  <div className="socials-container">
                    <a href="https://www.instagram.com/bocyej/" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          className="icon-path"
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                        ></path>
                      </svg>
                    </a>
                    <p>
                      Instagram:
                      <span>
                        <a
                          href="https://www.instagram.com/bocyej/"
                          target="_blank"
                        >
                          @bocyej &#8599;
                        </a>
                      </span>
                    </p>
                  </div>
                  <div className="socials-container">
                    <a
                      href="https://www.linkedin.com/in/laureljacob/"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          className="icon-path"
                          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                        ></path>
                      </svg>
                    </a>
                    <p>
                      LinkedIn:
                      <span>
                        <a
                          href="https://www.linkedin.com/in/laureljacob/"
                          target="_blank"
                        >
                          Jacob Laurel &#8599;
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
                <p className="email-paragraph">
                  Or you can email me directly on{" "}
                  <span>
                    <a href="mailto:jacoblaurel.work@gmail.com" target="_blank">
                      jacoblaurel.work@gmail.com &#8599;
                    </a>
                  </span>{" "}
                  if you have any attachments.
                </p>
              </article>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Body;
