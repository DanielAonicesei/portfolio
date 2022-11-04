import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>DANIEL</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Serviceses</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/danutz.aonicesei" target="_blank"><FaFacebookF /></a>
        <a href="https://www.instagram.com/daniel_aonicesei/" target="_blank"><BsInstagram /></a>
        <a href="https://github.com/DanielAonicesei" target="_blank"><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Daniel Aonicesei. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer