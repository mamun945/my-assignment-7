import React from 'react';
import { CiVideoOn } from 'react-icons/ci';
import { IoIosCall } from 'react-icons/io';
import { MdOutlineTextsms } from 'react-icons/md';

const SingleCard = ({met}) => {
    const {name, interactionType, emoji, dated} = met
    return (
        <div className='border p-4 shadow-md rounded-md  flex items-center gap-4 mt-8'>
            <div>
              <span className='text-3xl'>
                {
                  interactionType == 'call' ? <IoIosCall /> : interactionType == 'text'? <MdOutlineTextsms />:<CiVideoOn /> 
                }
              </span>
            </div>
            <div>
                <p className='text-xl'><span className='font-bold'>{interactionType}</span> with {name}</p>
                <p>{dated}</p>
            </div>
        </div>
    );
};

export default SingleCard;