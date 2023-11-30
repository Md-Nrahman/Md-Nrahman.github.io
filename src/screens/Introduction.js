import React from "react";
import ProfileImg from "../assets/images/profile.jpeg";
import { IoCloudDownloadOutline } from "react-icons/io5";
import Resume from "../assets/files/Md Naimur Rahman.pdf";

const Introduction = () => {
  const downloadResume = () => {
    //file is in the src folder
    const link = document.createElement("a");
    link.href = Resume;
    link.click();
  };

  return (
    <section className="h-[calc(95vh-2.5rem)] lg:px-32 md:px-14 px-7 bg-gray-800">
      <div className="grid md:grid-cols-2 h-full flex justify-center items-center">
        <div className="flex justify-center md:order-1">
          <img
            src={ProfileImg}
            className="md:w-[40%] w-[60%] rounded-l-3xl rounded-b-3xl border-l-4 border-b-4 border-green-500/80"
            alt="profile"
          />
        </div>
        <div className="text-white space-y-6 font-poppins">
          <div className="font-bold">
            Hello, I'm
            <br />
            <h3 className="text-3xl md:text-5xl">
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

          <button
            onClick={downloadResume}
            className="text-white md:text-base flex justify-center items-center gap-2 text-sm border border-[#66bb6a] lg:px-5 px-3 py-2 rounded-md font-medium  bg-[#66bb6a] hover:bg-transparent"
          >
            <IoCloudDownloadOutline /> Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
