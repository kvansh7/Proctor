import React, { useState } from "react";
import "./DropdownPage.css"; // Import your custom styles
import DropdownComponent from "./DropdownComponent"; // Import the DropdownComponent
import Button from "./Button"; // Import the Button component
import {FaUserCircle} from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";


const DropdownPage = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [showButtons, setShowButtons] = useState(false);

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setShowButtons(true);
  };

  return (
    <div className="page-container">
      <div className="main-content">
      <FaUserCircle className="profile-photo" size="12rem" color='grey'/>
        <h1 className="welcome-text">Welcome Proctor</h1>
        <div className="separator-line"></div>
        <DropdownComponent onSelectYear={handleYearSelect} />
      </div>
      {showButtons && (
        <div className="buttons-container">
          <Button text="Student Summary" onClickFunction={() => {}} />
          <Button text="Add Course" onClickFunction={() => {}} />
        </div>
      )}
    </div>
  );
};

export default DropdownPage;
