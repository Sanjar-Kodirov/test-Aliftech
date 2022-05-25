import React from 'react';
import Container from '@mui/material/Container';
const Nav = () => {
  return (
    <Container style={{ position: 'relative' }} maxWidth='lg'>
      <nav className='nav'>
        <span className='nav-logo'>Escape.</span>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Categories</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Nav;
