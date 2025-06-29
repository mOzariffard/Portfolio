import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap' // Missing import

const projects = [
  {
    id: 1,
    title: 'Ryde - Ride Sharing App',
    description: 'Connects drivers with passengers.',
    image: '/images/project1.png',
    tag: ['ReactNative', 'Node.js', 'MongoDB'],
    demoUrl: "#",
    gitHubUrl: "#"
  },
  {
    id: 2,
    title: 'Saas - Landing Page',
    description: 'React and Tailwind landing page.',
    image: '/images/project2.png',
    tag: ['React', 'Tailwind', 'Supabase'],
    demoUrl: "#",
    gitHubUrl: "#"
  },
  {
    id: 3,
    title: 'Bookwise - Book Store',
    description: 'Online bookstore application.',
    image: '/images/project3.png',
    tag: ['React', 'Node.js', 'MongoDB'],
    demoUrl: "#",
    gitHubUrl: "#"
  },
  {
    id: 4,
    title: 'YC Dictionary - Dictionary App',
    description: 'Provides word definitions and synonyms.',
    image: '/images/project4.png',
    tag: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
    demoUrl: "#",
    gitHubUrl: "#"
  },
  {
    id: 5,
    title: 'AI - Meals Planner',
    description: 'AI-powered meal planning app.',
    image: '/images/project5.png',
    tag: ['Next.js', 'Tailwind', 'Node.js'],
    demoUrl: "#",
    gitHubUrl: "#"
  },
  {
    id: 6,
    title: 'Rest Explore - Restaurant Finder',
    description: 'Find restaurants easily.',
    image: '/images/project6.png',
    tag: ['Next.js', 'Tailwind', 'Node.js', 'MongoDB'],
    demoUrl: "#",
    gitHubUrl: "#"
  }
];

const ProjectSection = () => {
  const imagesRef1 = useRef(null);
  const imagesRef2 = useRef(null);
  const imagesRef3 = useRef(null);
  const imagesRef4 = useRef(null);
  const imagesRef5 = useRef(null);
  const imagesRef6 = useRef(null);
  const imagesRef = [imagesRef1, imagesRef2, imagesRef3, imagesRef4, imagesRef5, imagesRef6];

  useEffect(() => {
    // Fixed variable names
    gsap.to(imagesRef1.current, { rotation: 360, duration: 2 });
    gsap.to(imagesRef2.current, { scale: 1.2, duration: 1.5 });
    gsap.to(imagesRef3.current, { x: 100, duration: 1 });
    gsap.to(imagesRef4.current, { y: 50, duration: 1.2 });
    gsap.to(imagesRef5.current, { opacity: 0.5, duration: 2 });
    gsap.to(imagesRef6.current, { skewX: 10, duration: 1.8 });
  }, []);

  return (
    <section id="projects" className='py-24 px-4 relative'>
      {/* HEADER OF PROJECT */}
      <div className='container mx-auto max-w-5xl'> {/* Fixed typo */}
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'> {/* Fixed typo */}
          Featured
          <span className='text-primary'> Projects </span>
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Here are some of my recent projects. Each was carefully created to showcase
          my skills and creativity by attention to detail and user experience.
        </p>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div key={project.id} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
              <div className='h-48 overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  ref={imagesRef[index]}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' /* Fixed typo */
                />
              </div>
              {/* Added missing project content */}
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                <p className='text-muted-foreground mb-4'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tag.map((tech, techIndex) => (
                    <span key={techIndex} className='px-2 py-1 bg-secondary text-secondary-foreground rounded-sm text-sm'>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='flex gap-2'>
                  <a href={project.demoUrl} className='px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90'>
                    Demo
                  </a>
                  <a href={project.gitHubUrl} className='px-4 py-2 border border-border rounded hover:bg-accent'>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection