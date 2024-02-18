import React, { useState } from 'react'
import './Article.css';
import data from './Data'
import { Link } from 'react-router-dom';


const Article = () => {
    
    const [currentIndex,setCurrentIndex]=useState(0);
  const previousbtn=()=>{
    if(currentIndex==0){
      setCurrentIndex(data.length-1)
    }else setCurrentIndex(currentIndex-1)
  }
  const nextbtn=()=>{
    if(currentIndex==data.length-1){
      setCurrentIndex(0)
    }else setCurrentIndex(currentIndex+1)
  }
  const {id,head,subhead,link,desc}=data[currentIndex]
  return (
    <section className='article' id='#blogs'>
    <div style={{width: "40%",
    textAlign: "center",flex:1}}>
      <h2>Techie Talks</h2>
    </div>
    <div className='article-container'>

    <div className='arrow'>
    <div onClick={previousbtn} className='prev-btn'><ion-icon name="arrow-back" id='arrow'></ion-icon></div>
    </div>
    {
      
        <div key={id} className='card'>
                 <div className='card-top'>
                    <h4>{head}</h4>
                    <p>{subhead}</p>
                 </div>
                <div style={{paddingBottom:"2rem"}}>
                    <p className='card-desc'>{desc.slice(0,325)}</p>
                    <button className='art-btn'><a href={link}target="_blank" className='read-anchor'>Read More</a></button>
                </div>
                </div>
                
    }
                
       
      <div className='arrow'>
      <div onClick={nextbtn} className='nxt-btn'><ion-icon name="arrow-forward" id='arrow'></ion-icon></div>
    </div>
    
    </div>
    </section>
  )
}

export default Article