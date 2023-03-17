import React from "react";

import goodmood from "./assets/goodmood.png";
import Contact from "./components.js/contact";
import Project from "./components.js/project";
import Skills from "./components.js/skills";
import Header from "./components.js/header";
import Education from "./components.js/education";
import About from "./components.js/about";
import Footer from "./components.js/footer";
import TitleAnimation from "./components.js/titleAnimation";

function App() {
  return (
    <div>
      <TitleAnimation />
      <Header />
      <div className="App min-h-screen bg-gray-900 text-gray-100">
        <main className="container mx-auto px-4 py-12">
          <About />
          <section className="text-center my-12">
            <h2 className="text-4xl font-semibold mb-2 text-center  mb-20">
              Projects
            </h2>

            <div
              id="projects"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6"
            >
              {/* Replace the contents of the div below with your project details */}
              <Project
                title="Good Mood"
                description="A website made for a beauty studio, created with react frontend and node backend for mailing services"
                imgSrc={goodmood}
                websiteLink="https://bright-dragon-6739af.netlify.app/"
                githubLink="https://github.com/tommimaki/GoodMood"
              />
              <Project
                title="Project 1"
                description="A brief description of Project 1. lorem"
                imgSrc="https://via.placeholder.com/300x200"
                websiteLink="https://project1.example.com"
                githubLink="https://github.com/username/project1"
              />
              <Project
                title="Project 1"
                description="A brief description of Project 1. lorem"
                imgSrc="https://via.placeholder.com/300x200"
                websiteLink="https://project1.example.com"
                githubLink="https://github.com/username/project1"
              />
              <Project
                title="Project 1"
                description="A brief description of Project 1. lorem"
                imgSrc="https://via.placeholder.com/300x200"
                websiteLink="https://project1.example.com"
                githubLink="https://github.com/username/project1"
              />
            </div>
          </section>

          <Skills />
          <Education />
          <Contact />
        </main>
        <footer className="bg-#1F2937 p-4 mt-12 flex justify-center">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
