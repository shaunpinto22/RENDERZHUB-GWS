import React, { useState } from "react";
import "./about.css";
import Nav from "../home/home_componet/Navbar";
import Upload from "../rhstudio/rhstudio_component/Upload";
import ProfileRadiusPic from "../rhstudio/rhstudio_component/ProfileRadiusPic";

const About = () => {
  const [selectedTool, setSelectedTool] = useState("about");
  return (
    <div className="aboutContainer">
      <Nav selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
      <div className="aboutSection">
        <div className="topNav">
          <Upload />
          <ProfileRadiusPic />
        </div>
        <div className="aboutInfo">
            
        </div>
      </div>
    </div>
  );
};

export default About;
