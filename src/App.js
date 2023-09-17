// src/App.js

import React from "react";
import Me from "./components/Me";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import "./components/style.css";
import Front from "./components/Front";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Front/>
      <Navbar />
      {/* <Me /> */}
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

