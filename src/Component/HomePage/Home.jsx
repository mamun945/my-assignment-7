import React, { Suspense } from 'react';
import Banner from '../../pages/Homepage/Banner';
import Friends from '../../pages/Homepage/Friends';
import FourCard from '../../pages/Homepage/FourCard/FourCard';

const Home = () => {
    return (
        <>
         <Banner></Banner>
         <FourCard></FourCard>
         <Friends></Friends>
        
        </>
    );
};

export default Home;