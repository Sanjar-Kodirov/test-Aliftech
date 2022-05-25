import React, { useContext, useState } from 'react';

import { Container } from '@material-ui/core';
import { Context } from '../../context';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Card from '../Card/Card';
const Posts = () => {
  const { photos, search } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = photos.slice(indexOfFirstPost, indexOfLastPost);
  const count = Math.floor(photos.length / postsPerPage);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container>
      <div className='posts'>
        <h2>Most Recent</h2>
        <span className='line'></span>
        <div className='posts-container'>
          <div className='row'>
            {currentPosts
              .filter((val) => {
                if (search === '') {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((el) => {
                return (
                  <div
                    key={el.id}
                    className='col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center'
                  >
                    <Card el={el} />
                  </div>
                );
              })}
          </div>
        </div>
        <Stack spacing={2}>
          <Pagination
            count={count}
            page={currentPage}
            onChange={handleChange}
          />
        </Stack>
      </div>
    </Container>
  );
};

export default Posts;
