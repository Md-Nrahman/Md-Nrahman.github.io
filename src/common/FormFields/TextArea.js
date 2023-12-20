import React from "react";

const TextArea = ({ label, name, placeholder }) => {
  return (
    <>
      <label htmlFor={name} className="text-white">
        {label}
      </label>
      <textarea
        name={name}
        className="bg-transparent border-b text-white border-gray-200 px-4 py-2 focus:outline-none focus:border-green-500"
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

export default TextArea;
