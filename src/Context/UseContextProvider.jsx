import React, { createContext, useState } from 'react';

export const meetContext = createContext(null)

const UseContextProvider = ({children}) => {

   const [meet, setMeet] = useState([]); 
   const data ={
       meet,
       setMeet
   }
    return (
        <meetContext.Provider value={data}>
          {children}
        </meetContext.Provider>
    );
};

export default UseContextProvider;