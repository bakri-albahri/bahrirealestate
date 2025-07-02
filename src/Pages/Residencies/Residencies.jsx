import React from 'react'
import './Residencies.css'
import { Swiper, SwiperSlide , useSwiper } from 'swiper/react';
import 'swiper/css';
import data from '../../utils/slider.json'
import SectionTitle from '../../components/website/SectionTitle/SectionTitle';
import { sliderSettings } from '../../utils/common';
import img1 from '../../assets/images/r1.png'

const Residencies = () => {
  return (
    <div className='residencies'>
      <div className="container">
        <SectionTitle title="Best Choices" desc="Popular Residencies"/>

        <div className="slider">
            <Swiper {...sliderSettings}>
                {
                    data.map((card , index)=> (
                        <SwiperSlide key={index}>
                            <div className="card">
                              <img src={img1} alt="img" />
                              <div className="price">
                                <span>$ </span>
                                <span>{card.price}</span>
                              </div>
                              <h2>{card.name}</h2>
                              <p>{card.detail}</p>
                              
                            </div>
                        </SwiperSlide>
                    ))
                }
                
              <SliderButtons />
            </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Residencies

const SliderButtons = () => {
  const swiper = useSwiper();
  return(
    <div className="buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  )
}