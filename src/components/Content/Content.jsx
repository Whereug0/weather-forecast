import React from 'react';
import './Content.scss';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';

import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Content = () => {
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
        <p>Real feel</p>
        <p>wind</p>
        <p>Chanse of rain</p>
        <p>UV index</p>
      </div>
    </div>
  )
}

export default Content;

