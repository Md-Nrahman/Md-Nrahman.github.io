import React from "react";

const ExperienceCard = ({
  duration,
  institution,
  designation,
  description,
  result,
}) => {
  return (
    <li class="mb-10 ml-4">
      <div class="absolute w-3 h-3 bg-gray-200 rounded-full  -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <div className="p-5 text-white border-[#66bb6a] border rounded-2xl">
        <p className="text-xs">{duration}</p>
        <h5 className="">
          <span className="text-[#66bb6a] text-lg font-medium">
            {institution}
          </span>{" "}
          <span className="text-xs">- {designation}</span>
        </h5>
        <ul className="text-xs list-disc ml-4">
          {description?.map((desc) => (
            <li>{desc}</li>
          ))}
        </ul>
        <p className="text-xs">{result}</p>
      </div>
    </li>
  );
};

export default ExperienceCard;
