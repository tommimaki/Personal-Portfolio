import React, { useEffect, useRef, useState } from "react";

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
      className={`introduction-container text-center ${
        animationCompleted ? "minimized" : ""
      }`}
    >
      <h1
        ref={titleRef}
        className="text-5xl font-bold mt-5"
        data-value="Tommi Mäki"
        style={{ cursor: "default" }}
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
    </section>
  );
};

export default Introduction;
