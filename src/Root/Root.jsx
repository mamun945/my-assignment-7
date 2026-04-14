import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../SharedPage/Navbar';

const Root = () => {
    return (
        <>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <h1>this is footer section</h1>  
        </>
    );
};

export default Root;