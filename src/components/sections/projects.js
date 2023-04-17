// import React from "react";
// import Project from "./project";
// import goodmood from "../assets/goodmood.png";
// import lainakaarat from "../assets/lainakaarat.png";
// import api from "../assets/api.png";
// import dekkikeisari from "../assets/dekkikeisari.jpg";

// const Projects = () => {
//   return (
//     <section className="text-center mb-20">
//       <h2 className="text-4xl font-semibold text-center  mb-10">
//         Featured Projects
//       </h2>

//       <div
//         id="projects"
//         className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-items-center"
//       >
//         <Project
//           title="Dekkikeisari"
//           description="A fullstack webstore for a skateshop"
//           imgSrc={dekkikeisari}
//           websiteLink="https://cerulean-marshmallow-946350.netlify.app/signin?demoAdminLogin=true"
//           githubLink="https://github.com/tommimaki/Dekkikeisari"
//           technologies={[
//             "React",
//             "MySQL",
//             "AWS",
//             "TypeScript",
//             "Node.js",
//             "Redux",
//             "Express",
//           ]}
//         />
//         <Project
//           title="Tommin Lainakaarat"
//           description="A car rental Fullstack web app built with the MERN stack"
//           imgSrc={lainakaarat}
//           websiteLink="https://steady-lollipop-d552c8.netlify.app/demo-login"
//           githubLink="https://github.com/tommimaki/rentacar"
//           technologies={[
//             "React",
//             "Tailwind",
//             "Typescript",
//             "MongoDB",
//             "Node.js",
//             "Express",
//           ]}
//         />
//         <Project
//           title="Good Mood"
//           description="Website for a beauty studio. Built with React"
//           imgSrc={goodmood}
//           websiteLink="https://bright-dragon-6739af.netlify.app/"
//           githubLink="https://github.com/tommimaki/GoodMood"
//           technologies={["Javascript", "React", "Node.js"]}
//         />
//         <Project
//           title="Green Helsinki"
//           description="A React Native application for eco tourists Helsinki"
//           imgSrc={api}
//           githubLink="https://github.com/tommimaki/GreenHelsinki"
//           technologies={["React Native", "Firebase", "JavaScript"]}
//         />
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React from "react";
import Project from "../projects/project";
import projectData from "../projects/projectData";

const Projects = () => {
  return (
    <section className="text-center mb-20">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-center mb-20">
          Featured Projects
          <hr className="border-1 mt-1 flex-grow  border-gray-300" />
        </h2>
      </div>

      <div
        id="projects"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-items-center"
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
