import React from "react";
import "./About.css";
import croppedImage from "../../assets/images/cropped_image.png"; // TODO: replace with Tilak's photo

const AboutSection = () => {
  return (
    <section className="aboutSection" id="about">
      <section className="about-me">
        <h2 className="title">About me</h2>
        <div className="about-container">
          <div className="aboutLeft">
            <img src={croppedImage} alt="Tilak Ram Pandey" width="80%" />
          </div>
          <div className="aboutRight">
            <h2>Tilak Ram Pandey</h2>
            <p className="details">
              <h2> Hi, my name is Tilak Ram Pandey.</h2>
              <br />
              <h2>
                {" "}
                Graphics Designer and Entrepreneur based in Butwal, Nepal.
                I manage Rainadevi Consultancy, where I handle branding,
                logo design, social media graphics, and print design.
                Skilled in Adobe Photoshop, Illustrator, and Figma, with a
                strong eye for detail and designs that communicate clearly.
              </h2>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
