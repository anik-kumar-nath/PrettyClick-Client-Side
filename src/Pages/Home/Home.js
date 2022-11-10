import React from 'react';
import useTitle from '../../Components/Titlehook/useTitle';
import AboutMe from './AboutMe';
import Carousel from './Carousel';
import ListofService from './ListofService';
import PricingGuide from './PricingGuide';
import Testimonials from './Testimonials';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Carousel></Carousel>
            <ListofService></ListofService>
            <PricingGuide></PricingGuide>
            <hr />
            <AboutMe></AboutMe>
            <hr />
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;