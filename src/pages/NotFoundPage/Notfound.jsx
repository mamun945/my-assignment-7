import React from 'react';

const Notfound = () => {
    return (
        <div className='h-[100vh] flex flex-col justify-center items-center bg-[#f9fafb] text-center'>
            <h1 className='text-[80px] text-[#ef4444]'>404</h1>
            <h2 className='text-[28px] my-[10px] mx-auto'>Page Not Found</h2>
            <p className='text-[#6b7280] mb-[20px]'>
                Sorry, the page you are looking for does not exist.
            </p>
            <a href="/" className='my-[10px] mx-[20px] bg-[#2563eb] text-[#fff] decoration-0 rounded-[5px]'>
                Go Home
            </a>
        </div>
    );
};

export default Notfound;