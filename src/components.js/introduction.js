import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

const Introduction = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const animateTitle = (title) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iteration = 0;
    const interval = setInterval(() => {
      if (!title) return;
      title.innerText = title.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return title.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= title.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 40);
    return () => clearInterval(interval);
  };

  useEffect(() => {
    animateTitle(titleRef.current);
    setTimeout(() => {
      setAnimationCompleted(true);
    }, 1900);
  }, []);

  useEffect(() => {
    animateTitle(subtitleRef.current);
  }, []);

  const handleMouseEnter = () => {
    if (animationCompleted) {
      animateTitle(titleRef.current);
    }
  };

  return (
    <section
      className={`introduction-container ${
        animationCompleted ? "minimized" : ""
      }`}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        transition: "all 0.6s ease",
        backgroundColor: animationCompleted ? "#1F2937" : "black",
        padding: animationCompleted ? "1rem" : "",
        minHeight: animationCompleted ? "4rem" : "",
        justifyContent: "center", // <-- add this
        flexGrow: 1, // <-- and this
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <h1
          ref={titleRef}
          className="text-5xl font-bold mt-5"
          data-value="Tommi Mäki"
          style={{
            cursor: "default",
            alignSelf: animationCompleted ? "flex-start" : "center",
            margin: animationCompleted ? "0 1rem" : "",
          }}
          onMouseEnter={handleMouseEnter}
        >
          Tommi Mäki
        </h1>
        <h2
          ref={subtitleRef}
          className={`text-2xl font-semibold mt-3 ${
            animationCompleted ? "hidden" : ""
          }`}
          data-value="My Portfolio"
        >
          My Portfolio
        </h2>
        {animationCompleted && (
          <nav
            className="mt-1"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="mx-4 text-lg  cursor-pointer text-white hover:text-gray-300"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="mx-2 text-lg   cursor-pointer text-white hover:text-gray-300"
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="mx-2 text-lg  cursor-pointer text-white hover:text-gray-300"
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="mx-2 text-lg  cursor-pointer text-white hover:text-gray-300"
            >
              Education
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="mx-2 text-lg  cursor-pointer text-white hover:text-gray-300"
            >
              Contact
            </Link>
            {/* Add more links for other sections here */}
          </nav>
        )}
      </div>
    </section>
  );
};

export default Introduction;
