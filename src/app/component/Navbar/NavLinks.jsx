"use client"
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react'

function NavLinks() {
    const [activeLink, setActiveLink] = useState("home");
    function handleLink(e) {
        setActiveLink(e.target.id);
    }
useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY === 0) {
            setActiveLink('home');
        } else if (window.scrollY < 1500) {
            setActiveLink('about');
        } else if (window.scrollY < 2500) {
            setActiveLink('work');
        } else if (window.scrollY < 3500) {
            setActiveLink('service');
        } else {
            setActiveLink('');
        }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);
    return (
        <div className='col-span-3 md:col-span-4 lg:col-span-6 justify-center hidden md:flex '>
            <nav className='justify-center flex bg-neutral-700 rounded-2xl p-2 transition gap-1 md:gap-0'>
                <Link href='#home' id='Home' onClick={handleLink} className={`w-25 h-10 items-center justify-center flex rounded cursor-pointer transition ${activeLink === "home" ? "text-black bg-white" : "text-white hover:text-black hover:bg-white"}`}>Home</Link>
                <Link href='#description' id='about' onClick={handleLink} className={`w-25 h-10 items-center justify-center flex rounded cursor-pointer transition ${activeLink === "about" ? "text-black bg-white" : "text-white hover:text-black hover:bg-white"}`}>About</Link>
                <Link href='#projects' id='work' onClick={handleLink} className={`w-25 h-10 items-center justify-center flex rounded cursor-pointer transition ${activeLink === "work" ? "text-black bg-white" : "text-white hover:text-black hover:bg-white"}`}>Work</Link>
                <Link href='#services' id='service' onClick={handleLink} className={`w-25 h-10 items-center justify-center flex rounded cursor-pointer transition ${activeLink === "service" ? "text-black bg-white" : "text-white hover:text-black hover:bg-white"}`}>Services</Link>
                <Link href='#contact' id='Contact' onClick={handleLink} className={`flex md:hidden w-25 h-10 items-center justify-center rounded cursor-pointer transition ${activeLink === "reviews" ? "text-black bg-white" : "text-white hover:text-black hover:bg-white"}`}>Contact</Link>
            </nav>
        </div>
)
}

export default NavLinks
