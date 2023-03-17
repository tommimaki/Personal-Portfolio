import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 w-full p-4 flex items-center justify-center sticky top-0 z-50">
      <div className="flex items-center justify-center w-full">
        <nav
          className={`flex items-center justify-center ${
            isOpen ? "hidden" : ""
          }`}
        >
          {[
            { name: "About", id: "about" },
            { name: "Projects", id: "projects" },
            { name: "Skills", id: "skills" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map(({ name, id }) => (
            <div key={id} className="relative group hidden md:block">
              <Link
                activeClass="active"
                to={id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link mx-4 text-xl cursor-pointer text-white group-hover:text-gray-300"
              >
                {name}
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-white rounded transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </nav>
        <button
          className={`${
            isOpen ? "hidden" : "block"
          } md:hidden text-white focus:outline-none`}
          onClick={toggleMenu}
        >
          <FiMenu size={24} />
        </button>
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } md:hidden flex-col items-center bg-gray-800 w-full h-auto absolute z-10 top-0 right-0 py-4`}
        >
          <button
            className="text-white focus:outline-none mb-4 self-center"
            onClick={toggleMenu}
          >
            <FiX size={24} />
          </button>
          {[
            { name: "About", id: "about" },
            { name: "Projects", id: "projects" },
            { name: "Skills", id: "skills" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map(({ name, id }) => (
            <div key={id} className="relative group mb-4">
              <Link
                activeClass="active"
                to={id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link text-xl cursor-pointer text-white group-hover:text-gray-300 px-4 py-2 rounded-md"
                onClick={toggleMenu}
              >
                {name}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
