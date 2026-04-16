import React from 'react';
import { CiInstagram } from 'react-icons/ci';
import { FaFacebook, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#244d3f] py-8 text-white'>
           <div className='container mx-auto px-10'>
                <div className='space-y-3'>
                <h1 className='text-center text-4xl font-bold'>KeenKeeper</h1>
                <p className='text-center opacity-[50%]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='text-center opacity-[50%]'>Social Links</p>
                <div className='flex items-center gap-3 justify-center'>
                    <div className='flex items-center justify-center h-[30px] w-[30px] bg-white rounded-full'>
                        <CiInstagram className='text-black'/>
                    </div>
                    <div className='flex items-center justify-center h-[30px] w-[30px] bg-white rounded-full'>
                        <FaFacebook className='text-black'/>
                    </div>
                    <div className='flex items-center justify-center h-[30px] w-[30px] bg-white rounded-full'>
                        <FaXTwitter className='text-black'/>
                    </div>
                </div>
                </div>
                <div className='flex justify-between items-center pt-8'>
                    <p className='opacity-[50%]'>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex items-center gap-3'>
                        <span className='opacity-[50%]'>Privacy Policy</span>
                        <span className='opacity-[50%]'>Terms of Service</span>
                        <span className='opacity-[50%]'>Cookies</span>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Footer;