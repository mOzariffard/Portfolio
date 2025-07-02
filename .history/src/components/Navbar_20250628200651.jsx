import React, { useEffect, useState } from 'react'
import cn from '@/lib/utils'
// const navItems=[
//     {name: "Home", href: "#hero"},
//     {name: "About", href: "#about"},
//     {name: "Skills", href: "#skills"},
//     {name: "Contact", href: "#contact"},
// ]

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(()=>{
        const handleScroll =() =>{
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);

        return() => {window.removeEventListener('scroll', handleScroll)};
    },[]);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-lg' 
          : 'py-6 bg-transparent'
      }`}>
        <div className='container flex items-center justify-between'>
            <a className='text-xl font-bold text-primary flex items-center'>
                <span className='relative z-10 '>
                    <span className='text-glow text-foreground'> mOzariffard </span> Portfolio
                </span>
            </a>
        </div>
     </nav>
  )
}

export default Navbar