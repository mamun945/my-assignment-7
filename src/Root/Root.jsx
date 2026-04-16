import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../SharedPage/Navbar';
import Footer from '../SharedPage/Footer';

const Root = () => {
    return (
        <>
          {/* <Navbar></Navbar> */}
          <Outlet></Outlet>
          {/* <Footer></Footer> */}
        </>
    );
};

export default Root;