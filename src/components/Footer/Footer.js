import React from 'react';
import Nav from '../Nav/Nav';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <h2>Stay in Touch</h2>
        <span className='line'></span>
      </div>
      <div className='navfooter'>
        <Nav />
      </div>
    </footer>
  );
};

export default Footer;
