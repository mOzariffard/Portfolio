import { ArrowUp } from 'lucide-react'
import React from 'react'

const Foooter = () => {
  return (
    <footer className='py-24 px-4 relative bord-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center bg-card text-foreground'>
        <p className='text-sm tex-muted-foreground'> &copy; {new Date().getFullYear} mOzariffardPortfolio, All rights reserved. </p>

        <a href="#hero">
            <ArrowUp className='p-2 rounded-full ' /> 
        </a>
    </footer>
  )
}

export default Foooter