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
    const [isMenuOpen , setIsMenuOpen] = useState(false);

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
                    <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                        {item.name}
                    </a>
                ))}
            </div>
            {/* MOBILE NAV */}
            <div className={cn("fixed inset-0 bg-background/90 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-al duration-300 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none:" 
            )}>
            <div className='flex flex-col space-y-8 text-xl '>
                {navItems.map((item , key)=> (
                    <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                        {item.name}
                        onClick={()=> setIsMenuOpen(false)}
                    </a>
                ))}
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar