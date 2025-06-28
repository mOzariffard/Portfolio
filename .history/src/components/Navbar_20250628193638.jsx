import React from 'react'
import { href } from 'react-router-dom'
import cn from '@/lib/utils'
const navItems=[
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Contact", href: "#contact"},
]

const Navbar = () => {
  return (
    <nav className={cn()}></nav>
  )
}

export default Navbar