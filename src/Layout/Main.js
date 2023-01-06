import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div className='min-h-screen flex flex-col '>
            <div className='mb-auto shadow-lg'>
                <Header></Header>
                <hr />
            </div>
            <div className='flex justify-center items-center'>
                <Outlet></Outlet>
            </div>
            <div className='mt-auto shadow-md'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;