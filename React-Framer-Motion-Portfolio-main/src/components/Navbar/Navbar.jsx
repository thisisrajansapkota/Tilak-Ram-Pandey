import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import fbImg from "../../assets/icons/fb.png";
import moonIcon from "../../assets/moon.svg";
import sunIcon from "../../assets/sun.svg";
import "./Navbar.css";
import { ToastContainer } from "react-toastify";

function Navbar({ darkMode, handleClick }) {
  const [sideBar, setSideBar] = useState(false);

  const handleSidebarToggle = () => {
    setSideBar(!sideBar);
  };

  const handleLinkClick = () => {
    setTimeout(() => {
      setSideBar(false);
    }, 200);
  };

  return (
    <div
      className="navbar"
      style={{ backgroundColor: darkMode ? "black" : "#fff" }}
    >
      <div className="navWrapper">
        <div className="navLeft">
          <Link to="/" onClick={handleLinkClick}>
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 6,
              }}
            >
              T I L A K
            </motion.span>
          </Link>
        </div>

        <div className="middle-section">
          <div
            className="toggle-container"
            onClick={handleClick}
            style={{ background: darkMode ? "#faa11b" : "#9e9abd" }}
          >
            {darkMode ? (
              <div className="sunDiv">
                <img src={sunIcon} alt="Light Mode" className="toggle-icon" />
              </div>
            ) : (
              <div className="moonDiv">
                <img src={moonIcon} alt="Dark Mode" className="toggle-icon" />
              </div>
            )}
          </div>
          <button className="sidebar-toggle" onClick={handleSidebarToggle}>
            &#9776;
          </button>
        </div>

        <div className="navRight">
          <motion.ul
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 3,
              type: "spring",
            }}
          >
            <li>
              <a href="https://www.facebook.com/tirap02" target="_blank" rel="noreferrer">
                <img
                  src={fbImg}
                  alt="facebook"
                  style={{ width: 37, height: 37 }}
                />
              </a>
            </li>
            <li>
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/skills" onClick={handleLinkClick}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </motion.ul>
        </div>

        <div
          className={sideBar ? "sidebar open" : "sidebar"}
          style={{ backgroundColor: darkMode ? "black" : "white" }}
        >
          <motion.ul
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 3,
              type: "spring",
            }}
          >
            <li>
              <a
                href="https://www.facebook.com/tirap02"
                target="_blank"
                rel="noreferrer"
                onClick={handleLinkClick}
              >
                <img
                  src={fbImg}
                  alt="facebook"
                  style={{ width: 37, height: 37 }}
                />
              </a>
            </li>
            <li>
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/skills" onClick={handleLinkClick}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
