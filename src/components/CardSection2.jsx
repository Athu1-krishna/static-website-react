import React from 'react'
import Img1 from "../assets/img1.jpeg";
import Img2 from "../assets/img2.jpeg";
import Img3 from "../assets/img3.jpeg";
import bg from "../assets/bg.jpeg";

const CardSection2 = () => {
  return (
    <section>
          <div className="container my-14">
              <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                  <div className='text-center md:text-left lg:text-left xl:text-left'>
                      <h2 className='md:text-left text-xl text-gray-800 font-bold'>Discover the</h2>
                      <h1 className='md:text-left text-3xl my-2 font-bold text-gray-900'>Best Destinations</h1>
                      <p className='md:text-left text-lg text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque eos sed nisi porro sapiente sit maxime, tempora mollitia, deserunt magni.</p>
                      <button className="md:flex w-fit mt-4 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-950 hover:text-white transform duration-300">
                          Get in Touch
                      </button>
                  </div>
                  <div>
                      <img src={Img1} alt="" className='w-full h-[450px] rounded-xl grayscale hover:grayscale-0 duration-500' />
                    <p>Heading</p>
                  </div>
                  <div>
                      <img src={Img2} alt="" className='w-full h-[450px] rounded-xl grayscale hover:grayscale-0 duration-500' />
                    <p>Heading</p>
                  </div>
                  <div>
                      <img src={Img3} alt="" className='w-full h-[450px] rounded-xl grayscale hover:grayscale-0 duration-500' />
                    <p>Heading</p>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default CardSection2