'use client';
import Link from 'next/link';
import React, { useState } from 'react'

// icons
import { FaBars } from "react-icons/fa";

function NavBtn() {
    const [show, setShow] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    function handleLink(e) {
        setActiveLink(e.target.id);
        setShow(false);
    }
return (
<div className='md:hidden'>
        <button
            className=' rounded cursor-pointer transition me-2.5'
            onClick={() => setShow(!show)}
        >
        <FaBars className='text-4xl text-white' />
    </button>
        <nav className={`justify-center flex flex-col bg-neutral-800 rounded-2xl p-2 transition gap-1 md:gap-0 absolute top-16 sm:right-10 right-3 py-3 ${show ? "block" : "hidden"}`}>
            <Link href='#home' id='Home' onClick={handleLink} className={`w-30 h-10 items-center justify-center flex rounded cursor-pointer transition ${activeLink === "home" ? "text-black bg-white" : "text-white hover:text-black hover:bg-white"}`}>Home</Link>
            <Link href='#about' id='About' onClick={handleLink} className={`w-30 h-10 items-center justify-center flex rounded cursor-pointer transition ${activeLink === "about" ? "text-black bg-white" : "text-white hover:text-black hover:bg-white"}`}>About</Link>
            <Link href='#work' id='Work' onClick={handleLink} className={`w-30 h-10 items-center justify-center flex rounded cursor-pointer transition ${activeLink === "work" ? "text-black bg-white" : "text-white hover:text-black hover:bg-white"}`}>Work</Link>
            <Link href='#reviews' id='Reviews' onClick={handleLink} className={`w-30 h-10 items-center justify-center flex rounded cursor-pointer transition ${activeLink === "reviews" ? "text-black bg-white" : "text-white hover:text-black hover:bg-white"}`}>Reviews</Link>
            <Link href='#contact' id='Contact' onClick={handleLink} className={`flex md:hidden w-30 h-10 items-center justify-center rounded cursor-pointer transition ${activeLink === "contact" ? "text-black bg-white" : "text-white hover:text-black hover:bg-white"}`}>Contact</Link>
        </nav>
</div>
)   
}

export default NavBtn
