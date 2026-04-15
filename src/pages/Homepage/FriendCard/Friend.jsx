import React from 'react';
import { Link } from 'react-router';

const Friend = ({fnd}) => {
    const {id, name, picture, days_since_contact, status, tags} = fnd
    return (
        <Link to={`/friend/${id}`} className='p-4 flex flex-col items-center border shadow-md bg-base-300 rounded-md space-y-2'>
            <div className='h-[50px] w-[50px] rounded-full mx-auto overflow-hidden'>
              <img src={picture} alt={name} className='h-[100%] w-[100%] object-center' />
            </div>
            <h2 className='text-xl font-bold'>{name}</h2>
            <p>{days_since_contact}d ago</p>
            <div >
                <div className='flex justify-center gap-3 items-center'>
                    {
              Array.isArray(tags) && tags.map((tag, ind) => <span key={ind} className='bg-green-200 py-1 px-3 rounded-full'>{tag}</span>)
              }
              {
                Array.isArray(tags) || <span className='bg-green-200 py-1 px-3 rounded-full'>{tags}</span>
              }
                </div>
              <div className='text-center mt-2'>
                <span className={`py-[2px] px-3 rounded-full text-white font-semibold ${status=='Overdue'? 'bg-[#ef4444]': status == 'Almost Due'? 'bg-[#efad44]':'bg-[#244d3f]'}`}>{status}</span>
              </div>
            </div>

        </Link>
    )
};

export default Friend;