import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    const location = useLocation()
    const noHeaderAndFooter = location.pathname.includes('login') || location.pathname.includes('register')
    console.log(location);
    return (
        <div>
            {noHeaderAndFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderAndFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;