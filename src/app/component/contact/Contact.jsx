'use client';
import { useEffect, useState } from 'react'

import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

// icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Contact() {
    const [animation, setAnimation] = useState(false);
    const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_6m7wi8p",
        "template_0k33tnb",
    form.current,
        "AXxW7xLouaGN7Dpih"
    )
    .then(() => {
    alert("The Mail Send Successfully");
    }, (error) => {
    alert("Error : " + error.text);
    });
};
    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 3000) {
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
    <div id='contact'>
    <div className={`mb-50 max-w-300 mx-auto grid grid-cols-1 px-5 md:grid-cols-2 gap-5 duration-500 ${animation ? 'transform translate-y-0 opacity-100' : 'transform translate-y-100 opacity-0'}`} >
    <div className='text-center md:text-start mb-10 md:mb-0'>
        <h2 className='text-5xl font-bold'>Contact me for collaboration</h2>
        <p className='md:max-w-75 mt-10 text-neutral-500'>
        Reach out today to discuss your project needs and start collaborating on something amazing.
        </p>
        <div className='flex mt-10 gap-3 justify-center md:justify-start'>
            <a href='https://github.com/abdelrhman-alaa74' className='p-2 border border-gray-600 rounded-xl hover:bg-neutral-800 hover:animate-bounce' target='_blank'><FaGithub className='text-2xl'/></a>
            <a href='https://www.linkedin.com/in/abderlhman-alaa/' className='p-2 border border-gray-600 rounded-xl hover:bg-neutral-800 hover:animate-bounce' target='_blank'><FaLinkedin className='text-2xl'/></a>
            <a href='https://www.instagram.com/abdelrahman_alaa_74/' className='p-2 border border-gray-600 rounded-xl hover:bg-neutral-800 hover:animate-bounce' target='_blank'><FaInstagram className='text-2xl'/></a>
            <a href='https://www.facebook.com/3bdElrhman3laa' className='p-2 border border-gray-600 rounded-xl hover:bg-neutral-800 hover:animate-bounce' target='_blank'><FaFacebook className='text-2xl'/></a>
            <a href='https://x.com/AbdElr7man_3laa' className='p-2 border border-gray-600 rounded-xl hover:bg-neutral-800 hover:animate-bounce' target='_blank'><FaSquareXTwitter className='text-2xl'/></a>
        </div>
    </div>

    <div>
        <div className="px-4 mx-auto max-w-screen-md">
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email:</label>
                <input type="email" name="email" id="email" className="shadow-sm bg-neutral-600 border border-neutral-500 text-sm rounded-lg block w-full p-2.5" placeholder='Enter Your Email' required />
            </div>
            <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject:</label>
                <input type="text" name="subject" id="subject" className="block p-3 w-full text-sm bg-neutral-600 border border-neutral-500 rounded-lg shadow-sm" required placeholder='Subject'/>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Your message:</label>
                <textarea name="message" id="message" rows="6" className="block p-2.5 w-full text-sm rounded-lg bg-neutral-600 border border-neutral-500 shadow-sm" required placeholder='Enter Your Message'></textarea>
            </div>
            <button type="submit" className="py-3 px-5 md:w-full text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 cursor-pointer">
                Send message
            </button>
        </form>
        </div>
    </div>
            </div>
    </div>
)
}

export default Contact
