import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils';

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
    <nav className={cn("fixed w-full z-40 transition-all duration-300 ",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-6"
    )}>
        <div className='container flex items-center justify-between'>
            <a className='text-xl font-bold text-primary flex items-center'>
                <span className='relative z-10'>
                    <span className='text-glow text-foreground'>
                        mOzariffard
                    </span>
                </span>
            </a>
        </div>
    </nav>
  )
}

export default Navbar