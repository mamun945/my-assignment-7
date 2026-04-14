import React from 'react';
import { NavLink } from 'react-router';

const MyNavbar = ({to, children}) => {
    return (
        <NavLink to={to} className={({isActive})=>`font-semibold ${isActive? 'text-white bg-[][#507065]':''}`}>{children}</NavLink>
    );
};

export default MyNavbar;