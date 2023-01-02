import React, { useEffect, useState } from 'react';
import TestimonialItem from './TestimonialItem';

const Testimonials = () => {

    const [items, setItems] = useState();
    useEffect(() => {
        fetch('Testimonial.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className='p-4 lg:p-14'>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-10">
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
                        <span className="relative">Testimonials</span>
                    </span>{' '}
                </h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
                {
                    items && items.map((Testimonial, index) => <TestimonialItem key={index} Testimonial={Testimonial}></TestimonialItem>)
                }
            </div>
        </div>
    );
};

export default Testimonials;