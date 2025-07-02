import React from 'react'

const skills=[
    // Frontend Skills
    {name: 'HTML/CSS', level: '95' , category: 'frontend'},
    {name: 'JavaScript', level: '95' , category: 'frontend'},
    {name: 'React', level: '80' , category: 'frontend'},
    {name: 'TypeScript', level: '78' , category: 'frontend'},
    {name: 'Tailwind CSS', level: '90' , category: 'frontend'},
    {name: 'Next.js', level: '70' , category: 'frontend'},
    {name: 'Redux', level: '60' , category: 'frontend'},

    // Backend Skills
    {name: 'Node.js', level: '78' , category: 'backend'},
    {name: 'Express', level: '70' , category: 'backend'},
    {name: 'MangoDB', level: '67' , category: 'backend'},
    {name: 'GraphSQL', level: '65' , category: 'backend'},
    {name: 'PosterSQL', level: '60' , category: 'backend'},

    // Tools Skills
    {name: 'Git/Github', level: '90' , category: 'tools'},
    {name: 'Docker', level: '60' , category: 'tools'},
    {name: 'Figma', level: '85' , category: 'tools'},
    {name: 'VS Code', level: '95' , category: 'tools'},

];


const SkillsSection = () => {
  return (
    <section id='skills' className='py-24 px-4 relative bg-secondary/30'>
        {/* CONTAINER OF SKILLS */}
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
              My <span> Skills </span>
            </h2>
        </div>
    </section>
  )
}

export default SkillsSection