import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils';
import { Key } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Project', href: '#project' },
    { name: 'Contact', href: '#contact' },
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
            <a href='#hero' className='text-xl font-bold text-primary flex items-center'>
                <span className='relative z-10'>
                    <span className='text-glow text-foreground'>
                        mOzariffard
                    </span>
                     Portfolio
                </span>
            </a>

            {/* DESKTOP NAV */}
            <div className='hidden md:flex space-x-6'>
                {navItems.map((item , key)=> (
                    <a key={key} href={item.href}>
                        {item.name}
                    </a>
                ))}
            </div>
            {/* MOBILE NAV */}
        </div>
    </nav>
  )
}

export default Navbar