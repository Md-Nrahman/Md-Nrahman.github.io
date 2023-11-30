import React from "react";

const Header = () => {
  return (
    <section className="lg:px-32 md:px-14 px-7 py-5 bg-gray-800 font-poppins">
      <div className="flex justify-between">
        <h1 className="font-southam text-white md:text-4xl text-2xl">
          Md Naimur Rahman
        </h1>
        <button className="text-white md:text-base text-sm border border-white lg:px-5 px-3 py-2 rounded-md font-medium  hover:bg-white hover:text-gray-800">
          Contact
        </button>
      </div>
    </section>
  );
};

export default Header;
