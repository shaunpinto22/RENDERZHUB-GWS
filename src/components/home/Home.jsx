import React, { useState } from "react";
import "./home.css";
import logo0 from "../svg/RZH21.svg";
// import logo0 from '../images/RZH21.png'
// import logo1 from '../images/RenderzHub.png'
import logo1 from "../svg/RenderzHub.svg";

const Home = () => {
  const [selectedTool, setSelectedTool] = useState(null);

  const handleToolClick = (tool) => {
    setSelectedTool((prevTool) => (prevTool === tool ? null : tool));
  };

  const getToolStyles = (tool) => {
    return selectedTool === tool
      ? {
          background: "var(--icon-bg-color-hover)",
          color: "var(--icon-svg-color-hover)",
        }
      : {};
  };

  return (
    <div className="navContainer">
      <nav>
        <div className="navgation">
          <div className="logo">
            <img src={logo0} alt="logo" />
            <img className="logoText" src={logo1} alt="logo" />
            {/* <Logo/> */}
          </div>
          <div className="navItems">
            <ul>
              <li
                onClick={(e) => handleToolClick("home")}
                style={getToolStyles("home")}
              >
                <div className="icon-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M11.03 2.59a1.501 1.501 0 0 1 1.94 0l7.5 6.363a1.5 1.5 0 0 1 .53 1.144V19.5a1.5 1.5 0 0 1-1.5 1.5h-5.75a.75.75 0 0 1-.75-.75V14h-2v6.25a.75.75 0 0 1-.75.75H4.5A1.5 1.5 0 0 1 3 19.5v-9.403c0-.44.194-.859.53-1.144ZM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v6.25h5v-9.403Z"
                    />
                  </svg>
                </div>
                <span>Home</span>
              </li>
              <li
                onClick={(e) => handleToolClick("shop")}
                style={getToolStyles("shop")}
              >
                <div className="icon-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 2048 2048"
                  >
                    <path
                      fill="currentColor"
                      d="M1792 512v1280q0 53-20 99t-55 81t-82 55t-99 21H384q-53 0-99-20t-81-55t-55-81t-21-100V512h256V384q0-79 30-149t83-122t122-82T768 0q104 0 193 52q89-52 191-52q79 0 149 30t122 83t82 122t31 149v128zm-384-128q0-52-20-99t-55-81t-82-55t-99-21q-45 0-85 15q29 36 46 71t25 70t11 71t3 77v80h256zM512 512h512V384q0-52-20-99t-55-81t-82-55t-99-21q-53 0-99 20t-81 55t-55 82t-21 99zm802 1408q-34-60-34-128V640H256v1152q0 27 10 50t27 40t41 28t50 10zm350-1280h-256v1152q0 27 10 50t27 40t41 28t50 10q27 0 50-10t40-27t28-41t10-50z"
                    />
                  </svg>
                </div>
                <span>Shop</span>
              </li>
              <li>Job</li>
              <li>About</li>
              <li>Contact</li>
              <li>Feedback</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
