import React, { useEffect, useState } from "react";

import Contact from "./components/sections/contact";
import Skills from "./components/sections/skills";
import Header from "./components/outlay/header";
import About from "./components/sections/about";
import Footer from "./components/outlay/footer";
import TitleAnimation from "./components/outlay/titleAnimation";
import ScrollToTopArrow from "./components/outlay/ScrollToTop";
import Projects from "./components/sections/projects";

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
          <Projects />
          <Skills />
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
