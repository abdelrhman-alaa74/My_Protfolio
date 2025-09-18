import React from 'react'

//icons
import { FaMagic } from "react-icons/fa";
import { IoServer } from "react-icons/io5";
import { MdIntegrationInstructions } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { HiServer } from "react-icons/hi";
import { IoDiamond } from "react-icons/io5";






function Services() {
return (
<div className='mb-75 max-w-300 mx-auto px-5' id='services'>
        <h1 className='text-5xl font-bold'>Our Services</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-10'>
            <div className='p-2 py-6 lg:p-4 lg:py-8 bg-neutral-800 rounded-2xl text-center'>
                <div className='flex justify-center mb-5'>
                    <FaMagic className='text-5xl text-center text-blue-500' />
                </div>
                <h2 className='text-2xl font-bold'>Frontend Development</h2>
                <p className='mt-2'>I create modern, responsive, and user-friendly websites using frameworks like React to build fast and interactive web applications.</p>
            </div>
            <div className='p-4 py-8 bg-neutral-800 rounded-2xl text-center'>
                <div className='flex justify-center mb-5'>
                    <HiServer className='text-5xl text-center text-blue-500' />
                </div>
                <h2 className='text-2xl font-bold'>Backend Development</h2>
                <p className='mt-2'>I develop secure and scalable server-side applications using Laravel, and design databases with MySQL to store and manage your data efficiently.</p>
            </div>
            <div className='p-4 py-8 bg-neutral-800 rounded-2xl text-center'>
                <div className='flex justify-center mb-5'>
                    <MdIntegrationInstructions className='text-5xl text-center text-blue-500' />
                </div>
                <h2 className='text-2xl font-bold'>API Integration</h2>
                <p className='mt-2'>I connect your website or app with third-party services such as payment gateways, Google Maps, or social media platforms to add extra features and functionality.</p>
            </div>
            <div className='p-4 py-8 bg-neutral-800 rounded-2xl text-center'>
                <div className='flex justify-center mb-5'>
                    <MdOutlineSecurity className='text-5xl text-center text-blue-500' />
                </div>
                <h2 className='text-2xl font-bold'>Performance & Security Optimization</h2>
                <p className='mt-2'>I make sure your website loads quickly and is protected from common security threats like SQL injection and XSS attacks.</p>
            </div>
            <div className='p-4 py-8 bg-neutral-800 rounded-2xl text-center'>
                <div className='flex justify-center mb-5'>
                    <IoServer className='text-5xl text-center text-blue-500' />
                </div>
                <h2 className='text-2xl font-bold'>Database Design & Management</h2>
                <p className='mt-2'>I design clean and efficient database structures, ensuring data is well-organized, secure, and easy to manage.</p>
            </div>
            <div className='p-4 py-8 bg-neutral-800 rounded-2xl text-center'>
                <div className='flex justify-center mb-5'>
                    <IoDiamond className='text-5xl text-center text-blue-500' />
                </div>
                <h2 className='text-2xl font-bold'>Maintenance & Support</h2>
                <p className='mt-2'>I provide ongoing updates, bug fixes, and improvements to keep your website or application working perfectly over time.</p>
            </div>

        </div>
</div>
)
}

export default Services
