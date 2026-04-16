import React from 'react';
import useHook from '../../../Hook/useHook';

const FourCard = () => {
    const {friendes, loading} = useHook();
    const track = friendes.filter(friend => friend.status == 'On-Track')
    const almost = friendes.filter(friend => friend.status == 'Almost Due')
    return (
        <div className='container mx-auto px-10 py-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='card-1 shadow-md bg-base-300 text-center py-10 rounded-md'>
             <h1 className='text-[#244d3f] font-bold text-xl'>{friendes.length}</h1>
             <p className='text-[#8591a4] font-semibold'>Total Friends</p>
            </div>
            <div className='card-2 shadow-md bg-base-300 text-center py-10 rounded-md'>
                <h1 className='text-[#244d3f] font-bold text-xl'>{track.length}</h1>
                <p className='text-[#8591a4] font-semibold'>On-Track</p>
            </div>
            <div className='card-3 shadow-md bg-base-300 text-center py-10 rounded-md'>
                <h1 className='text-[#244d3f] font-bold text-xl'>{almost.length}</h1>
                <p className='text-[#8591a4] font-semibold'>Need Attention</p>
            </div>
            <div className='card-4 shadow-md bg-base-300 text-center py-10 rounded-md'>
                <h1 className='text-[#244d3f] font-bold text-xl'>12</h1>
                <p className='text-[#8591a4] font-semibold'>Interactions This Month</p>
            </div>
        </div>
            
        </div>
    );
};

export default FourCard;