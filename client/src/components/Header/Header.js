import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headingStyle = {
    fontFamily: "Satisfy, cursive",
    color: "#c5f7ff",
  };

  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <h1 style={headingStyle}>🎵4Bars</h1>
    </Link>
  );
};

export default Header;
