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
        <div className='p-4'>
            <h2 className='text-4xl font-bold text-center mb-8'>Testimonials</h2>
            <hr />
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
                {
                    items && items.map((Testimonial, index) => <TestimonialItem key={index} Testimonial={Testimonial}></TestimonialItem>)
                }
            </div>
        </div>
    );
};

export default Testimonials;