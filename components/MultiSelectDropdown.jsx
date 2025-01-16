"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const MultiSelectDropdown = ({ 
  options,
  placeholder = "Select task status...",
  setSelectedOptions,
  selectedOptions
}) => {
  // const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const toggleOption = (value) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value) // Remove if already selected
        : [...prev, value] // Add if not selected
    );

  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false); // Close the menu when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full border-2 border-secondaryColor rounded-xl cursor-pointer"
          onClick={toggleDropdown}
          ref={menuRef}
    >
      {/* Dropdown Trigger */}
      <div className="flex flex-row p-1">
        <button
          type="button"
          className="w-full px-4 py-2 text-left bg-black shadow-sm  "
        >
          {selectedOptions.length > 0
            ? selectedOptions.join(", ")
            : placeholder}
        </button>
        <div className="flex items-center mr-3">
          <IoIosArrowDown color="#fecc02" size={20}/>
        </div>
      </div>
      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute mt-2 w-full bg-black shadow-md z-10 max-h-60 overflow-y-auto border-2 border-secondaryColor rounded-b-xl overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-secondaryColor scrollbar-track-transparent ">

          {/* Existing Options */}
          {options.map((option) => (
            <div className="group flex flex-row w-full items-center px-2 hover:bg-gray-300  " 
                  onClick={() => toggleOption(option.value)}
            >
              <div className="text-secondaryColor group-hover:text-black">
                {option.icon}
              </div>
              <div
                key={option.value}
                className="flex items-center gap-2 px-4 py-2 cursor-pointer w-full"
              >
                <input
                  type="text"
                  value={option.label}
                  readOnly
                  className="text-sm border-none bg-transparent text-secondaryColor group-hover:text-black"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
