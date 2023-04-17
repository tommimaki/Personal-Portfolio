import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-#1F2937 p-4 mt-12 flex justify-center items-center">
      <div className="flex justify-center items-center flex-wrap">
        <div className="flex mb-2">
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
        <div className="text-center pb-5 ml-4">
          <p className="text-white text-lg">
            &copy; {new Date().getFullYear()} <br />
          </p>
          <p className="text-lg">tommimaki97@outlook.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
