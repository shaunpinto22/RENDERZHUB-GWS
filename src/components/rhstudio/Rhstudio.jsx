import React, { useState } from "react";
import "./rhstudio.css";

import logo0 from "../svg/RZH21.svg";
// import logo0 from '../images/RZH21.png'
// import logo1 from '../images/RenderzHub.png'
import logo1 from "../svg/RenderzHub.svg";

const Rhstudio = () => {
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
          </div>
          <div className="navRhstudioExit">
            <div className="icon-svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 12a1 1 0 0 0 1 1h7.59l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76a1 1 0 0 0-.21-.33l-4-4a1 1 0 1 0-1.42 1.42l2.3 2.29H5a1 1 0 0 0-1 1M17 2H7a3 3 0 0 0-3 3v3a1 1 0 0 0 2 0V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a1 1 0 0 0-2 0v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3"/></svg>
            </div>
            <span>Exit RHStudio</span>
          </div>
          <div className="navItems">
            <ul>
              <li
                onClick={(e) => handleToolClick("home")}
                style={getToolStyles("home")}
              >
                <div className="icon-svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 20q-.825 0-1.412-.587T3 18V4q0-.825.588-1.412T5 2h14q.825 0 1.413.588T21 4v5.65q-.475-.225-.975-.363T19 9.076V4H5v9h4.2q.225.675.75 1.175t1.175.7q-.075.5-.1 1.013t.05 1.012q-.9-.175-1.687-.663T8 15H5v3h6.325q.175.55.4 1.05t.55.95zm0-2h6.325zm12.025 3l-.3-1.5q-.3-.125-.563-.262t-.537-.338l-1.45.45l-1-1.7l1.15-1q-.05-.3-.05-.65t.05-.65l-1.15-1l1-1.7l1.45.45q.275-.2.538-.337t.562-.263l.3-1.5h2l.3 1.5q.3.125.563.263t.537.337l1.45-.45l1 1.7l-1.15 1q.05.3.05.65t-.05.65l1.15 1l-1 1.7l-1.45-.45q-.275.2-.537.338t-.563.262l-.3 1.5zm1-3q.825 0 1.413-.587T20.025 16q0-.825-.587-1.412T18.025 14q-.825 0-1.412.588T16.025 16q0 .825.588 1.413t1.412.587"/></svg>
                </div>
                <span>Customization</span>
              </li>
              <li
                onClick={(e) => handleToolClick("shop")}
                style={getToolStyles("shop")}
              >
                <div className="icon-svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 21a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1zM4 13a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1zm5-2V5H5v6zM4 21a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zm1-2h4v-2H5zm10 0h4v-6h-4zM13 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1zm2 1v2h4V5z"/></svg>
                </div>
                <span>Dashboard</span>
              </li>
              <li
                onClick={(e) => handleToolClick("job")}
                style={getToolStyles("job")}
              >
                <div className="icon-svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"/><path fill="currentColor" d="M11.78 4.72a.749.749 0 1 1-1.06 1.06L8.75 3.811V9.5a.75.75 0 0 1-1.5 0V3.811L5.28 5.78a.749.749 0 1 1-1.06-1.06l3.25-3.25a.749.749 0 0 1 1.06 0z"/></svg>
                </div>
                <span>Uploads</span>
              </li>
              <li
                onClick={(e) => handleToolClick("about")}
                style={getToolStyles("about")}
              >
                <div className="icon-svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="m4.327 6.638l.891.454zm.441 13.594l-.707-.707zm13.594-3.559l.454.891zm1.311-1.311l.891.454zm0-8.724l.891-.454zm-1.311-1.311l.454-.891zm-12.724 0l.454.891zm2.07 11.966L7 16.586zM5 9.8c0-.857 0-1.439.038-1.889c.035-.438.1-.663.18-.819l-1.782-.908c-.247.485-.346 1.002-.392 1.564C3 8.298 3 8.976 3 9.8zM5 12V9.8H3V12zm-2 0v5h2v-5zm0 5v2.914h2V17zm0 2.914c0 1.291 1.562 1.938 2.475 1.025l-1.414-1.414a.55.55 0 0 1 .939.389zm2.475 1.025L8.415 18L7 16.586l-2.939 2.939zM15.2 16H8.414v2H15.2zm2.708-.218c-.156.08-.38.145-.819.18c-.45.037-1.032.038-1.889.038v2c.824 0 1.501 0 2.052-.044c.562-.046 1.079-.145 1.564-.392zm.874-.874a2 2 0 0 1-.874.874l.908 1.782a4 4 0 0 0 1.748-1.748zM19 12.2c0 .857 0 1.439-.038 1.889c-.035.438-.1.663-.18.819l1.782.908c.247-.485.346-1.002.392-1.564c.045-.55.044-1.228.044-2.052zm0-2.4v2.4h2V9.8zm-.218-2.708c.08.156.145.38.18.819C19 8.361 19 8.943 19 9.8h2c0-.824 0-1.501-.044-2.052c-.046-.562-.145-1.079-.392-1.564zm-.874-.874a2 2 0 0 1 .874.874l1.782-.908a4 4 0 0 0-1.748-1.748zM15.2 6c.857 0 1.439 0 1.889.038c.438.035.663.1.819.18l.908-1.782c-.485-.247-1.002-.346-1.564-.392C16.702 4 16.024 4 15.2 4zM8.8 6h6.4V4H8.8zm-2.708.218c.156-.08.38-.145.819-.18C7.361 6 7.943 6 8.8 6V4c-.824 0-1.501 0-2.052.044c-.562.046-1.079.145-1.564.392zm-.874.874a2 2 0 0 1 .874-.874l-.908-1.782a4 4 0 0 0-1.748 1.748zM8.414 18v-2A2 2 0 0 0 7 16.586z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9h8m-8 4h5"/></g></svg>
                </div>
                <span>Comments</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Rhstudio;
