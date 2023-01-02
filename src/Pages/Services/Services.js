import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Components/Titlehook/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    const servicesData = useLoaderData();
    useTitle('Services')
    return (
        <div>
            <div className='my-8 p-4'>
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block text-primary"
                            >
                                <defs>
                                    <pattern
                                        id="903f4a9e-7ac3-441c-9613-04c15fcc0a14"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">My</span>
                        </span>{' '}
                        Services
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        It's not enough to just own a camera. Everyone owns a camera. To be a photographer, you must understand, appreciate, and harness the power you hold!
                    </p>
                </div>
                <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                    {
                        servicesData.map((service, index) => <ServiceCard key={index} service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;