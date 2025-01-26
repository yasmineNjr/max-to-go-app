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
    <div className="relative w-full cursor-pointer text-foreground"
          onClick={toggleDropdown}
          ref={menuRef}
    >
      {/* Dropdown Trigger */}
      <div className="flex flex-row p-1">
        <button
          type="button"
          className="w-full px-4 py-2 text-left bg-transparent shadow-sm placeholder:text-accent"
        >
          {selectedOptions.length > 0
            ? selectedOptions.map((opt) => opt.label).join(", ") // Use labels
            : placeholder}
        </button>
        <div className="flex items-center mr-3">
          <IoIosArrowDown size={20} className="text-primary"/>
        </div>
      </div>
      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute mt-1 w-full bg-background shadow-md z-10 max-h-60 overflow-y-auto border border-primary rounded-b-xl overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-primary scrollbar-track-transparent ">

          {/* Existing Options */}
          {options.map((option) => (
            <div
              key={option.value}
              className="group flex flex-row w-full items-center px-2 hover:bg-secondary"
              onClick={() => toggleOption(option)}
            >
              <div className="text-foreground group-hover:text-primary">
                {option.icon}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 cursor-pointer w-full">
                <input
                  type="text"
                  value={option.label}
                  readOnly
                  className="text-sm border-none bg-transparent text-foreground group-hover:text-primary"
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
