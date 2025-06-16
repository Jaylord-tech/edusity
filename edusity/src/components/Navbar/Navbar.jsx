import React, { useEffect, useState } from 'react'
import './Navbar.css'
import edusity from '../../assets/edusity-logo.svg'
import { Link, ScrollLink } from 'react-scroll';
import menu from '../../assets/hamburger-menu.png'

const Navbar = () => {

  const [sticky, setSticky]= useState(false);   

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [menuclick, setMenuclick]= useState(false); 
 const handburger = () =>{
  menuclick? setMenuclick(false): setMenuclick(true);
 }

 
// the Link from scroll uses to, smooth , offset, and duration
  return (

  <nav className= {`container ${sticky ? 'dark-navbar' : ''}`} >
    <img src={edusity} alt="" className='logo-image'/>
    
    <ul className={menuclick ?'':'hide-menu'}>
        <li><Link to='hero' smooth={true} offset= {0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset= {-220} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset= {-100} duration={500}>About</Link></li>
        <li><Link to='campus' smooth={true} offset= {-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonial' smooth={true} offset= {-210} duration={500}>Testimonials</Link></li>
        <li><Link  to='contact' smooth={true} offset= {-190} duration={500} className='btn'>Contact Us</Link></li>
    </ul>
    <img onClick={handburger} className='menu-icon' src={menu} alt="" />
  </nav>
  )
}

export default Navbar
