//ProjectModal.js
import React, { useEffect } from "react";
import Modal from "react-modal";
import ImageCarousel from "../modal/imageCarousel";

import { FaGithub, FaInternetExplorer, FaTimes } from "react-icons/fa";

const ProjectModal = ({
  isOpen,
  onRequestClose,
  title,
  description,
  technologies,
  longDescription,
  img,
  imgSrcs,
  features,
  backendGithubLink,
  websiteLink,
  githubLink,
  adminSiteLink,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center"
      style={{ overlay: { zIndex: 1000 } }}
    >
      <div className=" w-11/12 md:w-3/4 lg:w-1/2  bg-gray-800 rounded-lg p-6 shadow-lg overflow-y-auto max-h-full">
        <div className="flex justify-between w-full mb-4">
          <h2 className="text-3xl text-center font-header font-semibold text-white">
            {title}
          </h2>
          <button
            onClick={onRequestClose}
            className="text-white text-5xl  hover:text-gray-700"
          >
            <FaTimes className="self-end" />
          </button>
        </div>
        {imgSrcs && imgSrcs.length > 1 ? (
          <ImageCarousel imageUrls={imgSrcs} />
        ) : (
          <img
            src={img}
            alt="Project preview"
            className="w-full h-48 mb-4 object-cover rounded"
          />
        )}

        {longDescription.split("\n").map((item, key) => {
          return (
            <p key={key} className="mb-4 font-text text-white">
              {item}
            </p>
          );
        })}

        <div className="flex justify-center mx-28  flex-col sm:flex-row md:space-x-4 space-x-1 mb-4">
          {websiteLink && (
            <a
              href={websiteLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-3 py-2 my-1 text-sm font-text text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Website
              <FaInternetExplorer className="text-lg ml-2 text-white" />
            </a>
          )}
          {adminSiteLink && (
            <a
              href={adminSiteLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-3 my-1  py-2 text-sm  font-text text-white bg-teal-600 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300  "
            >
              Admin Page
              <FaInternetExplorer className="text-lg ml-2 text-white" />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 my-1  py-2 text-sm font-text text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Frontend Repo
              <FaGithub className="text-lg ml-2 text-white" />
            </a>
          )}
          {backendGithubLink && (
            <a
              href={backendGithubLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-3 my-1 py-2 text-sm  font-text text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
            >
              Backend Repo
              <FaGithub className="text-lg ml-2 text-white" />
            </a>
          )}
        </div>

        <div className="flex justify-between flex-wrap">
          <div className="w-full md:w-1/2">
            <h4 className="text-white font-text mb-2">Techstack:</h4>
            <ul className="list-disc list-inside mb-4 font-text text-white">
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="text-white font-text mb-2">Features:</h4>
            <ul className="list-disc list-inside font-text mb-4 text-white">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
