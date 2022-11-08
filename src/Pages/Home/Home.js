import React from 'react';
import Carousel from './Carousel';
import ListofService from './ListofService';
import PricingGuide from './PricingGuide';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <ListofService></ListofService>
            <PricingGuide></PricingGuide>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;