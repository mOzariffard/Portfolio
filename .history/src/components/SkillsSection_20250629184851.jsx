import React, { useState, useEffect } from 'react'
import {cn} from '@/lib/utils';
import CountUp from 'react-countup';

const skills = [
  // Frontend Skills
  {name: 'HTML/CSS', level: 95, category: 'frontend'},
  {name: 'JavaScript', level: 95, category: 'frontend'},
  {name: 'React', level: 80, category: 'frontend'},
  {name: 'TypeScript', level: 78, category: 'frontend'},
  {name: 'Tailwind CSS', level: 90, category: 'frontend'},
  {name: 'Next.js', level: 70, category: 'frontend'},
  {name: 'Redux', level: 60, category: 'frontend'},
  // Backend Skills
  {name: 'Node.js', level: 78, category: 'backend'},
  {name: 'Express', level: 70, category: 'backend'},
  {name: 'MongoDB', level: 67, category: 'backend'},
  {name: 'GraphQL', level: 65, category: 'backend'},
  {name: 'PostgreSQL', level: 60, category: 'backend'},
  // Tools Skills
  {name: 'Git/Github', level: 90, category: 'tools'},
  {name: 'Docker', level: 60, category: 'tools'},
  {name: 'Figma', level: 85, category: 'tools'},
  {name: 'VS Code', level: 95, category: 'tools'},
];

const categories = ['all', 'frontend', 'backend', 'tools'];

// Individual Skill Item Component
const SkillItem = ({ skill, index, isVisible }) => {
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      // Small delay for staggered animation
      const timer = setTimeout(() => {
        setAnimatedWidth(skill.level);
      }, index * 100);
      
      return () => clearTimeout(timer);
    } else {
      setAnimatedWidth(0);
    }
  }, [isVisible, skill.level, index]);

  return (
    <div className='bg-card p-6 rounded-lg shadow-xs card-hover'>
      <div className='text-left mb-4'>
        <h3 className='font-semibold text-lg'>{skill.name}</h3>
      </div>
      
      {/* SKILLS PROGRESS BAR */}
      <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
        <div 
          className='bg-primary h-2 rounded-full origin-left transition-all duration-2000 ease-out'
          style={{ 
            width: `${animatedWidth}%`,
            transitionDelay: `${index * 100}ms`
          }}
        />
      </div>
      
      <div className='text-right mt-1'>
        <span className='text-sm font-semibold text-muted-foreground'> 
          {isVisible ? (
            <CountUp 
              end={skill.level} 
              duration={2.5}
              delay={index * 0.1}
            />
          ) : 0}% 
        </span>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  
  const filteredSkills = skills.filter((skill) =>
    activeCategory === 'all' || skill.category === activeCategory
  );

  useEffect(() => {
    // Trigger animation when component mounts or category changes
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id='skills' className='py-24 px-4 relative bg-secondary/30'>
      {/* CONTAINER OF SKILLS */}
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          My <span className='text-primary'> Skills </span>
        </h2>
        
        {/* CATEGORIES OF SKILLS */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {categories.map((category, index) => (
            <button 
              key={index} 
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                activeCategory === category 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary/70 text-foreground hover:bg-secondary'
              )}
            > 
              {category} 
            </button>
          ))}
        </div>
        
        {/* ITEMS OF SKILLS */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredSkills.map((skill, index) => (
            <SkillItem 
              key={`${skill.name}-${activeCategory}`}
              skill={skill}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection