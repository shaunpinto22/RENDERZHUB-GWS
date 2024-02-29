import React, { useState } from "react";
import "./navbar.css";
import logo0 from "../../svg/RZH21.svg";
// import logo0 from '../images/RZH21.png'
// import logo1 from '../images/RenderzHub.png'
import logo1 from "../../svg/RenderzHub.svg";

const Nav = () => {
  const [selectedTool, setSelectedTool] = useState('home');

  const handleToolClick = (tool) => {
    setSelectedTool((prevTool) => (prevTool === tool ? tool : tool));
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
              <li
                onClick={(e) => handleToolClick("job")}
                style={getToolStyles("job")}
              >
                <div className="icon-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16M96 48a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm120 24v41.61A184 184 0 0 1 128 136a184.07 184.07 0 0 1-88-22.38V72Zm0 128H40v-68.36A200.19 200.19 0 0 0 128 152a200.25 200.25 0 0 0 88-20.37zm-112-88a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8"
                    />
                  </svg>
                </div>
                <span>Job</span>
              </li>
              <li
                onClick={(e) => handleToolClick("about")}
                style={getToolStyles("about")}
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
                      d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"
                    />
                  </svg>
                </div>
                <span>About</span>
              </li>
              <li
                onClick={(e) => handleToolClick("contact")}
                style={getToolStyles("contact")}
              >
                <div className="icon-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M8 8.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-4 3.199a.95.95 0 0 1 .949-.949H8.05a.95.95 0 0 1 .949.949c0 .847-.577 1.585-1.399 1.791l-.059.015c-.684.17-1.4.17-2.084 0l-.06-.015A1.846 1.846 0 0 1 4 11.699M11.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM2 5.75C2 4.784 2.784 4 3.75 4h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 16.25 16H3.75A1.75 1.75 0 0 1 2 14.25zM3.75 5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-8.5a.75.75 0 0 0-.75-.75z"
                    />
                  </svg>
                </div>
                <span>Contact</span>
              </li>
              <li
                onClick={(e) => handleToolClick("feedback")}
                style={getToolStyles("feedback")}
              >
                <div className="icon-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 28 28"
                  >
                    <path
                      fill="currentColor"
                      d="M17.75 14c-.13 0-.27-.02-.4-.06a1.25 1.25 0 0 1-.85-1.19v-1.76c-1.4-.13-2.5-1.31-2.5-2.74v-3.5C14 3.23 15.23 2 16.75 2h6.5C24.77 2 26 3.23 26 4.75v3.5C26 9.77 24.77 11 23.25 11h-2.62l-1.88 2.5c-.24.32-.61.5-1 .5m-1-10.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25H18V12l1.88-2.5h3.38c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25zm-7.25 13a4.26 4.26 0 0 1-4.25-4.25A4.26 4.26 0 0 1 9.5 8a4.26 4.26 0 0 1 4.25 4.25A4.26 4.26 0 0 1 9.5 16.5m0-7c-1.52 0-2.75 1.23-2.75 2.75S7.98 15 9.5 15s2.75-1.23 2.75-2.75S11.02 9.5 9.5 9.5M3.471 23.92C4.781 25.3 6.811 26 9.501 26c2.69 0 4.72-.7 6.03-2.08c1.522-1.61 1.473-3.553 1.47-3.684v-.006c0-1.23-1-2.23-2.23-2.23H4.231c-1.23 0-2.23 1-2.23 2.19v.013c-.004.19-.042 2.117 1.47 3.717m.03-3.69c0-.4.33-.73.73-.73h10.54c.4 0 .73.33.73.77v.002a3.98 3.98 0 0 1-1.06 2.618c-1.01 1.07-2.69 1.61-4.94 1.61c-2.25 0-3.9-.53-4.92-1.59a3.888 3.888 0 0 1-1.08-2.669z"
                    />
                  </svg>
                </div>
                <span>Feedback</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
