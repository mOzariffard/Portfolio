import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: 'Ryde - Ride Sharing App',
        description: 'Connects drivers with passengers.',
        image: `${import.meta.env.BaseURL}/images/project1.png`,
        tag: ['ReactNative', 'Node.js', 'MongoDB'],
        demoUrl: "#",
        gitHubUrl: "#"
    },
    {
        id: 2,
        title: 'Saas - Landing Page',
        description: 'React and Tailwind landing page.',
        image: `${import.meta.env.BaseURL}/images/project2.png`,
        tag: ['React', 'Tailwind', 'Supabase'],
        demoUrl: "#",
        gitHubUrl: "#"
    },
    {
        id: 3,
        title: 'Bookwise - Book Store',
        description: 'Online bookstore application.',
        image: `${import.meta.env.BaseURL}/images/project3.png`,
        tag: ['React', 'Node.js', 'MongoDB'],
        demoUrl: "#",
        gitHubUrl: "#"
    },
    {
        id: 4, 
        title: 'YC Dictionary - Dictionary App',
        description: 'Provides word definitions and synonyms.',
        image: `${import.meta.env.BaseURL}/images/project4.png`,
        tag: ['React', 'Tailwind', 'Node.js'],
        demoUrl: "#",
        gitHubUrl: "#"
    },
    {
        id: 5, 
        title: 'AI - Meals Planner',
        description: 'AI-powered meal planning app.',
        image: `${import.meta.env.BaseURL}/images/project5.png`,
        tag: ['TypeScript', 'D3.js', 'Next.js' ],
        demoUrl: "#",
        gitHubUrl: "#"
    },
    {
        id: 6, 
        title: 'Rest Explore - Restaurant Finder',
        description: '',
        image:`${import.meta.env.Base_URL}/images/project6.png`,
        tag: ['Next.js', 'Node.js', 'Stripe'],
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
            { opacity: 0, y: 50, scale: 0.8 },
            { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                duration: 1, 
                stagger: 0.2,
                ease: "power1.out"
            }
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
                            <div className='p-6 '> 
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tag.map((tag)=>(
                                        <span className='px-2 py-1 text-xs border  hover:bg-primary/85   font-medium rounded-full bg-secondary text-secondary-foreground '>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <h3 className='text-xl font-semibold mb-2'> {project.title} </h3>
                            <p className='text-muted-foreground text-sm mb-4'>
                                {project.description}
                            </p>

                            <div className='flex justify-between items-center ml-3 mb-2'>
                                <div className='flex space-x-3'>
                                    <a href={project.demoUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300' >
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.gitHubUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                        <Github size={20} />
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='text-center mt-12'>
                    <a href="https://github.com/mOzariffard" target='_blank' className='cosmic-button w-fit flex items-center gap-2 mx-auto'>
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;