import React, { useEffect, useState } from 'react';
import PricingItem from './PricingItem';

const PricingGuide = () => {
    const [items, setItems] = useState();
    useEffect(() => {
        fetch('Pricing.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='p-4'>
            <h2 className='text-4xl font-bold text-center mb-8'>PRICING GUIDE</h2>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                {
                    items && items.map((item, index) => <PricingItem key={index} item={item}></PricingItem>)
                }
            </div>
        </div>
    );
};

export default PricingGuide;