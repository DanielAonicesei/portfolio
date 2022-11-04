import React from 'react';
import DanielCV from '../../assets/DanielCV.pdf';

const CTA = () => {
  return (
    <div className="cta">
        <a href={DanielCV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA