import React, { useEffect, useState } from 'react'
import cn from '@/lib/utils'

const navItems=[
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Contact", href: "#contact"},
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = () =>{
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);

        return() => window.removeEventListener('scroll', handleScroll);
    },[]);

  return (
    <nav>
     </nav>
  )
}

export default Navbar