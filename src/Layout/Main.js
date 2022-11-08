import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div className='min-h-screen flex flex-col bg-base-200'>
            <Header></Header>
            <Outlet></Outlet>
            <div className='mt-auto'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;