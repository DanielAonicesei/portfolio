import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/profile.jpg';
import IMG2 from '../../assets/booking.jpg';
import IMG3 from '../../assets/words.png';
import IMG4 from '../../assets/food.jpg';
import IMG5 from '../../assets/movie.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Github Profiles',
    github: 'https://github.com/DanielAonicesei/Github-profiles',
    demo: 'https://uidesigndaily.com/posts/sketch-profile-card-gradient-day-1377'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Booking App',
    github: 'https://github.com/DanielAonicesei/BookingApp',
    demo: 'https://uidesigndaily.com/posts/photoshop-booking-form-hotel-day-173'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Word Game',
    github: 'https://github.com/DanielAonicesei/WordGame',
    demo: 'https://uidesigndaily.com/posts/photoshop-find-users-user-list-tags-location-day-483'
  },
  {
    id: 4,
    image: IMG4,
    title: 'FoodOrder UI',
    github: 'https://github.com/DanielAonicesei/FoodOrder-UI',
    demo: 'https://www.canva.com/p/templates/EAFNs2sph2o-red-professional-food-youtube-thumbnail/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Movie App',
    github: 'https://github.com/DanielAonicesei/movie-app',
    demo: 'https://uidesigndaily.com/posts/photoshop-movie-app-mobile-day-193'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio