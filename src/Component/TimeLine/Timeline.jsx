import React, { useContext, useEffect, useState } from 'react';
import { meetContext } from '../../Context/UseContextProvider';
import SingleCard from './SingleCard';
import { IoIosArrowDown } from 'react-icons/io';

const Timeline = () => {
    const {meet, setMeet} = useContext(meetContext);
   
    const [filter, setFilter] = useState(meet);
    const [handelarText, setHandelarText] = useState('');
    
    useEffect(()=>{
        if(handelarText){
            if(handelarText == 'call'){
                const callFilter = [...meet].filter(item => item.interactionType == 'call');
                setFilter(callFilter);
            }else if(handelarText == 'text'){
                const textFilter = [...meet].filter(item => item.interactionType == 'text');
                setFilter(textFilter)
            }else{
                const videoFilter = [...meet].filter(item => item.interactionType == 'video');
                setFilter(videoFilter);
            }
        }

    }, [handelarText])

    console.log(meet, 'timeline theke');
    return (
        <div className='container mx-auto my-10'>
            <h1 className=' text-2xl font-bold'>Timeline</h1>
            <div>
              <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1 flex items-center"><span>Filter timeline</span> <IoIosArrowDown /></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={()=>setHandelarText('call')}><a>Call Filter</a></li>
                    <li onClick={()=>setHandelarText('text')}><a>Text Filter</a></li>
                    <li onClick={()=>setHandelarText('video')}><a>Video Filter</a></li>
                </ul>
               </div>
            </div>
            <div>
            {
              filter.map((met,ind) => <SingleCard key={ind} met={met}></SingleCard>)
            }
        </div>
        </div>  
    );
};

export default Timeline;