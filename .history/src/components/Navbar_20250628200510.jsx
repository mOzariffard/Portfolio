import React, { useEffect, useState } from 'react';
import cn from '@/lib/utils';

const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        const debounce = (func, delay) => {
            let timeout;
            return () => {
                clearTimeout(timeout);
                timeout = setTimeout(func, delay);
            };
        };

        const debouncedHandleScroll = debounce(handleScroll, 100);

        window.addEventListener('scroll', debouncedHandleScroll);

        return () => {
            window.removeEventListener('scroll', debouncedHandleScroll);
        };
    }, []);

    return (
        <nav
            className={cn(
                'fixed w-full z-40 transition-all duration-300',
                isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-6'
            )}
        >
            <div className='container flex items-center justify-between'>
                <div className='text-xl font-bold text-primary flex items-center'>
                    <span className='relative z-10'>
                        <span className='text-glow text-foreground'> mOzariffard </span> Portfolio
                    </span>
                </div>
                <ul className='flex space-x-4'>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a href={item.href} className='text-sm font-medium text-foreground hover:text-primary'>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;