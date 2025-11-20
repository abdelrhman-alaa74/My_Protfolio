'use client';


import React, { useEffect, useState } from 'react'

//icons
import { BsArrowUpRightSquareFill } from "react-icons/bs";

function Projects() {
    const [more, setMore] = useState(false);
    const [animation, setAnimation] = useState(false);
        useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 1200) {
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
        <div id="projects">
    <div className={`max-w-300 mx-auto mb-50 px-5 duration-500 ${animation ? 'transform translate-y-0 opacity-100' : 'transform translate-y-100 opacity-0'}`}>
        <h1 className='text-5xl font-bold'>My Portfolio highlights</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10'>
            <div className=''>
                <div className='bg-neutral-800 p-3 rounded hover:bg-neutral-700'>
                    <div className='overflow-hidden'>
                        <a href='https://github.com/abdelrhman-alaa74/Chat-App' target='_blank' className=''>
                            <img src='./images/chat.png' className='rounded hover:scale-110 md:h-68' alt='Project1'  />
                        </a>
                    </div>
                    <div className='mt-5 flex gap-2 items-center justify-between'>
                        <div>
                            <h3 className='text-xl'>Real-Time Platform</h3>
                            <div className='flex gap-2 my-3'>
                                <div className='bg-neutral-900 rounded p-1 px-3 shadow-2xl shadow-black'>Blade</div>
                                <div className='bg-neutral-900 rounded p-1 px-3 shadow-2xl shadow-black'>Laravel</div>
                                <div className='bg-neutral-900 rounded p-1 px-3 shadow-2xl shadow-black'>Js</div>
                                <div className='bg-neutral-900 rounded p-1 px-3 shadow-2xl shadow-black'>Server</div>
                            </div>
                        </div>
                        <a href='https://github.com/abdelrhman-alaa74/Chat-App' target='_blank' className='shadow-2xl shadow-blue-400'>
                            <BsArrowUpRightSquareFill className='text-4xl text-blue-400 ' />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className=''>
                <div className='bg-neutral-800 p-3 rounded hover:bg-neutral-700'>
                    <div className='overflow-hidden'>
                        <a href='https://abdelrhman-alaa74.github.io/Html_and_Css_temp2' target='_blank' className=''>
                            <img src='./images/project2.jpeg' className='rounded hover:scale-110 md:h-68' alt='Project1' />
                        </a>
                    </div>
                    <div className='mt-5 flex gap-2 items-center justify-between'>
                        <div>
                            <h3 className='text-xl'>PixelFlow & NovaUI</h3>
                            <div className='flex gap-2 my-3'>
                                <div className='bg-neutral-900 rounded p-1 px-3 shadow-2xl shadow-black'>Html</div>
                                <div className='bg-neutral-900 rounded p-1 px-3 shadow-2xl shadow-black'>Css</div>
                                <div className='bg-neutral-900 rounded p-1 px-3 shadow-2xl shadow-black'>Js</div>
                            </div>
                        </div>
                        <a href='https://abdelrhman-alaa74.github.io/Html_and_Css_temp2' target='_blank' className='shadow-2xl shadow-blue-400'>
                            <BsArrowUpRightSquareFill className='text-4xl text-blue-400 ' />
                        </a>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='bg-neutral-800 p-3 rounded hover:bg-neutral-700'>
                    <div className='overflow-hidden'>
                        <a href='https://abdelrhman-alaa74.github.io/Html_and_Css_temp3/' target='_blank' className=''>
                            <img src='./images/project3.jpeg' className='rounded hover:scale-110 md:h-68' alt='Project1' />
                        </a>
                    </div>
                    <div className='mt-5 flex gap-2 items-center justify-between'>
                        <div>
                            <h3 className='text-xl'>EdgePage & FlexiPage</h3>
                            <div className='flex gap-2 my-3'>
                                <div className='bg-neutral-900 rounded p-1 px-3 shadow-2xl shadow-black'>Html</div>
                                <div className='bg-neutral-900 rounded p-1 px-3 shadow-2xl shadow-black'>Css</div>
                                <div className='bg-neutral-900 rounded p-1 px-3 shadow-2xl shadow-black'>Js</div>
                            </div>
                        </div>
                        <a href='https://abdelrhman-alaa74.github.io/Html_and_Css_temp3/' target='_blank' className='shadow-2xl shadow-blue-400'>
                            <BsArrowUpRightSquareFill className='text-4xl text-blue-400 ' />
                        </a>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='bg-neutral-800 p-3 rounded hover:bg-neutral-700'>
                    <div className='overflow-hidden'>
                        <a href='https://abdelrhman-alaa74.github.io/Html_Css_temp4/' target='_blank' className=''>
                            <img src='./images/project4.jpeg' className='rounded hover:scale-110 md:h-68' alt='Project1' />
                        </a>
                    </div>
                    <div className='mt-5 flex gap-2 items-center justify-between'>
                        <div>
                            <h3 className='text-xl'>Gloves & Glory</h3>
                            <div className='flex gap-2 my-3'>
                                <div className='bg-neutral-900 rounded p-1 px-3 shadow-2xl shadow-black'>Html</div>
                                <div className='bg-neutral-900 rounded p-1 px-3 shadow-2xl shadow-black'>Css</div>
                                <div className='bg-neutral-900 rounded p-1 px-3 shadow-2xl shadow-black'>Js</div>
                            </div>
                        </div>
                        <a href='https://abdelrhman-alaa74.github.io/Html_Css_temp4/' target='_blank' className='shadow-2xl shadow-blue-400'>
                            <BsArrowUpRightSquareFill className='text-4xl text-blue-400 ' />
                        </a>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='bg-neutral-800 p-3 rounded hover:bg-neutral-700'>
                    <div className='overflow-hidden'>
                        <a href='https://drtechmarket.netlify.app/' target='_blank' className=''>
                            <img src='./images/project5.jpeg' className='rounded hover:scale-110 md:h-68' alt='Project1' />
                        </a>
                    </div>
                    <div className='mt-5 flex gap-2 items-center justify-between'>
                        <div>
                            <h3 className='text-xl'>StyleCart – Shop with Taste</h3>
                            <div className='flex gap-2 my-3'>
                                <div className='bg-neutral-900 rounded p-1 px-3 shadow-2xl shadow-black'>React js</div>
                                <div className='bg-neutral-900 rounded p-1 px-3 shadow-2xl shadow-black'>Route</div>
                                <div className='bg-neutral-900 rounded p-1 px-3 shadow-2xl shadow-black'>Api</div>
                            </div>
                        </div>
                        <a href='https://drtechmarket.netlify.app/' target='_blank' className='shadow-2xl shadow-blue-400'>
                            <BsArrowUpRightSquareFill className='text-4xl text-blue-400 ' />
                        </a>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='bg-neutral-800 p-3 rounded hover:bg-neutral-700'>
                    <div className='overflow-hidden'>
                        <a href='https://github.com/abdelrhman-alaa74/Restaurant-application' className=''>
                            <img src='./images/project6.png' className='rounded hover:scale-110 md:h-68' alt='Project1' />
                        </a>
                    </div>
                    <div className='mt-5 flex gap-2 items-center justify-between'>
                        <div>
                            <h3 className='text-xl'>Restaurant-app</h3>
                            <div className='flex gap-2 my-3'>
                                <div className='bg-neutral-900 rounded p-1 px-3 shadow-2xl shadow-black'>Next.js</div>
                                <div className='bg-neutral-900 rounded p-1 px-3 shadow-2xl shadow-black'>Laravel PHP</div>
                                <div className='bg-neutral-900 rounded p-1 px-3 shadow-2xl shadow-black'>Api</div>
                            </div>
                        </div>
                        <a href='https://github.com/abdelrhman-alaa74/Restaurant-application' className='shadow-2xl shadow-blue-400'>
                            <BsArrowUpRightSquareFill className='text-4xl text-blue-400 ' />
                        </a>
                    </div>
                </div>
            </div>
            <div className={`${more ? '' : 'hidden'}`}>
                <div className='bg-neutral-800 p-3 rounded hover:bg-neutral-700'>
                    <div className='overflow-hidden'>
                        <a href='https://abdelrhman-alaa74.github.io/Html_and_Css_Template/' target='_blank' className=''>
                            <img src='./images/FirstProject.png' className='rounded hover:scale-110 md:h-68' alt='Project1'  />
                        </a>
                    </div>
                    <div className='mt-5 flex gap-2 items-center justify-between'>
                        <div>
                            <h3 className='text-xl'>Creative Agency Page</h3>
                            <div className='flex gap-2 my-3'>
                                <div className='bg-neutral-900 rounded p-1 px-3 shadow-2xl shadow-black'>Html</div>
                                <div className='bg-neutral-900 rounded p-1 px-3 shadow-2xl shadow-black'>Css</div>
                                <div className='bg-neutral-900 rounded p-1 px-3 shadow-2xl shadow-black'>Js</div>
                            </div>
                        </div>
                        <a href='https://abdelrhman-alaa74.github.io/Html_and_Css_Template/' target='_blank' className='shadow-2xl shadow-blue-400'>
                            <BsArrowUpRightSquareFill className='text-4xl text-blue-400 ' />
                        </a>
                    </div>
                </div>
            </div>

        </div>
            <div className='flex justify-center items-center'>
                    <button className='duration-300 mt-10 p-2 px-3 bg-blue-500 hover:bg-blue-700 rounded cursor-pointer' onClick={() => setMore(!more)}>{more ? 'Less' : 'More'}</button>
            </div>
        </div>
    </div>        
)
}

export default Projects
