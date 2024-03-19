import React from 'react';
import './Content.scss';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';

import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import tempIcon from '../../assets/icons/temp.svg'
import windIcon from '../../assets/icons/wind.svg'
import dromIcon from '../../assets/icons/drop.svg'
import sunIcon from '../../assets/icons/sunIcon.svg'
import clody from '../../assets/icons/PartlyCloudy.svg'

const Content = (props) => {
  const {
    feels,
    wind,
    chanseOfRain,
    UVindex,
  } = props

  const now = new Date();
  const hours = now.getUTCHours();
  const hoursPM = hours >= 12 ? hours - 12 : hours;
  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hoursPM < 10 ? `0${hoursPM}` : hoursPM;
  const minutes = now.getUTCMinutes();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const time = `${formattedHours}:${formattedMinutes} ${period} GMT`;


  return (
    <div className='info-forecast'>
      <div className='days'>
        <Swiper
          centeredSlides={true}
          effect="fade"
          loop={true}
          modules={[Navigation]}
          navigation
          slidesPerView={5}
          spaceBetween={50}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            MON
            <img src={clody} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            TUES
            <img src={clody} alt="" />

          </SwiperSlide>
          <SwiperSlide>
            WEDN
            <img src={clody} alt="" />

          </SwiperSlide>
          <SwiperSlide>
            THUR
            <img src={clody} alt="" />

          </SwiperSlide>
          <SwiperSlide>
            FRI
            <img src={clody} alt="" />

          </SwiperSlide>
          <SwiperSlide>
            SAT
            <img src={clody} alt="" />

          </SwiperSlide>
          <SwiperSlide>
            SUN
            <img src={clody} alt="" />

          </SwiperSlide>
        </Swiper>

      </div>

      <div className='icons'>

      </div>

      <div className='time'>{time}</div>
      <div className='airConditinos'>
        <h3 className='title'>
          AIR CONDITIONS
        </h3>        
        <div className='apiInfo'>
            <div className='iconText'>
              <img src={tempIcon} alt="tempIcon" />
              Real Feal
            </div>

          
          <p>{feels}</p>
        </div>
        <div className='apiInfo'>
          
            <div className='iconText'>
              <img src={windIcon} alt="windIcon" />
              Wind 
            </div>
          
          <p>{wind}</p>
        </div>
        <div className='apiInfo'>
          
            <div className='iconText'>
              <img src={dromIcon} alt="dromIcon" />
              Chanse of rain
            </div> 
          
          <p>{chanseOfRain}</p>
        </div>
        <div className='apiInfo'>
            <div className='iconText'>
              <img src={sunIcon} alt="sunIcon" />
              UV index
            </div>
          <p>{UVindex}</p>
        </div>
      </div>
    </div>
  )
}

export default Content;

