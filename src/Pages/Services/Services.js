import React from 'react';
import useTitle from '../../Components/Titlehook/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    useTitle('Services')
    return (
        <div>
            <div className='p-4'>
                <h2 className='text-4xl font-bold text-center mb-8'>All Services</h2>
                <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                    <ServiceCard></ServiceCard>
                    <ServiceCard></ServiceCard>
                </div>
            </div>
        </div>
    );
};

export default Services;