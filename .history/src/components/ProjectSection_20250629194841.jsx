import React from 'react'

const projects = [
    {
        id: 1,
        title: 'Ryde - Ride Sharing App',
        description: 'A ride sharing app connecting drivers with passengers.',
        image: '/images/project1.png',
        tag: ['ReactNative', 'Node.js', 'MongoDB'],
        demoUrl: "#",
        gitHubUrl: "#"
    },
    {
        id: 2,
        title: 'Saas - Landing Page',
        description: 'A landing page built with React and Tailwind.',
        image: '/images/project2.png',
        tag: ['React', 'Tailwind', 'Supabase'],
        demoUrl: "#",
        gitHubUrl: "#"
    },
    {
        id: 3,
        title: 'Bookwise - Book Store',
        description: 'An online bookstore application.',
        image: '/images/project3.png',
        tag: ['React', 'Node.js', 'MongoDB'],
        demoUrl: "#",
        gitHubUrl: "#"
    },

    {
        id:4 , 
        title: 'YC Dictionary - Dictionary App',
        description: ' A dictionary app providing word definitions and synonyms.',
        image:'/images/project4.png',
        tag: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
        demoUrl: "#",
        gitHubUrl: "#"
    }
];

const ProjectSection = () => {
  return (
    <section id="projects" className='py-24 px-4 relative'>
         {/*HEADER OF PROJECT  */}
    <div className='contianer mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl front-bold mb-4 text-center'> Featured 
            <span className='text-primary'> Projects </span> 
            </h2>

            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
            Here are some of my recent projects. Each was carfully created to showcase 
            my skills and creativity by attention to detail and user experience.   
            </p>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project,index)=>(
                    <div key={index} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>

                        <div className='h-48 overflow-hidden'>
                            <img src={project.image} alt={project.title} />
                        </div>

                    </div>
                ))}
            </div>
    </div>
    </section>
  )
}

export default ProjectSection