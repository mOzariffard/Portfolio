import React from 'react'
import ThemeToggle from '@/components/ThemeToggle'
import StartBackground from '@/components/StartBackground'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectSection from '@/components/ProjectSection'
import CertificateSection from '../components/CertificateSection'

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
        <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CertificateSection />
        <ProjectSection />
        </main>
        {/*----------------Footer----------------*/}


    </div>
  )
}

export default Home