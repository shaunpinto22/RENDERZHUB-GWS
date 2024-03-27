import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drawing from "./components/drawing/Drawing";
import Home from "./components/home/Home";
// import { Room } from './Room';
import Shop from "./components/shop/Shop";
import Profile from "./components/profile/Profile";
import Rhstudio from "./components/rhstudio/Rhstudio";
import Getstarted from "./components/get_started/Getstarted";
import Job from "./components/job/Job";
import Feedback from "./components/feedback/Feedback";
import About from "./components/about/About";
import ErrorPage from "./components/error/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Getstarted /> } errorElement={<ErrorPage/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/job" element={<Job />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rhstudio" element={<Rhstudio />} />
        </Routes>
        {/* <Room> */}
        {/* <Drawing/> */}
        {/* <Home/> */}
        {/* <Shop/> */}
        {/* <Profile/> */}
        {/* </Room> */}
        {/* <Rhstudio/> */}
        {/* Getstarted */}
        {/* <Job/> */}
        {/* <Feedback/> */}
        {/* <About/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
