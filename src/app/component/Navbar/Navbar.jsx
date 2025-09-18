import React from 'react'
import NavLinks from './NavLinks'
import Link from 'next/link'
import NavBtn from './NavBtn';



function Navbar() {
return (
    <div className='grid grid-cols-12 items-center mt-0 md:p-4 p-6 fixed w-full z-10'>
        <div className=' lg:col-span-3 md:col-span-4 col-span-11'>
            <img src='/images/favicon.svg' alt="Logo" className='w-10 h-10 filter grayscale '  />
        </div>
        <NavBtn />
        <NavLinks />
        <div className='lg:col-span-3 col-span-4 text-end hidden md:block'>
            <Link href="#contact" className='bg-white hover:bg-gray-400 cursor-pointer transition text-black px-6 py-3 rounded '>Contact Me</Link>
        </div>
    </div>
)
}

export default Navbar

//grid grid-cols-5 sm:grid-cols-4 md:grid-cols-3 justify-between items-center pt-4 px-5 mx-auto mb-7 fixed w-screen

//col-span-3 md:col-span-1

//w-35 md:w-75 lg:w-125 col-span-1 sm:col-span-1

//justify-end hidden md:flex