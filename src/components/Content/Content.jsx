import React from 'react';
import './Content.scss';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';

import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Content = (props) => {
  const {
    feels,
    wind,
    chanseOfRain,
    UVindex,
  } = props


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
          <SwiperSlide>MON</SwiperSlide>
          <SwiperSlide>TUES</SwiperSlide>
          <SwiperSlide>WEDN</SwiperSlide>
          <SwiperSlide>TRUR</SwiperSlide>
          <SwiperSlide>FRI</SwiperSlide>
          <SwiperSlide>SAT</SwiperSlide>
          <SwiperSlide>SUN</SwiperSlide>
        </Swiper>

      </div>

      <div className='icons'>

      </div>

      <div className='time'>time</div>
      <div className='airConditinos'>
        <h3 className='title'>
          AIR CONDITIONS
        </h3>        
        <p>
          <span>Real Feal </span>
          {feels}
        </p>
        <p>
          <span>Wind </span>
          {wind}
        </p>
        <p>
          <span>Chanse of rain </span>
          {chanseOfRain}
        </p>
        <p>
          <span>UV index </span>
          {UVindex}
        </p>
      </div>
    </div>
  )
}

export default Content;

