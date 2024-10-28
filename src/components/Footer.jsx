import React from 'react'

const Footer = () => {
  return (
      <div className="bg-gray-800 container py-20 flex flex-col md:flex-row md:items-center justify-between gap-10">
          {/* brand info */}
          <div className="space-y-4">
              <div className='py-3'>
                  <h1 className='text-white font-bold text-2xl'>Travel</h1>
              </div>
              <p className="text-gray-400 xl:max-w-[400px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
                  voluptatum ut molestiae facere.
              </p>
          </div>
          {/* social icons */}
          
          <div>
              <span className='font-bold text-white  my-10'>Get In Touch</span>
              <div className="flex space-x-6 text-3xl mt-6">
                  
                  <i className="fa-brands fa-facebook text-white"></i>
                  <i class="fa-brands fa-instagram text-white"></i>
                  <i class="fa-brands fa-youtube text-white"></i>
              </div>
          </div>
      </div>
  )
}

export default Footer