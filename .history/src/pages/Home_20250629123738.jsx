import React from 'react'
import ThemeToggle from '@/components/ThemeToggle'
import StartBackground from '@/components/StartBackground'
import Navbar from '@/components/Navbar'
import HeroSection from '../components/HeroSection'
const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/*----------------Theme Toggle----------------*/}
        <ThemeToggle />
        {/*----------------Background Effects----------------*/}
        <StartBackground/>
        {/*----------------Nav Bar----------------*/}
        <Navbar/>
        {/*----------------Main Content----------------*/}
        <HeroSection />
        {/*----------------Footer----------------*/}


    </div>
  )
}

export default Home