import React from 'react';
import './Menu.scss';


import avatar from '../../assets/images/Ellipse 33.png';
import weather from '../../assets/images/weather.png';
import explore from '../../assets/images/explore.png';
import cities from '../../assets/images/cities.png';
import settings from '../../assets/images/settings.png'


const Menu = () => {
  return (
    <div className='menu-wrapp'>
      <img className='avatar' src={avatar} alt="avatar" />
      <div className='menu'>
        <img className='img-menu' src={weather} alt="weather" />
        <img className='img-menu' src={explore} alt="explore" />
        <img className='img-menu' src={cities} alt="cities" />
        <img className='img-menu' src={settings} alt="settings" />
      </div>
    </div>
  )
}

export default Menu
