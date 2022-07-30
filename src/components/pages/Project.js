import React from "react";
import Port from "../../images/Project portfolio.png";
import nazakat from "../../images/Nazak2.png";
import "./Project.css";
const Project = () => {
  return (
    <div>
      <div className="main-container" id="Project">
        <div className="projects">
          <h1 className="title">Project</h1>

          <div className="project-center">
            {/* single Project */}
            <div className="single-project">
              <div className="single-project-img">
                <img src={Port} alt="Portfolio img" width="300px" />
              </div>

              <div className="single-project-info">
                <h3>Personal Portfolio</h3>
                <li>
                  <i class="fas fa-arrow-right"></i>&#160; Dynamic personal
                  website with admin panel which contains educations,
                  experiences, skills, projects, contact fields.
                </li>

                <li>
                  <i class="fas fa-arrow-right"></i>&#160; MERN STACK: Mongo DB,
                  ExpressJS, ReactJS, NodeJS.
                </li>

                <li>
                  <i class="fas fa-arrow-right"></i>&#160;{" "}
                  <a href="https://www.jaythesia.me" className="weblink" target="_blank">
                    Link <i className="fa-solid fa-link"></i>
                  </a>
                </li>
              </div>
            </div>

            {/* single Project */}
            <div className="single-project">
              <div className="single-project-img">
                <img src={nazakat} alt="Portfolio img" width="300px" />
              </div>

              <div className="single-project-info">
                <h3>Nazakat: The Finest Food</h3>
                <li>
                  <i class="fas fa-arrow-right"></i>&#160; About Our creative,
                  elevated food🍝 and beverage🍷 program combines satisfying
                  staples with imaginative twists.
                </li>

                <li> <i class="fas fa-arrow-right"></i>&#160; From boozy brunches🕛 and happy hours to family👨‍👨‍👧‍👦 dinners🍽, special occasions and everything in between, NAZAKAT has something for everyone.</li>

                <li>
                  <i class="fas fa-arrow-right"></i>&#160; TECH STACK: Html5, Css,Less,Js,Scss,Bootstrap4
                </li>

                <li>
                  <i class="fas fa-arrow-right"></i>&#160;{" "}
                  <a href="https://jay-thesia.github.io/Nazakat_The_Finest_Food/" className="weblink" target="_blank">
                   
                    Link <i className="fa-solid fa-link"></i>
                  </a>
                </li>
              </div>
            </div>

            {/* single Project */}
            <div className="single-project">
              <div className="single-project-img">
                <img src={Port} alt="Portfolio img" width="300px" />
              </div>

              <div className="single-project-info">
                <h3>Personal Portfolio</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit eveniet itaque magnam hic rerum ipsa impedit
                  similique accusantium, perspiciatis, repellendus beatae
                  praesentium quae pariatur neque architecto tempore, commodi
                  et. Assumenda at ipsam in ratione minima modi commodi
                  molestias atque rem, debitis fuga, reprehenderit accusantium,
                  illo ad dolores officia. Quisquam, maiores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
