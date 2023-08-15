import React, { useState } from "react";
import "./DropdownComponent.css";
import Button from "./Button"; // Import the Button component
import { RiArrowDropDownLine } from "react-icons/ri";



const DropdownItem = ({ text, onClick }) => (
  <div className="div" onClick={onClick}>
    {text}
  </div>
);

const DropdownMenu = ({ isOpen, onSelect }) => {
  if (!isOpen) {
    return null;
  }

  const academicYears = [
    "AY 2021-22 ODD",
    "AY 2021-22 EVEN",
    "AY 2022-23 ODD",
    "AY 2022-23 EVEN",
    "AY 2023-24 ODD",
    "AY 2023-24 EVEN",
    "AY 2024-25 ODD",
    "AY 2024-25 EVEN"
  ];

  return (
    <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
      {academicYears.map((year, index) => (
        <DropdownItem
          key={index}
          text={year}
          onClick={() => onSelect(year)}
        />
      ))}
    </div>
  );
};

const DropdownComponent = () => {
  const [selectedYear, setSelectedYear] = useState("Select Year");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setShowButtons(true);
    setDropdownOpen(false);
  };

  return (
    <div className="component">
      <div className="text-wrapper">ACADEMIC YEAR</div>
      <Navbar
        isOpen={isDropdownOpen}
        onClick={handleDropdownToggle}
        selectedYear={selectedYear}
      />
      <DropdownMenu isOpen={isDropdownOpen} onSelect={handleYearSelect} />
      {showButtons && (
        <div className="buttons-container">
          <Button text="Student Summary" onClickFunction={() => {}} />
          <Button text="Add Course" onClickFunction={() => {}} />
        </div>
      )}
    </div>
  );
};

const Navbar = ({ isOpen, onClick, selectedYear }) => (
  <div className={`navbar ${isOpen ? "open" : ""}`} onClick={onClick}>
    <div className="rectangle" />
    <DropdownItem text={selectedYear} />
    <RiArrowDropDownLine className="dropdown-icon" /> {/* Add the dropdown icon */}
  </div>
);


export default DropdownComponent;
