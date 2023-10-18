import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Search from "../../pages/Search";
import { Button } from "antd";


function Nav() {
  const buttonStyle = {
    background: '#191970',
    borderColor: '#F5FFFA',
    color: '#c5f7ff',
    fontFamily: "Alata, sans-serif",
    padding: '5px 25px',
    fontSize: '15px',
    textAlign: 'center',
  };
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        
        <div style={{ position: "absolute", top: "10px", right: "10px" }}>
          <Link to="/search" style={{ marginRight: "10px" }}>
            <Button type="primary" style={buttonStyle}>Album Search</Button>
          </Link>
          <Link to="/about" style={{ marginRight: "10px" }}>
            <Button type="primary" style={buttonStyle}>About Us</Button>
          </Link>
          <Link to="/playlist" style={{ marginRight: "10px" }}>
            <Button type="primary" style={buttonStyle}>Playlist</Button>
          </Link>
          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <a
            href="/"
            onClick={() => Auth.logout()}
            style={{ marginRight: "10px" }}
          >
            <Button type="primary" style={buttonStyle}>Logout</Button>
          </a>
        </div>
      );
    } else {
      return (
        <div style={{ position: "absolute", top: "10px", right: "10px" }}>
          <Link to="/signup" style={{ marginRight: "10px" }}>
            <Button type="primary" style={buttonStyle}>Sign Up</Button>
          </Link>
          <Link to="/login" style={{ marginRight: "10px" }}>
            <Button type="primary" style={buttonStyle}>Log In</Button>
          </Link>
        </div>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
