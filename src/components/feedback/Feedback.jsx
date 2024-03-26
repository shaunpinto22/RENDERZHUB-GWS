import React, { useState } from "react";
import "./feedback.css";
import Nav from "../home/home_componet/Navbar";
import Upload from "../rhstudio/rhstudio_component/Upload";
import ProfileRadiusPic from "../rhstudio/rhstudio_component/ProfileRadiusPic";

const Feedback = () => {
  const [selectedTool, setSelectedTool] = useState("feedback");
  return (
    <div className="fbContainer">
      <Nav selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
      <div className="fbSection">
        <div className="topNav">
          <Upload />
          <ProfileRadiusPic />
        </div>
        <div className="fbForm">
          <div className="customizationContainer">
            <form action="" method="post">
              <div>
                <div className="formElementContainer left">
                  <label htmlFor="fname">Full Name</label>
                </div>
                <div className="formElementContainer right">
                  <input type="text" name="fname" />
                </div>
              </div>
              <div>
                <div className="formElementContainer left">
                  <label htmlFor="uname">Username</label>
                </div>
                <div className="formElementContainer right">
                  <input type="text" name="uname" />
                </div>
              </div>
              <div>
                <div className="formElementContainer left">
                  <label htmlFor="speciality">Speciality</label>
                </div>
                <div className="formElementContainer right">
                  <input type="text" name="speciality" />
                </div>
              </div>
              <div>
                <div className="formElementContainer center">
                  <input type="submit" value="Save" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
