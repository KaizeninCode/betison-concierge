import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='min-h-screen font-poppins bg-brand-green text-white lg:py-20 py-4'>
      <h1 className="text-5xl font-extrabold text-center">Get in touch with us</h1>
      <div className='mx-auto w-fit mt-8'>
        <div className='text-4xl my-8'>
          <h3 className='font-semibold'>Mobile</h3>
          <p>+254 729 449 143</p>
          <p>+254 733 634 937</p>
        </div>
        <div className='text-4xl my-8'>
          <h3 className='font-semibold'>WhatsApp</h3>
          <p>+254 729 449 143</p>
        </div>
        <div className='text-4xl my-8'>
          <h3 className='font-semibold'>Email</h3>
          <p>errands@betisonhomebridge.com</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
