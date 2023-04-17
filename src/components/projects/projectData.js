import goodmood from "../../assets/goodmood.png";
import lainakaarat from "../../assets/lainakaarat.png";
import api from "../../assets/api.png";

import dekkikeisari from "../../assets/dekkikeisari.jpg";

const projectData = [
  {
    title: "Dekkikeisari",
    description: "A fullstack webstore for a skateshop",
    imgSrc: dekkikeisari,
    websiteLink:
      "https://cerulean-marshmallow-946350.netlify.app/signin?demoAdminLogin=true",
    githubLink: "https://github.com/tommimaki/Dekkikeisari",
    technologies: [
      "React",
      "MySQL",
      "AWS",
      "TypeScript",
      "Node.js",
      "Redux",
      "Express",
    ],
  },
  {
    title: "Tommin Lainakaarat",
    description: "A car rental Fullstack web app built with the MERN stack",
    imgSrc: lainakaarat,
    websiteLink: "https://steady-lollipop-d552c8.netlify.app/demo-login",
    githubLink: "https://github.com/tommimaki/rentacar",
    technologies: [
      "React",
      "Tailwind",
      "Typescript",
      "MongoDB",
      "Node.js",
      "Express",
    ],
  },
  {
    title: "Good Mood",
    description: "Website for a beauty studio. Built with React",
    imgSrc: goodmood,
    websiteLink: "https://bright-dragon-6739af.netlify.app/",
    githubLink: "https://github.com/tommimaki/GoodMood",
    technologies: ["Javascript", "React", "Node.js", "CSS"],
  },
  {
    title: "Green Helsinki",
    description: "A React Native application for eco tourists Helsinki",
    imgSrc: api,
    githubLink: "https://github.com/tommimaki/GreenHelsinki",
    technologies: ["React Native", "Firebase", "JavaScript"],
  },
];

export default projectData;
