import React from 'react';
import ServiceCard from '../Services/ServiceCard';

const ListofService = () => {
    return (
        <div className='p-4'>
            <h2 className='text-4xl font-bold text-center mb-8'>List Of Services</h2>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
            </div>
            <div className='w-full flex justify-center my-4'>
                <button className="btn btn-outline btn-primary ">See All</button>
            </div>
        </div>
    );
};

export default ListofService;