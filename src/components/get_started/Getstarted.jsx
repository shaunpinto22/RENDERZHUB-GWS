import React,{useState} from 'react'
import './getstarted.css'

const Getstarted = () => {

  const [selectedTool, setSelectedTool] = useState('sign-up');
  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(false);

  const handleRegisterClick = () => {
    setIsRegisterActive(true);
    setIsLoginActive(false); // Reset login state
  };

  const handleLoginClick = () => {
    setIsLoginActive(true);
    setIsRegisterActive(false); // Reset register state
  };

  const handleToolClick = (tool) => {
    setSelectedTool((prevTool) => (prevTool === tool ? tool : tool));
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

  const getToolStyles = (tool) => {
    return {
      position: 'relative',
      background: selectedTool === tool ? 'var(--btn-bg-color)' : 'var(--btn-bg-color-hover)',
      color: selectedTool === tool ? 'var(--btn-text-color)' : 'var(--btn-text-color-hover)',
      width: '70px',
      height: '35px',
      transform: selectedTool === 'sign-up' ? 'translateX(0%)' : 'translateX(100%)',
      transition: 'all 0.6s ease-in-out',
    };
  };

  return (
    <div className='cred-Container'>
      <div className='credSlider'>
        {/* <span id='slider'></span> */}
        <span onClick={(e) => handleToolClick("sign-up")} style={getToolStyles("sign-up")}>Sign-Up</span>
        <span onClick={(e) => handleToolClick("sign-in")} style={getToolStyles("sign-in")}>Sign-In</span>
      </div>
      <div className='container-credentials' id="container-credentials">
        <div className='form-container sign-up'>
          <form>
            <h1>Create Account</h1>
            {/* <div className="social-icons">
              <a href="/" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="/" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="/" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="/" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div> */}
            {/* <span>or use your email for registeration</span> */}
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className='form-container sign-in'>
          <form>
            <h1>Sign In</h1>
            {/* <div className="social-icons">
              <a href="/" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="/" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="/" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="/" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div> */}
            {/* <span>or use your email password</span> */}
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="/">Forget Your Password?</a>
            <button>Sign In</button>
          </form>
        </div>
        {/* <div className="toggle-container">
            <div className="toggle">
                <div className={`toggle-panel toggle-left ${isLoginActive ? 'active' : 'hidden'}`}>
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button className={isLoginActive ? 'active' : 'hidden'} id="login" onClick={handleLoginClick}>Sign In</button>
                </div>
                <div className={`toggle-panel toggle-right ${isRegisterActive ? 'active' : 'hidden'}`}>
                    <h1>Hello, Friend!</h1>
                    <p>Register with your personal details to use all of site features</p>
                    <button className={isRegisterActive ? 'active' : 'hidden'} id="register" onClick={handleRegisterClick}>Sign Up</button>
                </div>
            </div>
        </div> */}
      </div>
    </div>
  )
}

export default Getstarted
