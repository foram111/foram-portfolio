import React from "react";
import "./front.css"; // Import the CSS file for styling
import bgvideo from "../media/wavebg.mp4";

export default function Front() {
  return (
    <section id="frontside">
      <div className="container">
        <video className="videoTag" autoPlay loop muted>
          <source src={bgvideo} type="video/mp4" />
        </video>
        <h1 className="title-font">
          <span className="name-text">Hi, I'm <span className="name-highlight">Foram Gohil</span>.</span>
         <p className="subtitle"> <span>I'm a Web Designer and Front-End Developer.</span> </p>
        </h1>
        <p className="mb-8 leading-relaxed">
          "Bridging the gap between design and functionality."
        </p>
        <button className="outline-button">View My Work</button>
      </div>
    </section>
  );
}
