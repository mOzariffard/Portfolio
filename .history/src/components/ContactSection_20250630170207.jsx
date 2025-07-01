import React from 'react'

const ContactSection = () => {
  return (
    <section id='contact' className='py-24 px-4 relative bg-scondary/30'>

        <div className='container mx-auto max-w-4xl text-center'>
         <h2 className='text-3xl md:text-4xl font-bold mt-4 text-center'>
            Get In <span className='text-primary'> Touch</span>
         </h2>

         <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
            Have a project in mind or just want to say hello? 
            I'm always open to discussing new opportunities, 
            collaborations, or simply connecting with fellow 
            enthusiasts. Feel free to reach out!
         </p>
        </div>

    </section>
  )
}

export default ContactSection