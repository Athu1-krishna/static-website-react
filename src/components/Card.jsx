import React from 'react'

const Card = ({icon, heading, text}) => {
  return (
    <div className=' p-6 w-64 bg-white rounded-lg border-[1px] border-gray-300 text-center py-12 hover:scale-110 duration-300 hover:shadow-2xl'>
        <div className=" p-4  ">
            <img src={icon} alt="" className='w-24 mx-auto' />
        </div>
        <h4 className='my-6 text-lg font-bold'>{heading}</h4>
        <p className='text-gray-400 text-sm'>{text}</p>
    </div>
  )
}

export default Card