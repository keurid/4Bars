import React from "react";
import Search from "./Search";
import DisplayTracks from "../components/50Tracks";

const About = () => {
  const headingStyle = {
    fontFamily: "Satisfy, cursive",
    color: "#c5f7ff",
    textAlign: 'center',
  };
  const textStyle = {
    color: "white",
    fontFamily: "Alata, sans-serif",
    fontSize: "20px",
  };
  return (
    <div>
      {/* <DisplayTracks/> */}
      <h1 style={headingStyle}>About Us</h1>
      <p style={textStyle}>
        We are the group Diamond Dogs 💎🐶. <br></br>We were inspired to make a
        website dedicated to making a music playlist 🎶.<br></br> We also wanted our project
        to look like our powerpoint theme 🌌🌃🎼. <br></br>
         Our members consist of Kevin, McCue, Yasmin, and Ashley 🎉
      </p>
    </div>
  );
};

export default About;
