import React, { useEffect, useState } from "react";

import Contact from "./components/contact";
import Skills from "./components/skills";
import Header from "./components/header";
import Education from "./components/education";
import About from "./components/about";
import Footer from "./components/footer";
import TitleAnimation from "./components/titleAnimation";
import ScrollToTopArrow from "./components/ScrollToTop";
import Projects from "./components/projects/projects";

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
            <Projects />
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
