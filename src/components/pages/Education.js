import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div>
      <div className="main-container" id="Education">
        <div className="education">
          <h2 className="title">Education</h2>

          <div className="education-center">
            {/* single Education */}
            <div className="single-education">
              <p><b>Information & Technology(2019-2023)</b> </p>
              <p>Lukhdhirji Engineering College</p>
              <p>CGPA: 9.17/10</p>
            </div>

            {/* single Education */}
            <div className="single-education">
            <p><b>12th HSC(2018-19)</b> </p>
              <p>Shraddha Vidya Mandir,Ahmedabad-15</p>
              <p>PR: 83.4</p>
            </div>

            {/* single Education */}
            <div className="single-education">
            <p><b>10th SSC(2016-17)</b> </p>
              <p>Shree Narayana Guru Vidhyala, Ahmedabad-15</p>
              <p>PR: 96.75</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;