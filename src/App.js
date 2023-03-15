import React from "react";

import goodmood from "./assets/goodmood.png";
import { useState } from "react";
import Project from "./components.js/project";
import Skills from "./components.js/skills";
import Introduction from "./components.js/introduction";
import Education from "./components.js/education";
import About from "./components.js/about";

function App() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <Introduction />
      <div className="App min-h-screen bg-gray-900 text-gray-100">
        {/* <header className="bg-blue-900 p-4 shadow-md">tommiMAki</header> */}
        <main className="container mx-auto px-4 py-12">
          <About />
          <section className="text-center my-12">
            <h2 className="text-4xl font-semibold mb-2 text-center  mb-20">
              Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
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
          <section className="text-center">
            <h2 className="text-4xl font-semibold mb-4">Contact Me</h2>
            <form className="max-w-sm mx-auto">
              <div className="mb-4">
                <label
                  className="block text-gray-300 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-300 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="6"
                  placeholder="Write your message here."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </section>
        </main>
        <footer className="bg-black p-4 mt-12 flex justify-center">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in text-2xl text-white"></i>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
