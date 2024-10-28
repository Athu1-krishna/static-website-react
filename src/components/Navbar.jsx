import React from 'react'

const Navbar = () => {
  return (
    <header>
        <div className="container py-3 flex items-center justify-between">
            {/* logo section */}
            <div className='py-3'>
                <h1 className='text-gray-900 font-bold text-2xl'>Travel</h1>
            </div>
            {/* Links */}
            <ul className='hidden md:flex items-center gap-5'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Customer Stories</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Booking</a></li>
            </ul>
            {/* Button section */}
            <div>
                <button className='border border-grey-400 px-4 py-2 rounded-lg hover:bg-slate-900 hover:text-white transform duration-300'>Get In Touch</button>
            </div>
        </div>
    </header>
  )
}

export default Navbar