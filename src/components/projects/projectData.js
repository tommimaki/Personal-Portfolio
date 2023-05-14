import goodmood from "../../assets/goodmood.png";
import lainakaaratmin from "../../assets/lainakaaratmin.png";
import api from "../../assets/api.png";
import bak1 from "../../assets/bak1.png";
import bak2 from "../../assets/bak2.png";
import bak3 from "../../assets/bak3.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import dekkikeisari from "../../assets/dekkikeisari.jpg";
import dekki2 from "../../assets/dekki2.png";
import dekki3 from "../../assets/dekki3.png";

const projectData = [
  {
    title: "Backdoor Homes",
    description:
      "A website for a construction/realtor company, Includes seperate cms site for admins to add/modify content",
    longDescription: `I made this project to learn more about docker, AWS and Next.js. 
      
      The project has a frontend built with Next.js and styled with Tailwind CSS.
      
      The backend is built with Node.js and Express dockerised and hosted on dockerhub, from which the image is pulled to AWS ECS container service. 
      
      Both the customer facing and admin facing front end sites are connected to the same aws container, which is then used to perform crud functions to data in MongoDB.`,
    imgSrc: bak2,
    imgSrcs: [bak1, bak2, bak3],
    websiteLink: "https://backdoor.netlify.app",
    githubLink: "https://github.com/tommimaki/Backdoor.com",
    backendGithubLink: "https://github.com/tommimaki/backdoorBackend",
    adminSiteLink: "https://backdoor-admin.netlify.app/",
    technologies: [
      "Next.js",
      "Tailwind",
      "MongoDB",
      "AWS S3",
      "AWS ECS",
      "JavaScript",
      "Node.js",
      "Express",
      "Docker",
    ],
    features: [
      "Content management system built seperately, includes crud functions for everything",
      "Customer facing website, which fetches and displays said data",
      "Node.js backend",
      "AWS services",
      "Firebase Authentication",
    ],
  },
  {
    title: "Dekkikeisari",
    description:
      "A fullstack webstore for a skateshop, complete with admin panel and functionalities",
    longDescription:
      "Dekkikeisari is a fullstack skateshop webstore. The frontend is built with React, Redux, TypeScript, and Tailwind CSS, includes product listing, filtering, user authentication for customer and admin, shopping cart and profile page, and an admin panel.\n\nThe admin panel enables inventory, user, mailinglist, and order management. The application uses various libraries, ensuring responsiveness and functionality.\n\nThe backend is built with Node.js and Express. The App uses MySQL database which is hosted on Amazon RDS and S3 bucket on AWS for images. Tested with Cypress and Jest/supertest.",
    imgSrc: dekkikeisari,
    imgSrcs: [dekkikeisari, dekki2, dekki3],
    websiteLink:
      "https://cerulean-marshmallow-946350.netlify.app/signin?demoAdminLogin=true",
    githubLink: "https://github.com/tommimaki/Dekkikeisari",
    backendGithubLink: "https://github.com/tommimaki/dekkikeisari-Backend",
    technologies: [
      "React",
      "MySQL",
      "AWS S3",
      "AWS RDS",
      "TypeScript",
      "Node.js",
      "Redux",
      "Express",
      "Cypress",
      "Jest",
    ],
    features: [
      "Product listing and filtering",
      "User authentication and profile access/modification",
      "shopping cart and checkout",
      "Responsive design",
      "Admin panel for managing data with crud functions",
      "Comprehensive testing for back and frontend",
    ],
  },
  {
    title: "Tommin Lainakaarat",
    description: "A car rental Fullstack web app built with the MERN stack",
    longDescription: `A car rental website with a frontend primarily built using React and Tailwind CSS. 
      
      The backend built with Node.js, Express.js, and MongoDB. Fffers RESTful API endpoints for user authentication, profile data, car data, and reservation data. Features include CRUD functions for reservations, users, and cars, JSON Web Token authentication, NoSQL MongoDB data storage. 
      
      Supertest for API route testing, and Multer for image uploads.`,
    imgSrc: lainakaaratmin,
    imgSrcs: [lainakaaratmin, car2, car3],
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
      "Jest",
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
    longDescription:
      "A website for a beauty studio Business, Built with react ",
    imgSrc: goodmood,
    websiteLink: "https://bright-dragon-6739af.netlify.app/",
    githubLink: "https://github.com/tommimaki/GoodMood",
    technologies: ["Javascript", "React", "Node.js", "CSS"],
    features: ["React", "Css", "JavaScript"],
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
