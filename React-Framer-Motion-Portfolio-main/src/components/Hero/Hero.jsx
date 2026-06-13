import React from "react";
import bgVideo from "../../assets/images/bg-video.mp4";
import myImage from "../../assets/images/my-image.png"; // TODO: replace with Tilak's photo
import "./Hero.css";
import heroImg from "../../assets/images/mountainLight.jpg";

function Hero({ darkMode }) {
  return (
    <section className="heroSec">
      <div className="hero" id="hero">
        {darkMode && (
          <video autoPlay muted loop playsInline className="video-background">
            <source src={bgVideo} type="video/mp4" />
          </video>
        )}

        {!darkMode && (
          <img
            src={heroImg}
            className="hero-background"
            alt="Hero Background"
          />
        )}

        <div className="content">
          <div className="left">
            <div className="rajan">
              <h1 className="name-char">T</h1>
              <h1 className="name-char">I</h1>
              <h1 className="name-char">L</h1>
              <h1 className="name-char">A</h1>
              <h1 className="name-char">K</h1>
            </div>
            <div className="tag">
              <h2 className="tag-word">Graphics</h2>
              <h2 className="tag-word">Designer</h2>
              <h2 className="tag-word">&</h2>
              <h2 className="tag-word">Entrepreneur</h2>
              <h2 className="tag-word">.</h2>
              <h2 className="tag-word">.</h2>
            </div>
            <div className="sub-tag">
              <br />
            </div>
          </div>
          <div className="right">
            <img src={myImage} alt="Tilak Ram Pandey" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
