import React from 'react';

const About = () => {
  const headingStyle = {
    fontFamily: 'Satisfy, cursive',
    color: '#c5f7ff',
  }
    const textStyle = {
      color: 'white',
      fontFamily: 'Alata, sans-serif',
  };
  return (
    <div>
      <h2 style={headingStyle}>About Us</h2>
      <p style={textStyle}>
        Welcome! We are the group Diamond Dogs. We were inspired to make a website dedicated to making a music playlist. We also wanted our project to look like our powerpoint theme.
      </p>
    </div>
  );
};

export default About;