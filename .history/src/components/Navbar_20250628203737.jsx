import React, { useState, useEffect } from 'react'
import cn from '../lib/utils';

const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Skills', href: '#' },
    { name: 'Project', href: '#' },
    { name: 'Contact', href: '#' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled]=useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            setIsScrolled(window.scrollY>10);
        };

        window.addEventListener("scroll", handleScroll);

        return()=> window.removeEventListener("scroll", handleScroll);
    },[]);
    
  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-lg' 
          : 'py-6 bg-transparent'
      }`}>
        
    </nav>
  )
}

export default Navbar