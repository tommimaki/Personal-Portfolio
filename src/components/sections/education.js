import React from "react";

function Education() {
  return (
    <section
      id="education"
      className="my-20 flex-col items-center justify-center md:flex-row md:justify-center mx-auto max-w-5xl "
    >
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-center mb-10 ">
          Education
          <hr className="border-1 mt-1 w-full border-gray-300" />
        </h2>
      </div>

      <div className="w-full md:w-3/4 mx-auto">
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
      </div>
    </section>
  );
}

export default Education;
