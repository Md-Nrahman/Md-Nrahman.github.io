import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { projectInfo } from "../data/projectInfo";

const Projects = () => {
  return (
    <section className="lg:px-32 md:px-14 px-7 flex flex-col justify-center py-14 bg-white min-h-screen">
      <div className=" flex flex-col items-center w-5/6 lg:w-3/6 mx-auto space-y-6 my-8">
        <h1 className="font-bold text-5xl">
          <span className="text-[#66bb6a]">&#60;</span>Projects
          <span className="text-[#66bb6a]">&#47;&#62;</span>
        </h1>
      </div>

      <div className="w-full my-8">
        <div class="columns-1 md:columns-2">
          {projectInfo.map((project) => (
            <div class="relative group: mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-gray-700 before:bg-opacity-40">
              <img class="w-full rounded-md" src={project?.image} />
              <div class="test__body absolute inset-0 p-8 text-white flex flex-col">
                <div class="relative">
                  <h1 class="test__title text-xl font-bold mb-2">
                    {project?.title}
                  </h1>
                  <p class="test__author font-sm text-xs font-light">
                    {project?.description}
                  </p>
                </div>
                <div class="mt-auto">
                  <span class="test__tag bg-white bg-opacity-60 py-1 flex items-center space-x-4 px-4 rounded-md text-black">
                    {project?.techStack?.map((tech) => (
                      <img src={tech} alt={tech} className="h-4 mx-1" />
                    ))}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;