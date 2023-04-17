import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-#1F2937 p-8 mt-12 flex justify-center items-center">
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

      <p className="text-white text-lg">
        &copy; {new Date().getFullYear()} <br />
        tommimaki97@outlook.com
      </p>
    </footer>
  );
};

export default Footer;
