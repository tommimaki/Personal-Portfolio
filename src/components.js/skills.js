import React from "react";

function Skills() {
  return (
    <section id="skills" className="text-center my-12">
      <h2 className="text-4xl font-semibold text-center  mb-20 ">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <div>
          <i className="devicon-html5-plain colored text-5xl "></i>
          <p className=" skill-card text-lg leading-relaxed mt-2">HTML5</p>
        </div>
        <div>
          <i className="devicon-css3-plain colored text-5xl "></i>
          <p className=" skill-card text-lg leading-relaxed mt-2">CSS3</p>
        </div>
        <div>
          <i className="devicon-javascript-plain colored text-5xl "></i>
          <p className="skill-card  text-lg leading-relaxed mt-2">JavaScript</p>
        </div>
        <div>
          <i className="devicon-react-original colored text-5xl "></i>
          <p className="skill-card  text-lg leading-relaxed mt-2">React</p>
        </div>
        <div>
          <i className="devicon-nodejs-plain colored text-5xl "></i>
          <p className="skill-card text-lg leading-relaxed mt-2">Node.js</p>
        </div>
        <div>
          <i className="devicon-express-original colored text-5xl "></i>
          <p className=" skill-card text-lg leading-relaxed mt-2">Express</p>
        </div>
        <div>
          <i className="devicon-mongodb-plain colored text-5xl "></i>
          <p className=" skill-card text-lg leading-relaxed mt-2">MongoDB</p>
        </div>
        <div>
          <i className="devicon-git-plain colored text-5x l"></i>
          <p className="skill-card  text-lg leading-relaxed mt-2">Git</p>
        </div>
        <div>
          <i className="devicon-git-plain colored text-5x l"></i>
          <p className="skill-card  text-lg leading-relaxed mt-2">Typescript</p>
        </div>
        <div>
          <i className="devicon-git-plain colored text-5x l"></i>
          <p className="skill-card  text-lg leading-relaxed mt-2">Tailwind</p>
        </div>
        <div>
          <i className="devicon-git-plain colored text-5x l"></i>
          <p className="skill-card  text-lg leading-relaxed mt-2">Java</p>
        </div>
        <div>
          <i className="devicon-git-plain colored text-5x l"></i>
          <p className="skill-card  text-lg leading-relaxed mt-2">Springboot</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
