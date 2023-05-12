// TitleAnimation.js
import React, { useEffect, useRef, useState } from "react";

const TitleAnimation = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [completed, setCompleted] = useState({ title: false, subtitle: false });

  const animateTitle = (title, reverse = false) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const length = title.dataset.value.length;
    let iteration = reverse ? length : 0;
    const increment = reverse ? -1 / 3 : 1 / 3;
    const interval = setInterval(() => {
      if (!title) return;
      title.innerText = title.innerText
        .split("")
        .map((letter, index) => {
          if (reverse ? index > iteration : index < iteration) {
            return title.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (reverse ? iteration <= 0 : iteration >= length) {
        clearInterval(interval);
        setCompleted((prev) => ({
          ...prev,
          [reverse ? "subtitle" : "title"]: true,
        }));
      }

      iteration += increment;
    }, 40);
    return () => clearInterval(interval);
  };

  useEffect(() => {
    animateTitle(titleRef.current);
    animateTitle(subtitleRef.current, true);
  }, []);

  useEffect(() => {
    if (completed.title && completed.subtitle) {
      setTimeout(() => {
        setAnimationCompleted(true);
      }, 1000);
    }
  }, [completed]);

  if (animationCompleted) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <h1
        ref={titleRef}
        className="text-5xl font-bold font-hackerman text-lime-400"
        data-value="Tommi Mäki"
        style={{ cursor: "default" }}
      >
        Tommi Mäki
      </h1>
      <h2
        ref={subtitleRef}
        className="text-2xl font-semibold font-hackerman mt-3 text-lime-400"
        data-value="My Portfolio"
        style={{ color: "white" }}
      >
        My Portfolio
      </h2>
    </div>
  );
};

export default TitleAnimation;
