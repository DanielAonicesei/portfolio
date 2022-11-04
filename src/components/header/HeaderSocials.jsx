import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/daniel-aonicesei-70548a200/" target="_blank" rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/DanielAonicesei" target="_blank" rel='noreferrer'><FaGithub /></a>
        <a href="https://www.facebook.com/danutz.aonicesei" target="_blank" rel='noreferrer'><FaFacebookSquare /></a>
    </div>
  )
}

export default HeaderSocials