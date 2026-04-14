import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto text-center my-5 space-y-4'>
            <h1 className='text-[#507065] font-bold text-4xl'>Friends to keep close in your life</h1>
            <p className='text-[#507065]'>Your personal shelf of meaningful connections. Browse, tend, and <br />nurture the relationships that matter most.</p>
            <button className='btn bg-[#507065] py-2 px-3 rounded-md text-white'>+ Add Friend</button>
        </div>
    );
};

export default Banner;