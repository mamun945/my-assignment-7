
import Friend from './FriendCard/Friend';
import useHook from '../../Hook/useHook';

const Friends = () => {
    const {friendes, loading} = useHook();
    
    return (
        <div className='container mx-auto'>
            <h1 className='text-xl font-bold'>Your Friends</h1>
            <div>
              {
               loading ? <div className='flex justify-center items-center py-10'>
                <span className="loading loading-bars loading-xl"></span>
                </div>:
               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-10 py-5 gap-5'>
                {
                 friendes.map(fnd => <Friend key={fnd.id} fnd={fnd}></Friend>)
                }
               </div>
             }
            </div>
        </div>
    );
};

export default Friends;