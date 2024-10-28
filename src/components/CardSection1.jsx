import React from 'react'
import Card from './Card.jsx'
import icon1 from "../assets/guide.jpeg";
import icon2 from "../assets/booking.jpeg";
import icon3 from "../assets/places.jpeg";

const CardSection1 = () => {
  return (
    <section>
          <div className="container py-16 my-20 flex flex-col ">
              <div className="grid grid-cols-3 md:grid-cols-3 gap-5 ">
                  <div className="col-span-3 ">
                      <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-5">
                        <div className='mx-auto'>
                            <Card icon={icon1} heading='Lots of Choices' text='lorem  dit aemt consectitr adipiscing elit'/>
                        </div>
                        <div className='mx-auto'>
                            <Card icon={icon2} heading='Best Tour Guides' text='lorem  dit aemt consectitr adipiscing elit'/>
                        </div>
                        <div className='mx-auto'>
                            <Card icon={icon3} heading='Easy Booking' text='lorem  dit aemt consectitr adipiscing elit'/>
                        </div>
                          <div className='text-center md:text-left lg:text-left xl:text-left'>
                              <h3 className='md:text-left text-sm text-orange-500 font-bold'>What We Give</h3>
                              <h1 className='md:text-left text-3xl my-2 font-bold text-gray-900'>Best Features</h1>
                              <h2 className='md:text-left text-lg font-bold'>For You</h2>
                              <p className='md:text-left text-lg text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque eos sed nisi porro sapiente sit maxime, tempora mollitia, deserunt magni.</p>
                              <button className="md:flex w-fit mt-4 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-950 hover:text-white transform duration-300">
                                  Get in Touch
                              </button>
                          </div>
                    </div>
                    
                </div>
                  
            </div>
        </div>
    </section>
  )
}

export default CardSection1