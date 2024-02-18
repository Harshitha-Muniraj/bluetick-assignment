import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <section className='footer'>
      <div className='foot-container'>
        <div className='footer-left'>
           <p className='name cursor'><ion-icon name="checkbox" id='logo'></ion-icon>BlueTick Consultants</p>
           <p className='col foot-abt '>
            loremajkchhougeuvb cejlvophv ewig vyvweogg nguvngeyovgnrdnlgfelmfc
           </p>
        </div>
        <div className='flex'>
           <p className='f-subhead cursor'>RESOURCES</p>
           <ul>
            <li className='col'>Product</li>
            <li className='col'>Blog</li>
           </ul>
        </div>
        <div className='flex'>
           <p className='f-subhead cursor'>PRODUCTS</p>
           <ul className='col'>
            <li>Services</li>
           </ul>
        </div>
      </div>
      <div className='social-logos'>
        <div>
        <ion-icon name="logo-facebook" id='icon'></ion-icon>
        </div>
        <div>
        <ion-icon name="logo-instagram" id='icon'></ion-icon>
        </div>
        <div>
        <ion-icon name="logo-linkedin" id='icon'></ion-icon>
        </div>
        <div>
        <ion-icon name="logo-twitter" id='icon'></ion-icon>
        </div>
      </div>
      
      <div className='foot-btm'>All Rights Reserved</div>
    </section>
  )
}

export default Footer