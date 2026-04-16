import React, { useContext, useEffect, useState } from 'react';
import { meetContext } from '../../Context/UseContextProvider';
import SingleCard from './SingleCard';
import { IoIosArrowDown } from 'react-icons/io';
import { toast } from 'react-toastify';

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
   

    const searchHandle =()=>{
     let input = document.querySelector('#input').value.toLowerCase();
        if(filter){
           const value = [...meet].filter(met => met.interactionType.includes(input) || met.name.toLowerCase().includes(input))
          setFilter(value);   
        }else{
            toast.error('no data found!')
        }

    }

    return (
       <>
        <div className='container mx-auto my-10 px-6'>
            <h1 className=' text-2xl font-bold'>Timeline</h1>
            <div>
            <div className='flex flex-col sm:flex-row items-center gap-2'>
                 <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1 flex items-center"><span>Filter timeline</span> <IoIosArrowDown /></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={()=>setHandelarText('call')}><a className='flex items-center justify-between'><span>Call Filter</span>
                        {
                        handelarText == 'call'? <span>✔️</span>:''
                        } 
                        </a></li>
                    <li onClick={()=>setHandelarText('text')}><a className='flex items-center justify-between'>
                        <span>Text Filter</span>
                        {
                        handelarText == 'text'? <span>✔️</span>:''
                        }
                        </a></li>
                    <li onClick={()=>setHandelarText('video')}><a className='flex items-center justify-between'>
                        <span>Video Filter</span>
                        {
                        handelarText == 'video'? <span>✔️</span>:''
                        }
                        </a></li>
                </ul>
               </div>
               <div className='basis-[60%]'>
                <input type="text" id='input' className='border py-[7px] px-4 rounded-md w[90%] sm:w-[80%]' placeholder='write name or call text video'/>
                <button className='btn' id='search' onClick={searchHandle}>sarch</button>
               </div>
            </div>
            </div>
            {
               meet.length == 0 ?
               <div className=''>
             <div className='h-[40vh] text-center flex justify-center items-center'>
                <h1 className='text-xl text-[#507065] opacity-[50%]'>No data Found!</h1>
             </div>
        </div> :
            <div>
            {
              filter.map((met,ind) => <SingleCard key={ind} met={met}></SingleCard>)
            }
        </div> 
            }
        </div>  
       </>
    );
};

export default Timeline;