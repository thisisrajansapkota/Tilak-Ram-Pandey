// App.jsx

import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import FloatingIcon from "./components/FloatingIcon/FloatingIcon";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Skills from "./components/Skills/Skills";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentMode, setCurrentMode] = useState("dark");

  const handleClick = () => {
    setDarkMode(!darkMode);
    setCurrentMode(darkMode ? "light" : "dark");
  };

  return (
    <div className={`${currentMode}`}>
      <Navbar darkMode={darkMode} handleClick={handleClick} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section>
                <Hero darkMode={darkMode} />
              </section>
              <div id="skills">
                <Parallax type="skills" darkMode={darkMode} />
              </div>
              <section>
                <Skills />
              </section>
              <div id="about">
                <Parallax type="about" darkMode={darkMode} />
              </div>
              <div className="aboutSec">
                <About />
              </div>
              <section>
                <Contact />
              </section>
            </>
          }
        />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer darkMode={darkMode} />
      <FloatingIcon />
    </div>
  );
}

export default App;
