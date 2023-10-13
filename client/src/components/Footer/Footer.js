import React from 'react';

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <footer>
        <p>Copyright ⓒ {year}</p>
      </footer>
    );
  }

  export default Footer;