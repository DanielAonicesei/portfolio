import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Icons & Visual Style</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design System</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Layout & Interaction Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>App Structure</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Functionality</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Production</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Designing user interfaces and navigation menus.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Writing and reviewing code for sites.(Javascript, HTML).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Integrating multimedia content onto a site.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>GIT Command line.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Working with API's.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB*/}
        <article className="service">
          <div className="service__head">
            <h3>Social</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Empathy</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cooperation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Teamwork</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Not a leader but a great soldier</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Good Listening</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Perseverance</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT*/}
      </div>
    </section>
  )
}

export default Services