import React from "react";
import Particles from "react-tsparticles";
import Typewriter from "typewriter-effect";
import "./Header.css";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Project from "./Project";
import Contact from "./Contact";
import Profile from "../../images/Profile.jpg";

import { loadFull } from "tsparticles";

const Header = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <React.Fragment>
      <div>
        <div className="header" id="header">
          {/* paritcles part */}
          <div className="particle">
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                background: {
                  color: {
                    value: "#bfbdbd",
                    zIndex: -1,
                  },
                },

                style: {
                  height: "420px",
                  width: "100%",
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                  zIndex: {
                    value: -1,
                  },
                },

                fpsLimit: 60,
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    push: {
                      quantity: 40,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#ffffff",
                  },
                  links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                      default: "bounce",
                    },
                    random: false,
                    speed: 10,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 800,
                    },
                    value: 90,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: { min: 1, max: 5 },
                  },
                },
                detectRetina: true,
              }}
            />
          </div>

          {/* type writer wala work */}
          <p className="iAm">I am a </p>
          <div className="fullName">
            <h1 className="typewriter">
              <Typewriter
                options={{
                  background: {
                    color: {
                      value: "#313c70",
                    },
                  },

                  strings: [
                    "Software Engineer💻",
                    "Web Developer👨",
                    "Content Creator🎥",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>

          {/* cv card */}
          <div className="cv">
            <span>
              <b>CV: </b>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="fa-solid fa-file-pdf"
              ></a>
            </span>
          </div>
        </div>
      </div>

      <div className="personalInfo">
        <div className="personalInfo-center">
          <div className="personalInfo-details">
            {/* single info */}
            <div className="info">
              <label htmlFor="name">Full Name:</label>
              <h4>Jay Thesia</h4>
            </div>

            {/* single occupation */}
            <div className="info">
              <label htmlFor="occupation">Occupation:</label>
              <h4>Turn Chai☕ Into Code</h4>
            </div>

            {/* Email */}
            <div className="info">
              <label htmlFor="name">Email:</label>
              <h4>jayengieer.jp2410@gmail.com</h4>
            </div>
          </div>

          <div className="personalInfo-img">
            <img src={Profile} alt="profile img" className="profile" />
          </div>
        </div>
      </div>

      <div>
        <About />
      </div>

      <div>
        <Education />
      </div>

      <div>
        <Project />
      </div>

      <div>
        <Experience />
      </div>

      <div>
        <Contact />
      </div>
    </React.Fragment>
  );
};

export default Header;
