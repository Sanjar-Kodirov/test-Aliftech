import React, { useState } from 'react';
import img from '../../assets/IMAGE.png';
import NestedModal from '../Modal/Modal';
const Card = ({ el }) => {
  const [open, setOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);
  function modalHandler(info) {
    setModalInfo(info);
    setOpen(!open);
  }
  return (
    <div className='card'>
      {el.url && <img src={el.url} alt='' />}
      <div className='card-content'>
        <h3>Still Standing Tall</h3>
        <p>{el.title}</p>
        <button className='btn-secondary' onClick={() => modalHandler(el)}>
          More info...
        </button>
      </div>
      <NestedModal modalInfo={modalInfo} setOpen={setOpen} open={open} />
    </div>
  );
};

export default Card;
