import React from "react";
import "./profile.css";
import Nav from "../home/home_componet/Navbar";

import ReactPlayer from "react-player/lazy";
import Player from "react-material-music-player";

import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { Track, PlayerInterface } from 'react-material-music-player'

const Profile = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
      background: {
        paper: "#0A1929",
      },
      action: {
        active: "#fff",
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: 0.16,
      },
      text: {
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)",
        primary: "#fff",
        secondary: "#AAB4BE",
      },
    },
  });
  
  

  return (
    <div className="profilePageContainer">
      <div>
        <Nav />
      </div>
      <div className="profileContainer">
        <div className="bannerPicContainer">
          <div className="profilePicContainer"></div>
          <div className="icon-svg social-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M8 10a1 1 0 0 1 .993.883L9 11v5a1 1 0 0 1-1.993.117L7 16v-5a1 1 0 0 1 1-1m3-1a1 1 0 0 1 .984.821a5.82 5.82 0 0 1 .623-.313c.667-.285 1.666-.442 2.568-.159c.473.15.948.43 1.3.907c.315.425.485.942.519 1.523L17 12v4a1 1 0 0 1-1.993.117L15 16v-4c0-.33-.08-.484-.132-.555a.548.548 0 0 0-.293-.188c-.348-.11-.849-.052-1.182.09c-.5.214-.958.55-1.27.861L12 12.34V16a1 1 0 0 1-1.993.117L10 16v-6a1 1 0 0 1 1-1M8 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="profileTexts">
          <span className="fullname">Full Name</span>
          <span className="username">@username</span>
          <span className="speciality">Speciality</span>
          {/* <ReactPlayer
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            controls
          /> */}
          {/* <ThemeProvider theme={theme}>
            <Player />
          </ThemeProvider> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
