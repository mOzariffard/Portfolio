import React from 'react'

const Foooter = () => {
  return (
    <footer className='py-24 px-4 relative bord-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center bg-background text-foreground'>
        <p> &copy; {new Date().getFullYear} mOzariffardPortfolio, All rights reserved. </p>
    </footer>
  )
}

export default Foooter