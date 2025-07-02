import React, { useState } from 'react'

const skills=[
    // Frontend Skills
    {name: 'HTML/CSS', level: 95 , category: 'frontend'},
    {name: 'JavaScript', level: 95 , category: 'frontend'},
    {name: 'React', level: 80 , category: 'frontend'},
    {name: 'TypeScript', level: 78 , category: 'frontend'},
    {name: 'Tailwind CSS', level: 90 , category: 'frontend'},
    {name: 'Next.js', level: 70 , category: 'frontend'},
    {name: 'Redux', level: 60 , category: 'frontend'},

    // Backend Skills
    {name: 'Node.js', level: 78 , category: 'backend'},
    {name: 'Express', level: 70 , category: 'backend'},
    {name: 'MongoDB', level: 67 , category: 'backend'},
    {name: 'GraphQL', level: 65 , category: 'backend'},
    {name: 'PostgreSQL', level: 60 , category: 'backend'},

    // Tools Skills
    {name: 'Git/Github', level: 90 , category: 'tools'},
    {name: 'Docker', level: 60 , category: 'tools'},
    {name: 'Figma', level: 85 , category: 'tools'},
    {name: 'VS Code', level: 95 , category: 'tools'},

];

const categoreis=[ 'all','frontend', 'backend', 'tools'];

const SkillsSection = () => {

    const[activeCategory, SetActiveCategory]=useState('all');

  return (
    <section id='skills' className='py-24 px-4 relative bg-secondary/30'>
        {/* CONTAINER OF SKILLS */}
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
              My <span className='text-primary'> Skills </span>
            </h2>

            {/* CATEGORIES OF SKILLS */}

            <div className='flex flex-wrap justify-center gap-4 mb-12'>
                {categoreis.map((category, index)=>(
                    <button key={index} className='px-5 py-2'> {category} </button>
                ))}            
            </div>

            {/* ITEMS OF SKILLS */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {skills.map((skill, index) => (
                    // SKILL ITEM
                    <div key={index} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                        <div className='text-left mb-4'>
                            <h3 className='font-semibold text-lg'>{skill.name}</h3>
                        </div>

                        {/* SKILLS PORCESS BAR */}
                        <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                        <div className='bg-primary h-2 rounded-full origin-left animate-[glow_1.5_ease-out]' 
                        style={{ width: skill.level+ "%"}} 
                        />
                        </div>


                        <div className='text-right mt-1'>
                            <span className='text-sm text-muted-foreground'> {skill.level}% </span>
                        </div>
                       
                    </div>
                ))}
            </div>

        </div>
    </section>
  )
}

export default SkillsSection