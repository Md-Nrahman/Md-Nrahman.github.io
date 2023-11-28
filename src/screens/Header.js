import React from "react";

const Header = () => {
  return (
    <section className="lg:px-32 px-14 py-5 bg-gray-800">
      <div className="flex justify-between">
        <h1 className="font-southam text-white text-4xl">Md Naimur Rahman</h1>
        <button className="text-white border border-white px-5 py-2 rounded-md font-medium  hover:bg-white hover:text-black">
          Contact
        </button>
      </div>
    </section>
  );
};

export default Header;
