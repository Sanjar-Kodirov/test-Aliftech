import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  bordeRadius: '4px',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NestedModal({ setOpen, open, modalInfo }) {
  // console.log(modalInfo);
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        {modalInfo && (
          <Box sx={{ ...style, width: 400 }}>
            <img style={{ width: '100%' }} src={modalInfo.url} alt='' />
            <h2 id='parent-modal-title'>{modalInfo.title}</h2>
            <p id='parent-modal-description'>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
          </Box>
        )}
      </Modal>
    </div>
  );
}
