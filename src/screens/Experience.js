import React from "react";
import { jobExperience } from "../data/jobExperience";
import { educationInfo } from "../data/educationInfo";
import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
  return (
    <section className="lg:px-32 md:px-14 px-7 flex flex-col justify-center py-14 bg-gray-800 min-h-screen">
      <h1 className="font-bold md:text-5xl text-2xl text-center text-white mb-3">
        <span className="text-[#66bb6a]">&#60;</span>Experience
        <span className="text-[#66bb6a]">&#47;&#62;</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-7">
        <div className="mt-8">
          <h3 className="text-white font-medium text-xl text-center">Job</h3>
          <ol class="relative border-l border-gray-200 dark:border-gray-700 mt-6">
            {jobExperience.map((exp) => (
              <ExperienceCard {...exp} />
            ))}
          </ol>
        </div>

        <div className="mt-8">
          <h3 className="text-white font-medium text-xl text-center">
            Education
          </h3>
          <ol class="relative border-l border-gray-200 dark:border-gray-700 mt-6">
            {educationInfo.map((edu) => (
              <ExperienceCard {...edu} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;