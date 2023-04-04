import React from "react";
import skater1 from "../assets/skater1.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="mt-8 flex h-screen flex-col pb-40 items-center justify-center md:flex-row md:justify-between mx-auto max-w-5xl"
    >
      <div className="md:flex md:flex-col md:items-center">
        <h2 className="text-4xl mt-56 font-semibold mb-4 md:mb-20 text-center md:text-left">
          About
        </h2>
        <div className="w-full md:w-3/4 md:pl-6">
          <p className="text-lg text-center md:text-left">
            Hi, I'm Tommi, a full-stack developer with a passion for creating
            beautiful, efficient, and user-friendly applications.
            <br /> <br /> In my spare time, I love skating and snowboarding, as
            the Finnish weather allows.
            <br />
            <br />
            See more of my work on my Github or shoot me a message on LinkedIn
            or the email form below!
            <br />
          </p>
          <div className="flex my-6 justify-center  p-2">
            <a
              href="https://github.com/tommimaki"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4"
            >
              <FaGithub className="text-4xl text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/tommi-maki/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4"
            >
              <FaLinkedin className="text-4xl text-white" />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="w-full md:w-1/2 mb-4 mt-2 md:mb-0 flex items-center justify-center"> */}
      <div className="w-full md:w-1/2 md:mb-0 flex items-start lg:mt-28 justify-center md:items-center">
        <img
          className="mx-auto md:mx-0 rounded-full md:border-none border-4 border-white w-60 h-60 md:w-auto md:h-auto md:max-w-lg md:max-h-lg"
          src={skater1}
          alt="avatar"
        ></img>
      </div>
    </section>
  );
}

export default About;
