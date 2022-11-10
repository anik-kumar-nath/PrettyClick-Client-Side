import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../Services/ServiceCard';

const ListofService = () => {
    const recentService = useLoaderData();
    return (
        <div className='p-4'>
            <h2 className='text-4xl font-bold text-center mb-8'>List Of Services</h2>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                {
                    recentService && recentService.map((service, index) => <ServiceCard key={index} service={service}></ServiceCard>)
                }
            </div>
            <div className='w-full flex justify-center my-4'>
                <Link to={'/services'} className="btn btn-outline btn-primary">See All</Link>
            </div>
        </div>
    );
};

export default ListofService;