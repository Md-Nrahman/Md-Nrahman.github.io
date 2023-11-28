import React from "react";
import ComputerImg from "../assets/computer.png";
import { IoCloudDownloadOutline } from "react-icons/io5";

const Introduction = () => {
  return (
    <section className="h-[calc(95vh-2.5rem)] lg:px-32 md:px-14 px-7 bg-gray-800">
      <div className="grid md:grid-cols-2 h-full flex justify-center items-center">
        <div className="flex justify-center md:order-1">
          <img src={ComputerImg} className="w-[80%] " />
        </div>
        <div className="text-white space-y-6 ">
          <div className="font-bold">
            Hello, I'm
            <br />
            <h3 className=" text-5xl">
              <span className="text-[#66bb6a]">Md. Naimur </span>Rahman
            </h3>
            {/* <br /> */}
            <span className="text-end">Software Engineer</span>
          </div>
          <p>
            Resolving design problems, building smart user interfaces and useful
            interactions, developing rich web applications and seamless web
            experiences.
          </p>

          <button className="text-white md:text-base flex justify-center items-center gap-2 text-sm border border-[#66bb6a] lg:px-5 px-3 py-2 rounded-md font-medium  bg-[#66bb6a] hover:bg-transparent">
            <IoCloudDownloadOutline /> Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
