import React from 'react'
import { Briefcase, Code, User } from 'lucide-react'

const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>Me</span>
        </h2>
      

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
       {/* LEFT SIDES OF ABOUT */}
        <div className='space-y-6'>
          <h3 className='text-2xl font-semibold'>
            Passionate Web Developer & Tech Creator
          </h3>
          
          <p className='text-muted-foreground'>
            With over 4 years of experience in Web development, 
            I specialize in creating dynamic and responsive web applications. 
            My journey began with a fascination for technology and a desire to 
            build impactful digital solutions. I thrive on 
            challenges and continuously seek to expand my skill set.
          </p>

          <p className='text-muted-foreground'>
            I'm passioate about creating elegant solutions to complex 
            problems, and I enjoy collaborating with others to bring innovative.
            I'm constantly learning new technologes and techniques to stay at the forefont
            of the ever-evolving web development landscape.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center '>
          <a href="#contanct" className='cosmic-button'>
            Get In Touch
          </a>

          <a href="" className='px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition-colors duration-300'>
            Download CV
          </a>
        </div>
        </div>
        {/* RIGHT SIDES OF ABOUT */}

        <div className='grid grid-cols-1 gap-6'>
          {/* FIRST BOX OF ABOUT  PAGE */}
          <div className='gradient-border p-6 card-hover'>
           {/* POSITION OF ICON */}
            <div className='flex items-start gap-4'>
              <div className='p-3 rounded-full bg-primary/10'>
              <Code className='text-primary' />
              </div>
              {/* CONTENT OF LEFT SIDE OF ABOUT IN FIRST BOX  */}
              <div className='text-left'>
                <h4 className='font-semibold text-lg'> Web Development </h4>
                
                <p className='text-muted-foreground'>
                  Creating responsive and dynamic web applications using modern technologies like React, Node.js, and more.
                </p>
              </div>
            </div>
          </div>

           {/* SECOND BOX OF ABOUT  PAGE */}
          <div className='gradient-border p-6 card-hover'>
              {/* POSITION OF ICON */}
          <div className='flex items-start gap-4'>
              <div className='p-3 rounded-full bg-primary/10'>
              <User className='text-primary' />
              </div>
              {/* CONTENT OF LEFT SIDE OF ABOUT IN SECOND BOX  */}
              <div className='text-left'>
                <h4 className='font-semibold text-lg'> UI/UX Design  </h4>
                
                <p className='text-muted-foreground'>
                  Designing intuitive user interfaces and enhancing user experiences through thoughtful design principles and usability testing.
                </p>
              </div>
            </div>
          </div>
          {/* THIRD BOX OF ABOUT  PAGE */}
          <div className='gradient-border p-6 card-hover'>
              {/* POSITION OF ICON */}
             <div className='flex items-start gap-4'>
              <div className='p-3 rounded-full bg-primary/10'>
              <Briefcase className='text-primary' />
              </div>
              {/* CONTENT OF LEFT SIDE OF ABOUT IN THIRD BOX  */}
              <div className='text-left'>
                <h4 className='text-semibold text-lg'> Project Management</h4>
                
                <p className='text-muted-foreground'>
                Leading project teams to deliver high-quality software solutions on time and within budget.                
                </p>
              </div>
            </div>
          </div>

            {/* THIRD BOX OF ABOUT  PAGE */}
            <div className='gradient-border p-6 card-hover'>
              {/* POSITION OF ICON */}
             <div className='flex items-start gap-4'>
              <div className='p-3 rounded-full bg-primary/10'>
              <Briefcase className='text-primary' />
              </div>
              {/* CONTENT OF LEFT SIDE OF ABOUT IN THIRD BOX  */}
              <div className='text-left'>
                <h4 className='text-semibold text-lg'> Project Management</h4>
                
                <p className='text-muted-foreground'>
                Leading project teams to deliver high-quality software solutions on time and within budget.                
                </p>
              </div>
            </div>
          </div>


        </div>       
      </div>
      </div>
    </section>
  )
}

export default AboutSection