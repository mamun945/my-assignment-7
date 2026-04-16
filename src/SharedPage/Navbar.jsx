import React from 'react';
import { CiClock2, CiHome } from 'react-icons/ci';
import { GoGraph } from 'react-icons/go';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    return (
        <div>
            <nav className='flex w-[90%] justify-between flex-col gap-3 sm:flex-row py-4 items-center mx-auto '>
                <Link  className='font-bold text-2xl'><span>Keen</span> <span className='text-[#507065]'>Keeper</span></Link>
                 <ul className='flex items-center gap-3 text-[#507065]'>
                   <NavLink className={({isActive})=>`${isActive? 'bg-[#507065] text-white':''} px-3 py-1 rounded-md flex items-center gap-2`} to={'/'}><CiHome /> Home</NavLink>

                   <NavLink className={({isActive})=>`${isActive? 'bg-[#507065] text-white':''} px-3 py-1 rounded-md flex items-center gap-2`} to={'/notification'}><CiClock2 /> Timeline</NavLink>

                   <NavLink className={({isActive})=>`${isActive? 'bg-[#507065] text-white':''} px-3 py-1 rounded-md flex items-center gap-2`} to={'/dashboard'}><GoGraph /> Stats</NavLink>
                 </ul>
            </nav>
        </div>
    );
};

export default Navbar;