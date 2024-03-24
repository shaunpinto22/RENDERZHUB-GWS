import React, { useState } from 'react'
import './getstarted.css'

import logo0 from "../svg/RZH21.svg";
import logo1 from "../svg/RenderzHub.svg";

const Getstarted = () => {

  const [selectedTool, setSelectedTool] = useState('sign-up');

  const handleToolClick = (tool) => {
    setSelectedTool((prevTool) => (prevTool === tool ? tool : tool));
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // const getToolStyles = (tool) => {
  //   return selectedTool === tool
  //     ? {
  //         background: "var(--btn-bg-color)",
  //         color: "var(--btn-text-color)",
  //         width: "70px",
  //         height: "35px",
  //       }
  //     : {};
  // };

  // const getToolStyles = (tool) => {
  //   if (selectedTool === "sign-up" && selectedTool !== "sign-in") {
  //     return {
  //       position: "relative",
  //       background: "var(--btn-bg-color)",
  //       color: "var(--btn-text-color)",
  //       width: "70px",
  //       height: "35px",
  //       left: "0%",
  //       transition: "all 0.6s ease-in-out",
  //     };
  //   } else if (selectedTool === "sign-in" && selectedTool !== "sign-up") {
  //     return {
  //       position: "relative",
  //       background: "var(--btn-bg-color)",
  //       color: "var(--btn-text-color)",
  //       width: "70px",
  //       height: "35px",
  //       right: "0%",
  //       transition: "all 0.6s ease-in-out",
  //     };
  //   } else {
  //     return {
  //       background: "var(--btn-bg-color-hover)",
  //       color: "var(--btn-text-color-hover)",
  //       width: "70px",
  //       height: "35px",
  //     };
  //   }
  // };

  // const getToolStyles = (tool) => {
  //   return {
  //     position: 'relative',
  //     background: selectedTool === tool ? 'var(--btn-bg-color)' : 'var(--btn-bg-color-hover)',
  //     color: selectedTool === tool ? 'var(--btn-text-color)' : 'var(--btn-text-color-hover)',
  //     width: '70px',
  //     height: '35px',
  //     transform: selectedTool === 'sign-up' ? 'translateX(0%)' : 'translateX(100%)',
  //     transition: 'all 0.6s ease-in-out',
  //   };
  // };

  return (
    <div className="GetStartedContainer">
      <div className='HeroSection'>
        <img src="/images/bg.png" alt="" />
        <div className="logo getStartedLogo">
          <img src={logo0} alt="logo" />
          <img className="logoText" src={logo1} alt="logo" />
        </div>
        <div className='HeroText'>
          <span className='HeroTextMain'>Empowering Digital Artists to<br />Showcase and Collaborate</span>
          <span className='HeroTextSub'>Unleash your creativity with our platform, empowering digital artists to<br /> showcase their work and collaborate seamlessly in a vibrant community.</span>
          <div className='startedBtn'><span>Get Started</span></div>
        </div>
      </div>
      <div className='MidSection'>
        <div className='MainCardMidSection'>
          <div><span>B</span><span>U</span><span>Y</span></div>
          <div className="borderWraper"><img className='imgBgMidSection' src="/images/fg1.png" alt="" srcSet="" /></div>
          <div><span>S</span><span>E</span><span>L</span><span>L</span></div>
        </div>
        <div className='cardMidSection'>
          <div className='borderWraper'>
            <div className='cardMS'>
              <div className='cardMSPic'></div>
              <div className='cardMSText'><span>3D Model</span></div>
            </div>
          </div>
          <div className='borderWraper'>
            <div className='cardMS'>
              <div className='cardMSPic'></div>
              <div className='cardMSText'><span>Image</span></div>
            </div>
          </div>
          <div className='borderWraper'>
            <div className='cardMS'>
              <div className='cardMSPic'></div>
              <div className='cardMSText'><span>Video</span></div>
            </div>
          </div>
          <div className='borderWraper'>
            <div className='cardMS'>
              <div className='cardMSPic'></div>
              <div className='cardMSText'><span>Audio</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className='cred-Container'>
        <div className='credSlider'>
          <span className='switch'>
            <input type="checkbox" id='switcher' onChange={handleCheckboxChange} checked={isChecked} />
            <label htmlFor="switcher"></label>
          </span>
        </div>
        <div className="container-credentials" id="container-credentials">
          <div className='form-container sign-up'>
            <form>
              <h1>Create Account</h1>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
          <div className='form-container sign-in'>
            <form>
              <h1>Sign In</h1>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="/">Forget Your Password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <span className='switchForm' style={{
            position: 'absolute',
            transform: isChecked ? 'translateX(50%)' : 'translateX(-50%)',
            zIndex: 5,
            transition: 'transform 0.5s ease-in-out'
          }}>
            <div>Elevate Your Creations,<br/> Sign Up for Limitless Inspiration!</div>
            <div className='credImageSlide'><img src={logo0} className='credLogo'/></div>
            <div>Welcome back!<br/> Let's Dive Into Your World of Creations!</div>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Getstarted