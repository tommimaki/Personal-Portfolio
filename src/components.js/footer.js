import React from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-#1F2937 p-8 mt-12 flex justify-center items-center">
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-4"
      >
        <FaLinkedin className="text-4xl text-white" />
      </a>
      <a
        href="https://wa.me/your_phone_number"
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
