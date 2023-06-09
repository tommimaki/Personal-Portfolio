import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import { FaGithub, FaInternetExplorer, FaPlus } from "react-icons/fa";
const Project = ({
  title,
  description,
  imgSrc,
  websiteLink,
  githubLink,
  technologies,
  longDescription,
  features,
  backendGithubLink,
  adminSiteLink,
  imgSrcs,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="project-card max-w-sm border  rounded-lg shadow bg-gray-800 border-gray-700 flex flex-col">
      <div className="flex-grow p-4 pb-0">
        <img
          className="rounded-t-lg w-auto max-h-[200px] mb-4 mx-auto cursor-pointer"
          src={imgSrc}
          alt={`${title} preview`}
          style={{ maxWidth: "100%" }}
          onClick={() => setModalIsOpen(true)}
        />

        <div className="p-2 flex items-center flex-col">
          <h3 className="text-2xl font-bold tracking-tight  font-header dark:text-white mb-2">
            {title}
          </h3>

          <p className="font-normal font-text pb-2  text-gray-300">
            {description}
          </p>
          <button onClick={() => setModalIsOpen(true)}>
            <div className="flex items-center">
              <FaPlus />
              <p className="ml-2 font-text ">Read more </p>
            </div>
          </button>
        </div>
      </div>
      <hr className="border-1 w-full border-gray-300 mb-2 mr-4" />
      <div className="flex px-2 ml-12  flex-wrap-reverse flex-reverse mt-auto">
        {technologies &&
          technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block font-text  bg-gray-600 text-gray-100 px-2 py-1 rounded mr-2 mb-2 text-sm"
            >
              {tech}
            </span>
          ))}
      </div>
      <hr className="border-1 w-full border-gray-300 mb-2 mr-4" />
      <div className="pb-4">
        <div className="flex justify-center space-x-4">
          {websiteLink && (
            <a
              href={websiteLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-3 py-2 font-text text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Visit Website
              <FaInternetExplorer className="text-lg ml-2 text-white" />
            </a>
          )}

          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-3 font-text py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            View code
            <FaGithub className="text-lg ml-2 text-white" />
          </a>
        </div>
      </div>
      <ProjectModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        title={title}
        description={description}
        technologies={technologies}
        img={imgSrc}
        imgSrcs={imgSrcs}
        longDescription={longDescription}
        features={features}
        backendGithubLink={backendGithubLink}
        githubLink={githubLink}
        websiteLink={websiteLink}
        adminSiteLink={adminSiteLink}
      />
    </div>
  );
};

export default Project;
