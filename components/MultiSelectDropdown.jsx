"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const MultiSelectDropdown = ({ 
  options,
  placeholder = "Select task status...",
  setSelectedOptions,
  selectedOptions
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOptions, setSelected] = useState([]);
  const menuRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const toggleOption = (option) => {
    setSelectedOptions((prev) => {
      const isSelected = prev.some((item) => item.value === option.value);
  
      if (isSelected) {
        // Remove the option if already selected
        return prev.filter((item) => item.value !== option.value);
      } else {
        // Add the option if not selected
        return [...prev, option];
      }
    });
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
    <div className="relative w-full cursor-pointer"
          onClick={toggleDropdown}
          ref={menuRef}
    >
      {/* Dropdown Trigger */}
      <div className="flex flex-row p-1">
        <button
          type="button"
          className="w-full px-4 py-2 text-left bg-black shadow-sm"
        >
          {selectedOptions.length > 0
            ? selectedOptions.map((opt) => opt.label).join(", ") // Use labels
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
            <div
              key={option.value}
              className="group flex flex-row w-full items-center px-2 hover:bg-gray-300"
              onClick={() => toggleOption(option)}
            >
              <div className="text-secondaryColor group-hover:text-black">
                {option.icon}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 cursor-pointer w-full">
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
