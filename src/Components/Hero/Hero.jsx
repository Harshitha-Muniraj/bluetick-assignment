import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero' id='#hero'>
      <div className='hero-container'>
        <div className='hero-left'>
           <h2>Transforming Enterprises</h2>
           <p style={{fontSize:"1.5rem"}}>with cutting-edge, scalable, privacy-focused Generative AI Solutions</p>
           <p className='left-top3'>Founded in 2017, Bluetick Consultants is a technology-driven firm that has made a
significant impact in the Indian and US startup ecosystems.</p>
           <button className='hero-btn cursor'><a href='https://www.bluetickconsultants.com/generative-ai.html' target='blank'>Know More <ion-icon name="arrow-forward-circle-outline" id='arrow'></ion-icon></a></button>
        </div>
        <div className='hero-right'>
          <figure>
            <img src='https://litslink.com/wp-content/uploads/2021/03/web-development.png'/>
          </figure>
        </div>
      </div>
  </section>
  )
}

export default Hero