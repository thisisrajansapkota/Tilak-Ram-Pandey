import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="section3" id="skills">
      <div className="skills-container">
        <div className="skills">
          <i className="fa-solid fa-image"></i>
          <div>Adobe Photoshop</div>
        </div>

        <div className="skills">
          <i className="fa-solid fa-pen-nib"></i>
          <div>Adobe Illustrator</div>
        </div>

        <div className="skills">
          <i className="fa-brands fa-figma"></i>
          <div>Figma</div>
        </div>
      </div>

      <br />

      <div className="skills-container">
        <div className="skills">
          <i className="fa-solid fa-bezier-curve"></i>
          <div>Logo Design</div>
        </div>

        <div className="skills">
          <i className="fa-solid fa-palette"></i>
          <div>Branding</div>
        </div>

        <div className="skills">
          <i className="fa-solid fa-hashtag"></i>
          <div>Social Media Design</div>
        </div>
      </div>

      <br />

      <div className="skills-container">
        <div className="skills">
          <i className="fa-solid fa-print"></i>
          <div>Print Design</div>
        </div>

        <div className="skills">
          <i className="fa-solid fa-font"></i>
          <div>Typography</div>
        </div>

        <div className="skills">
          <i className="fa-solid fa-shapes"></i>
          <div>Canva</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
