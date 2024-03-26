import React, { useState } from "react";
import "./about.css";
import Nav from "../home/home_componet/Navbar";
import Upload from "../rhstudio/rhstudio_component/Upload";
import ProfileRadiusPic from "../rhstudio/rhstudio_component/ProfileRadiusPic";

import logo0 from "../svg/RZH21.svg";
import logo1 from "../svg/RenderzHub.svg";

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
            <div className="aboutLogo">
                <img className="aboutMainLogo" src={logo0} alt="logo" />
                <img className="aboutSubLogo" src={logo1} alt="logo" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
