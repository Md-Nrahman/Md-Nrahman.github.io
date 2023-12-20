import React from "react";

const InputField = ({ label, type, name, placeholder }) => {
  return (
    <>
      <label htmlFor={name} className="text-white">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className=" bg-transparent border-b text-white border-gray-200 px-4 py-2 focus:outline-none focus:border-green-500"
      />
    </>
  );
};

export default InputField;
