import React from "react";
import ComputerImg from "../assets/computer.png";

const Introduction = () => {
  return (
    <section className="h-[calc(100vh-2.5rem)] lg:px-32 px-14 bg-gray-800">
      <div className="grid md:grid-cols-2 h-full flex justify-center items-center">
        <div className="flex justify-center md:order-1">
          <img src={ComputerImg} className="w-[50%] " />
        </div>
        <div className="text-white space-y-6 ">
          <h1 className="text-5xl font-bold">
            Front-End Software Developer Engineer
          </h1>
          <p>
            Resolving design problems, building smart user interfaces and useful
            interactions, developing rich web applications and seamless web
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
