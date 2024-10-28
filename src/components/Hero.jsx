import React from 'react'
import hero from "../assets/Travelers.jpeg";
const Hero = () => {
  return (
    <section>
          <div className="p-4 lg:p-16 bg-brandWhite rounded container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px">
            {/* text section */}
            <div className='flex flex-col justify-center xl:pr-40'>
                  <div className='md:flex md:flex-col md:justify-start mt-5 lg:mt-24 mb-10 md:mb-0 space-y-6 text-center md:text-left'>
                      <h1 className='md:text-left md:ms-20 text-5xl font-bold text-blue-950'>Time To Travel</h1>
                      <p className='md:text-left md:ms-20 text-lg text-gray-400 mt-4'>A set of solutions destigne tohelp quickely identify fdjkls far are you same same something best placdd for go in the place destigne tohelp quickely identify fdjkls far are you same same something best placdd for go in the place  xoronavirys</p>
                      <div className="bg-gray-900   text-white   px-6 py-2 font-bold rounded mt-4 w-fit mx-auto md:mx-0 hover:shadow-lg duration-200">
                          <button >Explore</button>
                      </div>
                </div>
                
            </div>
            {/* image section */}
            <div className='p-2 md:p-12 md:me-16 my-1 md:my-10 '>
                <img src={hero} alt="" className='rounded-2xl' />
            </div>
        </div>
    </section>
  )
}

export default Hero