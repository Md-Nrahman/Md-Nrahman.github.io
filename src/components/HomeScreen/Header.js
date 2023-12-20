import React from "react";

const Header = () => {
  const scrollToContact = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <section
      id="topnav"
      className="lg:px-32 md:px-14 px-7 py-5 bg-[#1C343F] font-poppins"
    >
      <div className="flex justify-between">
        <h1 className="font-southam text-white md:text-4xl text-2xl">
          Md Naimur Rahman
        </h1>
        <button
          onClick={scrollToContact}
          className="text-white md:text-base text-sm border border-white lg:px-5 px-3 py-2 rounded-md font-medium  hover:bg-white hover:text-gray-800"
        >
          Contact
        </button>
      </div>
    </section>
  );
};

export default Header;
