import React from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

const ProjectModal = ({
  isOpen,
  onRequestClose,
  title,
  description,
  technologies,
  img,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black"
      style={{ overlay: { zIndex: 1000 } }}
    >
      <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 rounded-lg p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <h1> Modaali vielä kesken, 18.04.2023, huoltotyöt meneillään </h1>
          <button
            onClick={onRequestClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes />
          </button>
        </div>
        <img
          src={img}
          alt="Project preview"
          className="w-full h-48 mb-4 object-cover rounded"
        />
        <p className="mb-4">{description}</p>
        <ul className="list-disc list-inside mb-4">
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default ProjectModal;
