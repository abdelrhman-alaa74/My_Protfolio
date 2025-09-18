import React from 'react'

function Description() {
return (
<div className='max-w-300 mx-auto bg-neutral-800 p-10 rounded mb-15' id="description">
        <p className='max-w-225 leading-8 text-2xl'>
            Welcome I'm Abdelrhman Alaa, a professional web developer with a knock for crafting
            visually stunning and highly functional websites. Combining creativity and technical
            expertise. I transform your vision into digital masterpiece that excels in both appearance and performance. 
        </p>
        <div className='mt-15 flex justify-between items-center'>
            <div className='flex gap-10 sm:gap-5'>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold '>10<span className='text-blue-400'>+</span></h1>
                    <p className='text-gray-400'>Projects done</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold '>2<span className='text-blue-400'>+</span></h1>
                    <p className='text-gray-400'>Years of experience</p>
                </div>
            </div>
            <div className='hidden md:flex'>
                <img src='/images/favicon.svg' alt="Logo" className='w-12 h-12 filter grayscale '  />
            </div>
        </div>
</div>
)
}

export default Description
