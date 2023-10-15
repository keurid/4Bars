import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';


const Home = () => {
  const headingStyle = {
    fontFamily: 'Satisfy, cursive',
    color: '#c5f7ff',
  };
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
        <audio controls autoPlay>
          <source src="lofi music.wav" type="audio/wav" />
        </audio>
      </div>
      <div style={{ paddingTop: '50px', textAlign: 'center' }}>
        <h2 style={headingStyle}>Welcome to the Home Page</h2>
        <Link to="/signup" style={{ marginRight: '10px' }}>
          <Button type="primary">Sign Up</Button>
        </Link>
        <Link to="/login" style={{ marginRight: '10px' }}>
          <Button type="primary">Log In</Button>
        </Link>
        <Link to="/about" style={{ marginRight: '10px' }}>
          <Button type="primary">About Us</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;