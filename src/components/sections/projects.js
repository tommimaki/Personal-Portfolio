import React from "react";
import Project from "../projects/project";
import projectData from "../projects/projectData";

const Projects = () => {
  return (
    <section className=" text-center mb-20">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-center mb-20">
          Featured Projects
          <hr className="border-1 mt-1 flex-grow  border-gray-300" />
        </h2>
      </div>

      <div
        id="projects"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 justify-items-center max-w-screen-lg mx-auto"
      >
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            websiteLink={project.websiteLink}
            githubLink={project.githubLink}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
