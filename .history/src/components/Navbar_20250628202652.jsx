import React, { useState } from 'react'


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
    <nav className={cn()}>

    </nav>
  )
}

export default Navbar