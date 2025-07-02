import React from 'react'

const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>Me</span>
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        <div className='space-y-6'>
          <h3 className='text-2xl md:text-3xl font-semibold'>
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
        </div>
      </div>
    </section>
  )
}

export default AboutSection