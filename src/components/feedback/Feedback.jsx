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
                  <label>Name</label>
                </div>
                <div className="formElementContainer right">
                  <input type="text" name="name" />
                </div>
              </div>
              <div>
                <div className="formElementContainer left">
                  <label>Email</label>
                </div>
                <div className="formElementContainer right">
                  <input type="text" name="email" />
                </div>
              </div>
              <div>
                <div className="formElementContainer left">
                  <label>Subject</label>
                </div>
                <div className="formElementContainer right">
                  <input type="text" name="subject" />
                </div>
              </div>
              <div>
                <div className="formElementContainer left">
                  <label>Message</label>
                </div>
                <div className="formElementContainer right">
                  <textarea name="message" cols="30" rows="5"></textarea>
                </div>
              </div>
              <div>
                <div className="formElementContainer center">
                  <input type="submit" value="Submit" />
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
