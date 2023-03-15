import React from "react";

const Project = ({ title, description, imgSrc, websiteLink, githubLink }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md project-card">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-lg leading-relaxed">{description}</p>
      <div className="mt-4">
        <img
          src={imgSrc}
          alt={`${title} preview`}
          className="w-full h-auto mb-4 rounded"
        />
        <a
          href={websiteLink}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          Visit Website
        </a>
        <br />
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default Project;
