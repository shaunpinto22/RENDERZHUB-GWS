import React, { useState } from "react";
import "./home.css";
import Nav from "./home_componet/Navbar";

const Home = () => {
  const [selectedTool, setSelectedTool] = useState('home');
  
  return (
    <div>
      <Nav selectedTool={selectedTool} setSelectedTool={setSelectedTool}/>
    </div>
  );
};

export default Home;
