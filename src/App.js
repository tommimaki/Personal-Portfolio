import React from "react";

import goodmood from "./assets/goodmood.png";
import lainakaarat from "./assets/lainakaarat.png";
import api from "./assets/api.png";
import Dekkikeisari from "./assets/Dekkikeisari.png";
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
        <main className="container mx-auto px-4 py-2">
          <About />
          <section className="text-center my-20">
            <h2 className="text-4xl font-semibold text-center  mb-10">
              Featured Projects
            </h2>

            <div
              id="projects"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6"
            >
              <Project
                title="Dekkikeisari"
                description="A fullstack webstore for a skateshop"
                imgSrc={Dekkikeisari}
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
                description="A React Native mobile application for eco tourists in helsinki, shows biking paths, thrift shops and vegan restaurants, database and user authentication hosted on firebase"
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
    </div>
  );
}

export default App;
