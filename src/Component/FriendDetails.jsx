import React, { useContext} from 'react';
import { useParams } from 'react-router';
import useHook from '../Hook/useHook';
import { MdAddIcCall, MdOutlineTextsms } from 'react-icons/md';
import { CiInboxOut, CiVideoOn } from 'react-icons/ci';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FaRegTrashCan } from 'react-icons/fa6';
import { meetContext } from '../Context/UseContextProvider';
import { toast } from 'react-toastify';

const FriendDetails = () => {
  
    // const [callmeet, setCallMeet] = useState([]);
    // const [textmeet, setTextMeet] = useState([]);
    // const [videomeet, setVideoMeet] = useState([]);
    // const [meet, setMeet] = useState([]);

    const {meet, setMeet} = useContext(meetContext);

    const {friendId} = useParams();
    const {friendes, loading} = useHook(); 
    const expectedFriend = friendes.find(friend => friend.id == friendId);
   
     if(!expectedFriend){
        return <div className='flex justify-center py-10'>
            <span className="loading loading-bars loading-xl"></span>
            </div>
     }
    const {id, name, picture, days_since_contact, status, tags, bio, goal, next_due_date, email} = expectedFriend


  const callHandelar =()=>{
     const callEntry={
        ...expectedFriend,
        interactionType:'call',
        dated: new Date().toLocaleDateString(),
        emoji:'📞'
     }
     setMeet([...meet, callEntry]);
     toast.success(`call with ${name}`)
  }

   const textHandelar =()=>{

     const textEntry={
        ...expectedFriend,
        interactionType:'text',
        dated: new Date().toLocaleDateString(),
        emoji:'💬'
     }
     setMeet([...meet, textEntry]);
     toast.success(`text with ${name}`)
  }


  const videoHandelar =()=>{
      const videoEntry={
        ...expectedFriend,
        interactionType:'video',
        dated: new Date().toLocaleDateString(),
        emoji:'🎥'
     }
     setMeet([...meet, videoEntry]);
     toast.success(`video with ${name}`)
  }


//    console.log(meet , 'sob kota')
    return (
        <div className='container mx-auto flex flex-col md:flex-row gap-10 my-10 px-4'>
            <div className='1st-section space-y-3'>
                <div className='py-4 shadow-md rounded-md flex flex-col px-10 flex flex-col items-center space-y-2'>
                    <div className='h-[100px] w-[100px] border rounded-full overflow-hidden'>
                    <img src={picture} alt={name} className='h-[100%] w-[100%]'/>
                </div>
                <h1 className='font-bold'>Emma Wilson</h1>
                <div className='text-center flex flex-col'>
                    <div>
                      <span className={`py-[2px] px-3 rounded-full text-white font-semibold ${status=='Overdue'? 'bg-[#ef4444]': status == 'Almost Due'? 'bg-[#efad44]':'bg-[#244d3f]'}`}>{status}</span>
                    </div>
                    
                      <div className='flex justify-center gap-3 items-center mt-2'>
                        {
                        Array.isArray(tags) && tags.map((tag, ind) => <span key={ind} className='bg-green-200 py-1 px-3 rounded-full'>{tag}</span>)
                        }
                        {
                            Array.isArray(tags) || <span className='bg-green-200 py-1 px-3 rounded-full'>{tags}</span>
                        }
                    </div>

                    <p className='text-[#64748b] text-[12px]'>{bio}</p>
                    <p className='text-[#64748b] text-[12px]'>Prefarred: {email}</p>
                </div>
                </div>
               <div className='text-center py-2 shadow-md rounded-md font-bold flex items-center justify-center gap-1'>
                <IoIosNotificationsOutline className=''/>
                <p> Snooze 2 Weeks</p>
               </div>
               <div className='text-center py-2 shadow-md rounded-md font-bold flex items-center justify-center gap-1'>
                  <CiInboxOut />
                  <p>Archive</p>
               </div>
               <div className='text-center py-2 shadow-md rounded-md font-bold flex items-center justify-center gap-1'>
                  <FaRegTrashCan className='text-red-500'/>
                  <button className='text-red-500'>Delete</button>
               </div>
            </div>
            <div className='2nd-section basis-[70%]'>
               <div className='upper-section grid grid-cols-1 sm:grid-cols-3 gap-4'>
                <div className='py-8 text-center border rounded-md shadow-md'>
                <h2 className='font-bold text-xl text-[#32584b]'>{days_since_contact}</h2>
                <p className='font-semibold text-[#64748b]'>Days Since Contract</p>
               </div>

               <div className='py-8 text-center border rounded-md shadow-md'>
                <h2 className='font-bold text-xl text-[#32584b]'>{goal}</h2>
                <p className='font-semibold text-[#64748b]'>Goal (Days)</p>
               </div>

               <div className='py-8 text-center border rounded-md shadow-md'>
                <h2 className='font-bold text-xl text-[#32584b]'>{next_due_date}</h2>
                <p className='font-semibold text-[#64748b]'>Next Due</p>
               </div>
               </div>

               <div className='second-section flex justify-between items-center my-10 py-4 shadow-md rounded-md px-5'>
                <div className=''>
                    <p className='font-semibold text-[#32584b]'>Relationship Goal</p>
                    <div className='text-[#64748b]'>Contact every <span className='font-bold text-black '>{goal} days</span></div>
                </div>
                 <button className='btn'>Edit</button>
               </div>

               <div>
                 <p className='font-semibold text-[#64748b]'>Quick Check-in</p>
                 <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 text-center mt-5'>
                    <div onClick={callHandelar} className='flex flex-col items-center border py-5 rounded-md shadow-md bg-base-300'>
                        <MdAddIcCall />
                        <p>call</p>
                    </div>

                    <div onClick={textHandelar} className='flex flex-col items-center border py-5 rounded-md shadow-md bg-base-300'>
                        <MdOutlineTextsms />
                        <p>Text</p>
                    </div>
                    
                    <div onClick={videoHandelar} className='flex flex-col items-center border py-5 rounded-md shadow-md bg-base-300'>
                        <CiVideoOn />
                        <p>Video</p>
                    </div>
                
                 </div>
               </div>
            </div>
        </div>
    );
};

export default FriendDetails;