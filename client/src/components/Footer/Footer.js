import React from 'react';

const Footer = () => {
  const textStyle = {
    color: 'white',
    fontFamily: 'Alata, sans-serif',
};
    let date = new Date();
    let year = date.getFullYear();
    return (
      <footer>
        <p style={textStyle}>Copyright ⓒ {year}</p>
      </footer>
    );
  }

  export default Footer;