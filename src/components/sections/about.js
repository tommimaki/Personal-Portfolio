import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

function About() {
  return (
    <section
      id="about"
      className="flex h-[calc(100vh-28px)]   flex-col items-center justify-center md:flex-row md:justify-center my-20 sm:my-10  mx-auto max-w-5xl"
    >
      <div className="md:flex md:flex-col md:items-center">
        <h1 className="text-2xl font-header sm:text-5xl font-semibold mb-4 md:mb-10 text-center">
          Hello, I'm <span className="text-lime-400">Tommi</span>
        </h1>
        <div className="w-full md:w-3/4 px-4">
          <p className="text-lg font-text sm:text-xl ">
            I'm a full-stack developer with a passion for creating beautiful,
            efficient, and user-friendly web applications.
            <br />
            <br />
            <p className="">
              I am currently studying Business Information Technology at{" "}
              <a
                href="https://www.haaga-helia.fi/fi/degree-programme-business-information-technology-bba#:~:text=or%20minor%20studies%3A-,Software%20Development,-Learning%20paths%3A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-500 hover:text-customGreen hover:underline"
              >
                Haaga-Helia University of Applied Sciences
              </a>
              . <br /> My major is Software Development, and I am set to
              graduate in December 2023.
            </p>
            <br />
            At the moment I'm looking for an{" "}
            <span className="text-customGreen">internship</span> or a junior
            level position preferably in web development.
            <br />
            <br />
            See more of my work on my Github or shoot me a message on LinkedIn
            or the email form{" "}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-customGreen hover:underline cursor-pointer"
            >
              below
            </Link>
            !
            <br />
          </p>
          <div className="flex my-6 justify-center p-2">
            <a
              href="https://github.com/tommimaki"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4"
            >
              <FaGithub className="text-4xl text-white logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/tommi-maki/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4"
            >
              <FaLinkedin className="text-4xl text-white logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
