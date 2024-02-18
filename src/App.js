import React from 'react';
import './App.css'
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Article from './Components/Article/Article';


function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <Article/>
    <Contact/>
     <Footer/>
    
    </>
  );
}

export default App;
