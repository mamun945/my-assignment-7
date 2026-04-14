import { useEffect, useState } from "react";


const useHook = () => {
   const [friendes, setFriendes] = useState([]);
   const [loading, setLoading] = useState(true);

   const dataFetch = async()=>{
    const res = await fetch('/data.json');
    const data = await res.json();

    setTimeout(()=>{
      setFriendes(data);
      setLoading(false)
    }, 3000)
   }
    useEffect(()=>{
      dataFetch();
    }, [])
    return {friendes, loading};
};

export default useHook;