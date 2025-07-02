import React from 'react'

const certificates=[
  {
    id: 1,
    title: 'JavaScript: The Hard Parts, v2',
    description: 'Certified in full and more detail of JavaScript.',
    url: 'https://static.frontendmasters.com/ud/c/e0f3185036/fjjCYVxYTO/javascript-hard-parts-v2.pdf',
    issuedBy: 'Frontend Masters',
    dateIssued: '2023 Jan 30'
  },
  
  {

    id: 2,
    title: 'Deep JavaScript Foundations, v3',
    description: 'Certified in full and more detail of JavaScript, and functions of JavaScript .',
    url: 'https://static.frontendmasters.com/ud/c/e0f3185036/OnFYbrRoyf/deep-javascript-v3.pdf',
    issuedBy: 'Frontend Masters',
    dateIssued: 'Feb 10, 2025'
  },
  
  {
    id: 3,
    title: 'Everything You Will Need to Know About Git and GitHub',
    description: 'Certified in full about Git and Github.',
    url: 'https://static.frontendmasters.com/ud/c/e0f3185036/tNgMJoASup/everything-git.pdf',
    issuedBy: 'Frontend Masters',
    dateIssued: 'Feb 25, 2025'
  },

  {
    id: 4,
    title: 'Complete Intro to React, v9',
    description: 'Certified in full about React.',
    url: 'https://static.frontendmasters.com/ud/c/e0f3185036/hixpadIGiV/complete-react-v9.pdf',
    issuedBy: 'Frontend Masters',
    dateIssued: 'Feb 22, 2025'
  },
]



const CertificateSection = () => {
  return (
   <section id='certificate' className='py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30'>
    <div className='container mx-auto max-w-5xl'>
      <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
        My <span className='text-primary'> Certificate </span>
      </h2>
      {/* BOX OF CERTIFICATE */}

      <div className='grid sm:grid-cols-1 md:grid-cols-2 ls: grid-cols-3 gap-8'>
        <div className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
          <div className='h-48 overflow-hidden'>

          </div>
        </div>
      </div>

    </div>
   </section>
  )
}

export default CertificateSection