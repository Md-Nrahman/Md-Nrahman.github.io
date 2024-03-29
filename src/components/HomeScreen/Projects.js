import React from "react";
import { projectInfo } from "../../data/projectInfo";

const Projects = () => {
  return (
    <section
      id="projects"
      className="lg:px-32 md:px-14 px-7 flex flex-col justify-center py-14 bg-white min-h-screen font-poppins"
    >
      <div className=" flex flex-col items-center w-5/6 lg:w-3/6 mx-auto space-y-6 my-8">
        <h1 className="font-bold md:text-5xl text-2xl text-gray-800">
          <span className="text-[#66bb6a]">&#60;</span>Projects
          <span className="text-[#66bb6a]">&#47;&#62;</span>
        </h1>
      </div>

      <div className="w-full my-8">
        <div className="columns-1 md:columns-2 lg:columns-3">
          {projectInfo.map((project) => (
            <a
              key={project?.title}
              href={project?.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="relative group: mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-gray-700 before:bg-opacity-40">
                <img
                  className="w-full rounded-md"
                  src={project?.image}
                  alt={project?.title}
                />
                <div className=" absolute inset-0 md:p-8 p-5 text-white flex flex-col">
                  <div className="relative">
                    <h1 className="text-xl font-bold mb-2">{project?.title}</h1>
                    <p className="font-sm text-xs font-light">
                      {project?.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="bg-white bg-opacity-80 py-1 flex items-center justify-center md:space-x-4 space-x-2 px-4 rounded-md text-gray-800">
                      {project?.techStack?.map((tech, index) => (
                        <img
                          key={index}
                          src={tech}
                          alt={tech}
                          className="h-4 mx-1"
                        />
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
