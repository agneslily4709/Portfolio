import React from 'react'
import link from '../Assets/Portfolio.mp4'

const About = () => {
  return (
    <section className='container' id='about'>
      <h1 className='section-header'>ABOUT</h1>
        <div className='neu mt-5'>
                <video className='videobox' loop width="100%" height="550px" autoPlay muted controls>
        <source src={link} type="video/mp4"/>
        </video>
        </div>
    </section>
  )
}

export default About