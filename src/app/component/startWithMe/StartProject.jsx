import Link from 'next/link'
import React from 'react'

function StartProject() {
return (
<div className='mb-50 max-w-300 mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-5 '>
    <div className=''>
            <h2 className='text-5xl mb-10 font-bold w-100'>Let's work together today!</h2>
    </div>
    <div className=''>
        <div className='grid grid-cols-2'>
            <div className=''>
                <h6 className='text-2xl font-bold '>Sitemap</h6>
                <div className='flex flex-col gap-3 mt-3'>
                    <Link href='#home' className='text-gray-400 hover:text-white'>Home</Link>
                    <Link href='#description' className='text-gray-400 hover:text-white'>About</Link>
                    <Link href='#projects' className='text-gray-400 hover:text-white'>Projects</Link>
                    <Link href='#services' className='text-gray-400 hover:text-white'>Services</Link>
                    <Link href='#contact' className='text-gray-400 hover:text-white'>Contact me</Link>    
                </div>
            </div>
            <div className=''>
                <h6 className='text-2xl font-bold '>Social</h6>
                <div className='flex flex-col gap-3 mt-3'>
                    <a href='https://github.com/abdelrhman-alaa74' className='text-gray-400 hover:text-white' target='_blank'>Github</a>
                    <a href='https://www.linkedin.com/in/abderlhman-alaa/' className='text-gray-400 hover:text-white' target='_blank'>LinkedIn</a>
                    <a href='https://www.instagram.com/abdelrahman_alaa_74/' className='text-gray-400 hover:text-white' target='_blank'>Instagram</a>
                    <a href='https://www.facebook.com/3bdElrhman3laa' className='text-gray-400 hover:text-white' target='_blank'>Facebook</a>
                    <a href='https://x.com/AbdElr7man_3laa' className='text-gray-400 hover:text-white' target='_blank'>Twitter X</a>    
                </div>
            </div>
        </div>
    </div>    
</div>
)
}

export default StartProject
