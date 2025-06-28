import React, { useEffect, useState } from 'react'
import { href } from 'react-router-dom'
import cn from '@/lib/utils'
const navItems=[
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Contact", href: "#contact"},
]

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(()=>{
        const handleScroll =() =>{
            isScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll);

        return() =>window.removeEventListener('scroll', handleScroll);
    },[])

  return (
    <nav className={cn('fixed w-full z-40 transition-all duration-300', )}></nav>
  )
}

export default Navbar