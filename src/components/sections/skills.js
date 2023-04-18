import React from "react";
import {
  SiHtml5,
  SiMui,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiNodedotjs,
  SiAmazonaws,
  SiMysql,
  SiSass,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

function Skills() {
  return (
    <section
      id="skills"
      className="text-center items-center justify-center md:flex-row md:justify-center mx-auto max-w-5xl"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-center mb-20">
          Skills
          <hr className="border-1 mt-1 w-full border-gray-300" />
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Front-end skills */}
        <div className="border rounded-lg shadow-md p-4">
          <h3 className="text-lg font-medium mb-6 uppercase tracking-wide">
            Front-end
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col justify-center items-center">
              <SiHtml5 className="text-5xl skill-card " />
              <p className="text-lg leading-relaxed mt-2">HTML5</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiCss3 className="text-5xl skill-card " />
              <p className="text-lg leading-relaxed mt-2">CSS3</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiJavascript className="text-5xl skill-card " />
              <p className="text-lg leading-relaxed mt-2">JavaScript</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiReact className="text-5xl skill-card " />
              <p className="text-lg leading-relaxed mt-2">React</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiTypescript className="text-5xl skill-card " />
              <p className="text-lg leading-relaxed mt-2">TypeScript</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiTailwindcss className="text-5xl  skill-card " />
              <p className="text-lg leading-relaxed mt-2">Tailwind</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiMui className="text-5xl skill-card" />
              <p className="text-lg leading-relaxed mt-2">Material UI</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiSass className="text-5xl skill-card" />
              <p className="text-lg leading-relaxed mt-2">Sass</p>
            </div>
          </div>
        </div>
        {/* Back-end skills */}
        <div className="border rounded-lg shadow-md p-4">
          <h3 className="text-lg font-medium mb-6 uppercase tracking-wide">
            Back-end
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col justify-center items-center">
              <SiExpress className="text-5xl skill-card " />
              <p className=" text-lg leading-relaxed mt-2">Express</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiMysql className="text-5xl skill-card " />
              <p className=" text-lg leading-relaxed mt-2">MySQL</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiMongodb className="text-5xl skill-card " />
              <p className=" text-lg leading-relaxed mt-2">MongoDB</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiPostgresql className="text-5xl skill-card " />
              <p className=" text-lg leading-relaxed mt-2">SQL</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiNodedotjs className="text-5xl skill-card " />
              <p className=" text-lg leading-relaxed mt-2">Node.js</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiJavascript className="text-5xl skill-card " />
              <p className="text-lg leading-relaxed mt-2">JavaScript</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiAmazonaws className="text-5xl skill-card " />
              <p className=" text-lg leading-relaxed mt-2">AWS</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaJava className="text-5xl skill-card " />
              <p className=" text-lg leading-relaxed mt-2">Java</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

// <div className="flex flex-col justify-center items-center">
//   <SiGit className="text-5xl skill-card " />
//   <p className="text-lg leading-relaxed mt-2">Git</p>
// </div>
