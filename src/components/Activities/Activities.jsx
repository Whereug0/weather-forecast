import React from 'react';
import './Activities.scss';

import heart from '../../assets/icons/Heart.svg';
import park from '../../assets/images/park.png';
import park2 from '../../assets/images/park2.png';
import pool from '../../assets/images/pool.png';
import beach from '../../assets/images/beach.png';

const Activities = () => {
  return (
    <div className='activities'>
      <div className='title'>
        <img src={heart} alt="heart" />
        <h2>Activities in your area</h2>
      </div>
      <div className='images'>
        <img className='img' src={park} alt="park" />
        <img className='img' src={park2} alt="park2" />
        <img className='img' src={pool} alt="pool" />
        <img className='img' src={beach} alt="beach" />
      </div>
    </div>
  )
}

export default Activities
