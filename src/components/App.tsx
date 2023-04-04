import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import {
  experiences,
  parcours,
  emplois,
  languages,
  technologies,
  softwares,
  projects,
} from "../assets/Data";
import Knowledge from "./Knowledge";
import Project from "./Project";
import Contact from "./Contact";

function App() {
  return (
    <div className="mb-14">
      <Navbar />
      <Hero />
      <About />
      <Experience id="formation" title={"Formations"} experiences={parcours} />
      <Experience id="jobs" title={"Emplois"} experiences={emplois} />
      <Experience
        id="experiences"
        title={"Experiences"}
        experiences={experiences}
      />
      <Knowledge
        languages={languages}
        technologies={technologies}
        softwares={softwares}
      ></Knowledge>
      <Project projects={projects}></Project>
      <Contact />
    </div>
  );
}

export default App;
