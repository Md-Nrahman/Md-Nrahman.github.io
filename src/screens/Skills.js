import React from "react";
import Bootstrap from "../assets/images/bootstrap.png";
import Css from "../assets/images/css3.png";
import Express from "../assets/images/express.png";
import Git from "../assets/images/git.png";
import Html from "../assets/images/html5.png";
import Illustrator from "../assets/images/illustrator.png";
import Javascript from "../assets/images/javascript.png";
import MongoDB from "../assets/images/mongodb.png";
import Node from "../assets/images/node.png";
import Photoshop from "../assets/images/photoshop.png";
import ReactImg from "../assets/images/react.png";
import Tailwind from "../assets/images/tailwindcss.png";
import VSCode from "../assets/images/vscode.webp";
import NextJS from "../assets/images/nextjs.png";

const Skills = () => {
  return (
    <section
      id="skills"
      className="lg:px-32 md:px-14 px-7 flex flex-col justify-center py-14 bg-white min-h-screen"
    >
      <div className=" flex flex-col items-center w-5/6 lg:w-3/6 mx-auto space-y-6 font-poppins">
        <h1 className="font-extrabold md:text-5xl text-2xl text-gray-800">
          <span className="text-[#66bb6a]">&#60;</span>TechnicalSkills
          <span className="text-[#66bb6a]">&#47;&#62;</span>
        </h1>
        <h1 className="md:text-base text-sm text-center text-gray-800">
          The main area of expertise is front end development (client side of
          the web).
        </h1>
        <p className="md:text-base text-sm text-center text-gray-800">
          I also Develop Full Stack Applications using MERN Stack.
        </p>
        <p className="md:text-base text-sm text-center text-gray-800 font-semibold">
          Visit my{" "}
          <a
            className="text-[#0077b5]"
            href="https://www.linkedin.com/in/mdnrahman/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>{" "}
          for more details.
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-7 w-5/6 lg:w-4/6 mx-auto items-center gap-y-16 md:gap-x-16 gap-8 my-16">
        <img src={Html} alt="Html" className="w-14 mx-auto" />
        <img src={Css} alt="Css" className="w-16 mx-auto" />
        <img src={Bootstrap} alt="Bootstrap" className="w-14 mx-auto" />
        <img src={Tailwind} alt="Tailwind" className="w-24 mx-auto" />
        <img src={Javascript} alt="Javascript" className="w-14 mx-auto" />
        <img src={ReactImg} alt="React" className="w-14 mx-auto" />
        <img src={NextJS} alt="NextJS" className="w-14 mx-auto" />
        <img src={Node} alt="Node" className="w-14 mx-auto" />
        <img src={Express} alt="Express" className="w-24 mx-auto" />
        <img src={MongoDB} alt="MongoDB" className="w-14 mx-auto" />
        <img src={VSCode} alt="VSCode" className="w-12 mx-auto" />
        <img src={Git} alt="Git" className="w-12 mx-auto" />
        <img src={Illustrator} alt="Illustrator" className="w-14 mx-auto" />
        <img src={Photoshop} alt="Photoshop" className="w-14 mx-auto" />
      </div>
    </section>
  );
};

export default Skills;
