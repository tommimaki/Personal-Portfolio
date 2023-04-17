import React from "react";

function Education() {
  return (
    <section id="education" className="text-center  my-40">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-center mb-20 ">
          Education
          <hr className="border-1 mt-1 w-full border-gray-300" />
        </h2>
      </div>

      <p className="text-lg leading-relaxed">
        I am currently studying Business Information Technology at{" "}
        <a
          href="https://www.haaga-helia.fi/fi/degree-programme-business-information-technology-bba#:~:text=or%20minor%20studies%3A-,Software%20Development,-Learning%20paths%3A"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white-500 hover:text-customGreen hover:underline"
        >
          Haaga-Helia University of Applied Sciences
        </a>
        . <br /> My major is Software Development, and I am set to graduate in
        December 2023.
      </p>
    </section>
  );
}

export default Education;