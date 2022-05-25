import React from 'react';
import Container from '@mui/material/Container';
import Bg from '../../assets/header-img.png';
const Header = () => {
  return (
    <header>
      <Container>
        <div className='header u-text-center'>
          <div className='header--content'>
            <h1 className='header--content_title'>Let's do it together.</h1>
            <p className='header--content_subTitle'>
              We travel the world in search of stories. Come along for the
              ride..
            </p>
            <button className='btn'>View Latest Posts</button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
