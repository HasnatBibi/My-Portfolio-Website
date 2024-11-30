import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies"
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="overflow-x-hidden">
    <div className='fixed top-0 -z-10 h-full w-full'>
      <div class="relative inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    
      </div>
    
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="technologies">
        <Technologies />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      
    </div>
  );
}
