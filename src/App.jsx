import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";

function App() {
  return (
    <div className=" min-h-screen overflow-x-hidden bg-gray-500">
      <Navbar />
      <section className="pt-16">
        <section id="home">
          <Home />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
        <ScrollToTop />
      </section>
    </div>
  );
}

export default App;
