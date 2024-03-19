import "./drawing.css";
import Toolbar from "./toolbar/Toolbar";
import Canvas from "./canvas/Canvas";
import Properties_Layers from "./properties_layers/Properties_Layers";
import React, { useState } from "react";

const Drawing = () => {
  const [selectedTool, setSelectedTool] = useState(null);
  const [hsva, setHsva] = useState({ h: 258, s: 53.9, v: 90.2, a: 1 });
  // const [drawColor, setDrawColor] = useState("black");
  const [drawWidth, setDrawWidth] = useState(5);

  return (
    <div className="container">
      <div className="toolbar-left">
        <Toolbar
          selectedTool={selectedTool}
          setSelectedTool={setSelectedTool}
        />
      </div>
      <div className="canvas-center">
        <Canvas
          hsva={hsva} 
          selectedTool={selectedTool}
          drawWidth={drawWidth} setDrawWidth={setDrawWidth}
          // drawColor={drawColor}
          // setDrawColor={setDrawColor}
        />
      </div>
      <div className="properties_layers-right">
        <Properties_Layers hsva={hsva} setHsva={setHsva} drawWidth={drawWidth} setDrawWidth={setDrawWidth} />
      </div>
    </div>
  );
};

export default Drawing;
