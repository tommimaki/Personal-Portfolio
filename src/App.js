import React, { useEffect, useState } from "react";

import goodmood from "./assets/goodmood.png";
import lainakaarat from "./assets/lainakaarat.png";
import api from "./assets/api.png";
import dekkikeisari from "./assets/dekkikeisari.jpg";
import Contact from "./components/contact";
import Project from "./components/project";
import Skills from "./components/skills";
import Header from "./components/header";
import Education from "./components/education";
import About from "./components/about";
import Footer from "./components/footer";
import TitleAnimation from "./components/titleAnimation";
import ScrollToTopArrow from "./components/ScrollToTop";

function App() {
  const [showScrollToTopArrow, setShowScrollToTopArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledPastScreen = window.scrollY > window.innerHeight;
      setShowScrollToTopArrow(isScrolledPastScreen);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <TitleAnimation />
      <Header />
      <div className="App min-h-screen bg-gray-900 text-gray-100">
        <main className="container mx-auto px-4 py-2">
          <About />
          <section className="text-center mb-20">
            <h2 className="text-4xl font-semibold text-center  mb-10">
              Featured Projects
            </h2>

            <div
              id="projects"
              className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-items-center"
            >
              <Project
                title="Dekkikeisari"
                description="A fullstack webstore for a skateshop"
                imgSrc={dekkikeisari}
                websiteLink="https://cerulean-marshmallow-946350.netlify.app/signin?demoAdminLogin=true"
                githubLink="https://github.com/tommimaki/Dekkikeisari"
                technologies={[
                  "React",
                  "MySQL",
                  "AWS",
                  "TypeScript",
                  "Node.js",
                  "Redux",
                  "Express",
                ]}
              />
              <Project
                title="Tommin Lainakaarat"
                description="A car rental Fullstack web app built with the MERN stack"
                imgSrc={lainakaarat}
                websiteLink="https://steady-lollipop-d552c8.netlify.app/demo-login"
                githubLink="https://github.com/tommimaki/rentacar"
                technologies={[
                  "React",
                  "Tailwind",
                  "Typescript",
                  "MongoDB",
                  "Node.js",
                  "Express",
                ]}
              />
              <Project
                title="Good Mood"
                description="Website for a beauty studio. Built with React"
                imgSrc={goodmood}
                websiteLink="https://bright-dragon-6739af.netlify.app/"
                githubLink="https://github.com/tommimaki/GoodMood"
                technologies={["Javascript", "React", "Node.js"]}
              />
              <Project
                title="Green Helsinki"
                description="A React Native application for eco tourists Helsinki"
                imgSrc={api}
                githubLink="https://github.com/tommimaki/GreenHelsinki"
                technologies={["React Native", "Firebase", "JavaScript"]}
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
      {showScrollToTopArrow && <ScrollToTopArrow />}
    </div>
  );
}

export default App;
