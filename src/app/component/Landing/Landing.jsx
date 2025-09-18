"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image";

// css file
import '../Landing/landing.css'

//icons
import { TbPointFilled } from "react-icons/tb";
import { FaDownload } from "react-icons/fa6";
import { FaArrowCircleDown } from "react-icons/fa";

function Landing() {
    const [animeOpen, setAnimeOpen] = useState(false);
    useEffect(() => {
        if (window.scrollY === 0) {
            setAnimeOpen(true);
        }
    }, []);
function ScrollDown() {
if (typeof window !== "undefined") {
window.scrollTo({
    top: 650,
    behavior: 'smooth'
});
}
}
return (
<div className="pt-30 flex justify-center gap-5 lg:gap-20 items-center flex-col md:flex-row mb-25" id='home'>
        <div className={`w-85 order-1 mt-5 md:mt-0 landingText `}>
    <p className="flex items-center text-gray-400">
        <span><TbPointFilled className="text-green-500 text-2xl" /></span>
        <span>Available for Work</span>
    </p>
    <h1 className="text-4xl font-bold text-white mt-2 leading-12">
        Building Scalable Modern Websites for The Future.
    </h1>
    <div className="mt-8 flex items-center gap-3">
        <a href="/CV/Abdelrhman CV.pdf" download className=" bg-blue-600 px-4 py-3 h-12 rounded cursor-pointer hover:bg-blue-800 transition shadow-2xl shadow-blue-900">Download CV <FaDownload className="inline-block mb-1" /></a>
        <button onClick={ScrollDown} className="bg-neutral-800 px-4 py-3 h-12  rounded cursor-pointer hover:bg-neutral-600 transition shadow-2xl shadow-gray-900 ">Scroll Down <FaArrowCircleDown className="inline-block mb-1"/> </button>
    </div>
    </div>
    <div className="md:order-2 landingPhoto">
    <Image
        src="/images/me.jpg"
        alt="Me"
        width={350}
        height={350}
        className=" rounded-3xl md:w-110"
    />
    </div>
</div>
)
}

export default Landing
