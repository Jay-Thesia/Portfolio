import React, { useState } from "react";
import "./Navbar.css";

//link is like anchore tag
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const actToggle = () => {
    setToggle(!toggle);
  };

  const closeNavbar = () => {
    if (toggle == true) {
      setToggle(false);
    }
  };
  return (
    <div>
      <div className="nav-container">
        <nav>
          <div className="logoBtn">
            <Link to="/">
              <img src={Logo} alt="Logo" className="imageLogo" />
            </Link>

            <div className="btn" onClick={actToggle}>
              <div className={toggle ? "bar1 animatedBar" :"bar1"}></div>
              <div className={toggle ? "bar2 animatedBar":"bar2"}></div>
              <div className={toggle ? "bar3 animatedBar" :"bar3"}></div>
            </div>
          </div>

          <div className="links-container">
            <ul className={toggle ? "new-links links" : "links"} onClick={closeNavbar}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
              <a href="#Education">Education</a>
              </li>
              <li>
                <a href="#Experience">Experience</a>
              </li>
              <li>
                <a href="#Project">Project</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
             
              <li>
                <Link to="/">Admin</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
