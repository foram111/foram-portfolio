import React, { useEffect, useState } from "react";
import "./front.css"; // Import the CSS file for styling
import bgvideo from "../media/bgfrontmessage.mp4";

export default function Front() {
  const [showHelloText, setShowHelloText] = useState(true);
  const [showOtherText, setShowOtherText] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    // Display "Hello!" for 10 seconds
    const helloTimeout = setTimeout(() => {
      setShowHelloText(false);
      setShowOtherText(true);
      // Pause the video after 10 seconds
      const videoElement = document.querySelector(".videoTag");
      if (videoElement) {
        videoElement.pause();
      }

      // Show background after 10 seconds
      setShowBackground(true);
    }, 6000);

    return () => {
      clearTimeout(helloTimeout);
    };
  }, []);

  return (
    <section id="frontside">
      <div className="container">
        <video className="videoTag" autoPlay loop muted>
          <source src={bgvideo} type="video/mp4" />
        </video>
        <div className={`text-content ${showHelloText ? "" : "visible"}`}>

          <h1 className="title-font">
            {showHelloText && (
              <span className="name-text" style={{ fontWeight: "bold" }}>
                Hello!
              </span>
            )}
            {showOtherText && (
              <p className="subtitle">
                <span>A creative Web Designer and Front-End Developer.</span>
              </p>
            )}
          </h1>
          {showOtherText && (
            <p className="mb-8 leading-relaxed">
              "Bridging the gap between design and functionality."
            </p>
          )}
          {showOtherText && (
            <button className="outline-button">View My Work</button>
          )}
        </div>
        <div className={`background ${showBackground ? "slide-in" : ""}`} />
        <div className={`arrow ${showBackground ? "blink" : ""}`}>&darr;</div>
      </div>
    </section>
  );
}
