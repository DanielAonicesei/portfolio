import React from 'react';
import PersonalCV from '../../assets/PersonalCV.pdf';

const CTA = () => {
  return (
    <div className="cta">
        <a href={PersonalCV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA