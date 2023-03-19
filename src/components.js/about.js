import React from "react";
import skater1 from "../assets/skater1.png";
import me from "../assets/me.jpeg";

function About() {
  return (
    <section
      id="about"
      className="my-12 flex flex-col items-center justify-center md:flex-row md:justify-between mx-auto max-w-5xl"
    >
      <div className="md:flex md:flex-col md:items-center">
        <h2 className="text-4xl font-semibold mb-4 md:mb-20 text-center md:text-left">
          About
        </h2>
        <div className="w-full md:w-1/2 md:pl-6">
          <p className="text-lg leading-relaxed text-center md:text-left">
            Hi, I'm Tommi, a full-stack developer with a passion for creating
            beautiful, efficient, and user-friendly applications.
            <br /> <br /> I have experience in various modern web technologies
            such as React, Node.js, and Tailwind CSS. In my spare time, I enjoy
            learning new programming languages and exploring the latest trends
            in software development.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 mb-4 mt-10 md:mb-0 flex items-center justify-center">
        <img
          className="mx-auto md:mx-0 rounded-full md:border-none border-4 border-white w-32 h-32 md:w-auto md:h-auto md:max-w-lg md:max-h-lg"
          src={me}
          alt="avatar"
        ></img>
      </div>
    </section>
  );
}

export default About;
