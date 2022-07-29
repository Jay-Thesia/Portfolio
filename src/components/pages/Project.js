import React from "react";
import Port from "../../images/Project portfolio.png";
import './Project.css'
const Project = () => {
  return (
    <div>
      <div className="main-container" id="Project">
        <div className="projects">
          <h2 className="title">Project</h2>

          <div className="project-center">
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

            {/* single Project */}
            <div className="single-project">
              <div className="single-project-img">
                <img src={Port} alt="Portfolio img" width="300px"/>
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
