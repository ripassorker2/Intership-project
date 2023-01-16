import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Pages/Home/Bannar/Bannar';
import Contact from '../Pages/Home/Contact/Contact';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Banner/>
            <Outlet />
            <Contact />
        </div>
    );
};

export default Main;