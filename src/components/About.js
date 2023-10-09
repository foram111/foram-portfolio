import React from "react";
import "./front.css"; // Import the CSS file for styling

export default function AboutUs() {
  return (
    <section id="about-us" className="bg-gray-900 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-white font-semibold mb-4">ABOUT ME</h2>
        <p className="text-gray-400 text-lg mb-4">
          I'm a passionate designer and web developer with years of experience.
          I specialize in creating captivating designs and seamless user experiences.
          My journey started as a freelancer, collaborating with clients from various industries.
          I've tackled design challenges, consulted with startups, and delivered digital solutions.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          Whether it's translating ideas into stunning visuals or developing interactive websites,
          I bring creativity and professionalism to every project.
        </p>

        <div className="hexagon-row">
          <div className="hexagon pink-hexagon">
            <div className="hexagon-border"></div>
            <div className="hexagon-inner">
              <h3 className="hexagon-heading">Fast</h3>
            </div>
          </div>
          <div className="hexagon pink-hexagon">
            <div className="hexagon-border"></div>
            <div className="hexagon-inner">
              <h3 className="hexagon-heading">Responsive</h3>
            </div>
          </div>
          <div className="hexagon pink-hexagon">
            <div className="hexagon-border"></div>
            <div className="hexagon-inner">
              <h3 className="hexagon-heading">Intuitive</h3>
            </div>
          </div>
          <div className="hexagon pink-hexagon">
            <div className="hexagon-border"></div>
            <div className="hexagon-inner">
              <h3 className="hexagon-heading">Dynamic</h3>
            </div>
          </div>
          <div className="hexagon pink-hexagon">
            <div className="hexagon-border"></div>
            <div className="hexagon-inner">
              <h3 className="hexagon-heading">Passionate Problem Solver</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
