import React from "react";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

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
      <a
        href="https://wa.me/358405467598"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-4"
      >
        <FaWhatsapp className="text-4xl text-white" />
      </a>
      <p className="text-white text-lg">
        &copy; {new Date().getFullYear()} Tommimaki. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
