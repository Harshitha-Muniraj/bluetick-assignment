import React, { useEffect, useState } from 'react';

import { Link } from 'react-scroll';
import "./Navbar.css"
const Navbar = () => {
  const [btnToggle,SetBtnToggle]=useState(false);
  const [showClass,SetShowClass]=useState('')
  function toggle(){
    SetBtnToggle(!btnToggle);
    console.log("ss")

  }
  function res(){
    if(btnToggle===false){
      console.log(btnToggle)
      SetShowClass('resp-hide')
    }else SetShowClass("")
  }
  useEffect(()=>{
      res()
  },[btnToggle])
  return (
    <>
    <nav className='navbar'>
      <div>
        <h1 ><ion-icon name="checkbox" id='logo'></ion-icon>BlueTick</h1>
      </div>
      <div >
        <ul className={`navlist ${showClass}` }style={btnToggle?{opacity:'1',visibility:'visible'}:null}>
        <li className='navitem' ><Link to='#hero' onClick={toggle} spy={true} smooth={true} duration={500} offset={-100}>HOME</Link></li>
        <li className='navitem' ><Link to='#services' onClick={toggle} spy={true} smooth={true} duration={500} offset={-100}>SERVICE</Link></li>
        <li className='navitem' ><Link to='#blogs' onClick={toggle} spy={true} smooth={true} duration={500} offset={-100}>BLOGS</Link></li>
        <li className='navitem' ><Link to='#contact' onClick={toggle} spy={true} smooth={true} duration={500} offset={-100}>CONTACT</Link></li>
        </ul>
        
      </div>
      <button  className='btn-mobile-nav' onClick={toggle}>
    <ion-icon name="menu-outline" id='icon-mobile-nav' style={btnToggle?{display: 'none'}:{display: 'block'}}></ion-icon>
    <ion-icon name="close-outline" id='icon-mobile-nav'style={btnToggle?{display: 'block'}:{display: 'none'}}></ion-icon>
    </button>
    </nav>
    
    
  



    </>
  )
}

export default Navbar;