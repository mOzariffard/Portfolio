import React from 'react'

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
          
        </div>
      </div>

    </div>
   </section>
  )
}

export default CertificateSection