import React from 'react';
import useTitle from '../../Components/Titlehook/useTitle';

const Unknownroute = () => {
    useTitle('404');
    return (
        <div>
            <h1 className='text-red-700 font-extrabold text-2xl'>This Route Not Available</h1>
        </div>
    );
};

export default Unknownroute;