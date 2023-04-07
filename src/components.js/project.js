import React from "react";

const Project = ({
  title,
  description,
  imgSrc,
  websiteLink,
  githubLink,
  technologies,
}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md project-card">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-base leading-relaxed">{description}</p>
      <div className="mt-4">
        <img
          src={imgSrc}
          alt={`${title} preview`}
          className="w-auto max-h-[200px] mb-4 rounded mx-auto justify-center"
          style={{ maxWidth: "100%" }}
        />

        <div className="mb-4">
          {technologies &&
            technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-block bg-gray-600 text-gray-100 px-2 py-1 rounded mr-2 mb-2 text-sm"
              >
                {tech}
              </span>
            ))}
        </div>
        <div className="flex mt-4 mx-auto justify-center space-x-4">
          {websiteLink && (
            <a
              href={websiteLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200"
            >
              Visit Website
            </a>
          )}

          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700 transition duration-200"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
