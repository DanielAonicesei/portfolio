import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/girl.jpg';
import AVTR2 from '../../assets/guy1.jpg';
import AVTR3 from '../../assets/guy3.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Crina',
    review: 'Daniel is a very amiable guy, we know each other since we were children. I can quickly find help from him if I have a problem.'
  },
  {
    avatar: AVTR2,
    name: 'Bogdan',
    review: 'Daniel is one of my good friends, we play sport a lot. I like his way of being and how he treats the people around him.'
  },
  {
    avatar: AVTR3,
    name: 'Denis',
    review: 'We know each other from college. Daniel is friendly and a very good colleague.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Just my friends</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt=""/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials

