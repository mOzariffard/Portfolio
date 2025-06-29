import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
        tag: ['Next.js', 'Tailwind', 'Node.js' ],
        demoUrl: "#",
        gitHubUrl: "#"
    },
    {
        id: 6, 
        title: 'Rest Explore - Restaurant Finder',
        description: 'Find restaurants easily.',
        image:'/images/project6.png',
        tag: ['Next.js','Tailwind', 'Node.js', 'MongoDB'],
        demoUrl: "#",
        gitHubUrl: "#"
    }
];

const ProjectSection = () => {
    const imageRefs = useRef([]);

    useEffect(() => {
        // Animate all images with ScrollTrigger
        imageRefs.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                    },
                }
            );
        });

        // Animate all images with stagger effect
        gsap.fromTo(
            imageRefs.current,
            {
                 opacity: 0 ,
                 opacity: 1, 
                 duration: 1.5 
            },
             
        );
    }, []);

    return (
        <section id="projects" className='py-24 px-4 relative'>
            {/* HEADER OF PROJECT */}
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Featured <span className='text-primary'>Projects</span>
                </h2>

                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Here are some of my recent projects. Each was carefully created to showcase 
                    my skills and creativity with attention to detail and user experience.
                </p>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, index) => (
                        <div key={index} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                            <div className='h-48 overflow-hidden'>
                                <img 
                                    src={project.image}
                                    alt={project.title} 
                                    ref={(el) => imageRefs.current[index] = el}
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;