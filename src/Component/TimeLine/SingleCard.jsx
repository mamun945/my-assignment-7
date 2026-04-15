import React from 'react';

const SingleCard = ({met}) => {
    const {name, interactionType, emoji, dated} = met
    return (
        <div className='border p-4 shadow-md rounded-md  flex items-center gap-4 mt-8'>
            <div>
              <span>{emoji}</span>
            </div>
            <div>
                <p className='text-xl'><span className='font-bold'>{interactionType}</span> with {name}</p>
                <p>{dated}</p>
            </div>
        </div>
    );
};

export default SingleCard;