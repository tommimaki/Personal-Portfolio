import goodmood from "../../assets/goodmood.png";
import lainakaarat from "../../assets/lainakaarat.png";
import api from "../../assets/api.png";

import dekkikeisari from "../../assets/dekkikeisari.jpg";

const projectData = [
  {
    title: "Dekkikeisari",
    description: "A fullstack webstore for a skateshop",
    longDescription:
      "Dekkikeisari is a fullstack skateshop webstore. The frontend is built with React, Redux, TypeScript, and Tailwind CSS, includes product listing, filtering, user authentication for customer and admin, shopping cart and profile page, and an admin panel.\n The admin panel enables inventory, user, mailinglist, and order management. The application uses various libraries, ensuring responsiveness and functionality.\n\n The backend is built with Node.js and Express, the App uses MySQL database and databucket on AWS for saving data and images",
    imgSrc: dekkikeisari,
    websiteLink:
      "https://cerulean-marshmallow-946350.netlify.app/signin?demoAdminLogin=true",
    githubLink: "https://github.com/tommimaki/Dekkikeisari",
    backendGithubLink: "https://github.com/tommimaki/dekkikeisari-Backend",
    technologies: [
      "React",
      "MySQL",
      "AWS",
      "TypeScript",
      "Node.js",
      "Redux",
      "Express",
    ],
    features: [
      "Product listing and filtering",
      "User authentication and profile access/modification",
      "shopping cart and checkout",
      "Inventory and order management",
      "Responsive design",
      "Admin panel for managing data with crud functions",
    ],
  },
  {
    title: "Tommin Lainakaarat",
    description: "A car rental Fullstack web app built with the MERN stack",
    longDescription:
      "A car rental website with a frontend primarily built using React and Tailwind CSS. The backend built with Node.js, Express.js, and MongoDB, offers RESTful API endpoints for user authentication, profile data, car data, and reservation data. Features include CRUD functions for reservations, users, and cars, JSON Web Token authentication, NoSQL MongoDB data storage, Supertest for API route testing, and Multer for image uploads. Combined with frontend technologies such as React, Tailwind CSS, Full Calendar, React Router Dom 6, and Axios, the website delivers a seamless and stylish luxury car rental experience.",
    imgSrc: lainakaarat,
    websiteLink: "https://steady-lollipop-d552c8.netlify.app/demo-login",
    githubLink: "https://github.com/tommimaki/rentacar",
    backendGithubLink: "https://github.com/tommimaki/rentacarbackend",
    technologies: [
      "React",
      "Tailwind",
      "Typescript",
      "MongoDB",
      "Node.js",
      "Express",
    ],
    features: [
      "CRUD functions for reservations, users, and cars",
      "JSON Web Token authentication",
      "NoSQL MongoDB data storage",
      "API route testing with Supertest",
      "Image uploads with Multer",
    ],
  },
  {
    title: "Good Mood",
    description: "Website for a beauty studio. Built with React",
    longDescription: "todo",
    imgSrc: goodmood,
    websiteLink: "https://bright-dragon-6739af.netlify.app/",
    githubLink: "https://github.com/tommimaki/GoodMood",
    technologies: ["Javascript", "React", "Node.js", "CSS"],
    features: ["todo"],
  },
  {
    title: "Green Helsinki",
    description: "A React Native application for eco tourists in Helsinki",
    longDescription:
      "GreenHelsinki is a React Native mobile app promoting sustainable travel to Helsinki, featuring Firebase Authentication, Google Geocoding API, Firebase Realtime Database, Helsinki services API, and responsive styling. The app helps users plan eco-friendly trips to Helsinki by providing sustainable travel options such as public transportation, biking, and walking, as well as suggesting environmentally-conscious activities and accommodations.",
    imgSrc: api,
    githubLink: "https://github.com/tommimaki/GreenHelsinki",
    technologies: ["React Native", "Firebase", "JavaScript"],
    features: [
      "User authentication and authorization via Firebase Authentication",
      "Trip start and end location input using Google Geocoding API",
      "Distance calculation between trip locations with digitransit/hsl API",
      "Eco-friendly activity and accommodation suggestions in Helsinki",
      "Saving and retrieving favorite shop and restaurant locations in Firebase Realtime Database",
      "Responsive styling for various device sizes and orientations",
    ],
  },
];

export default projectData;
