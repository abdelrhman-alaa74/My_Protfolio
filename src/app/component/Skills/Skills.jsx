'use client';


import React, { useEffect, useState } from 'react'

//icons
import { FaHtml5 } from "react-icons/fa6";   
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";  
import { FaReact } from "react-icons/fa"; 
import { RiNextjsFill } from "react-icons/ri";  
import { FaBootstrap } from "react-icons/fa";  
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";

function Skills() {
    const [animation, setAnimation] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
    if (window.scrollY > 700) {
        setAnimation(true);
    } else {
        setAnimation(false);
    }; 
}
handleScroll();
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
    },[])
    return (
    <div>
<div className={`px-5 lg:px-0 max-w-150 md:max-w-200 lg:max-w-250 xl:max-w-300 mx-auto mb-40 mt-30 duration-500 ${animation ? 'transform translate-y-0 opacity-100' : 'transform translate-y-100 opacity-0'}`}>
        <h2 className='text-5xl font-bold mb-5'>Tools | Skills </h2>
        <p className='mb-10 max-w-130'>Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.</p>
    <div className='grid grid-cols-12 gap-2'>
            <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                <div className='flex items-center gap-5 border border-neutral-700 p-2 rounded-2xl shadow shadow-neutral-800 mb-5 hover:bg-neutral-600 xl:w-95 lg:w-80 '>
                    <div className='bg-neutral-700 p-2 rounded-2xl'>
                        <FaLaravel className='text-4xl text-red-400 '/>
                    </div>
                    <div>
                        <p className='font-bold '>Laravel</p>
                        <p className='text-gray-500'>Framework</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 border border-neutral-700 p-2 rounded-2xl shadow shadow-neutral-800 mb-5 hover:bg-neutral-600 xl:w-95 lg:w-80 '>
                    <div className='bg-neutral-700 p-2 rounded-2xl'>
                    <FaCss3Alt className='text-4xl text-blue-400' />
                    </div>
                    <div>
                        <p className='font-bold'>Css</p>
                        <p className='text-gray-500'>User Interface</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 border border-neutral-700 p-2 rounded-2xl shadow shadow-neutral-800 mb-5 hover:bg-neutral-600 xl:w-95 lg:w-80 '>
                    <div className='bg-neutral-700 p-2 rounded-2xl'>
                    <FaJs className='text-4xl text-yellow-400'/>
                    </div>
                    <div>
                        <p className='font-bold'>Java Script</p>
                        <p className='text-gray-500'>Interaction</p>
                    </div>
                </div>
            </div> 
            <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                <div className='flex items-center gap-5 border border-neutral-700 p-2 rounded-2xl shadow shadow-neutral-800 mb-5 hover:bg-neutral-600 xl:w-95 lg:w-80 '>
                    <div className='bg-neutral-700 p-2 rounded-2xl'>
                        <FaReact className='text-4xl text-blue-500 '/>
                    </div>
                    <div>
                        <p className='font-bold'>React</p>
                        <p className='text-gray-500'>Framework</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 border border-neutral-700 p-2 rounded-2xl shadow shadow-neutral-800 mb-5 hover:bg-neutral-600 xl:w-95 lg:w-80 '>
                    <div className='bg-neutral-700 p-2 rounded-2xl'>
                    <RiNextjsFill className='text-4xl text-black' />
                    </div>
                    <div>
                        <p className='font-bold'>Next</p>
                        <p className='text-gray-500'>Framework</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 border border-neutral-700 p-2 rounded-2xl shadow shadow-neutral-800 mb-5 hover:bg-neutral-600 xl:w-95 lg:w-80 '>
                    <div className='bg-neutral-700 p-2 rounded-2xl'>
                    <FaBootstrap className='text-4xl text-purple-600'/>
                    </div>
                    <div>
                        <p className='font-bold'>Bootstrap</p>
                        <p className='text-gray-500'>User Interface</p>
                    </div>
                </div>
            </div> 
            <div className='col-span-12 grid md:grid-cols-2 lg:col-span-4 lg:grid-cols-1 gap-2'>
                <div className='flex items-center gap-5 border border-neutral-700 p-2 rounded-2xl shadow shadow-neutral-800 mb-5 hover:bg-neutral-600 xl:w-95 lg:w-80 '>
                    <div className='bg-neutral-700 p-2 rounded-2xl'>
                        <RiTailwindCssFill className='text-4xl text-blue-400 '/>
                    </div>
                    <div>
                        <p className='font-bold'>TailwindCss</p>
                        <p className='text-gray-500'>Markup Language</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 border border-neutral-700 p-2 rounded-2xl shadow shadow-neutral-800 mb-5 hover:bg-neutral-600 xl:w-95 lg:w-80 '>
                    <div className='bg-neutral-700 p-2 rounded-2xl'>
                    <FaPhp className='text-4xl text-violet-400' />
                    </div>
                    <div>
                        <p className='font-bold'>PHP</p>
                        <p className='text-gray-500'>Interaction</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 border border-neutral-700 p-2 rounded-2xl shadow shadow-neutral-800 mb-5 hover:bg-neutral-600 xl:w-95 lg:w-80 '>
                    <div className='bg-neutral-700 p-2 rounded-2xl'>
                    <SiMysql className='text-4xl text-orange-300'/>
                    </div>
                    <div>
                        <p className='font-bold'>MySQL</p>
                        <p className='text-gray-500'>Database</p>
                    </div>
                </div>
            </div> 
    </div>
            </div>
    </div>
)
}

export default Skills



