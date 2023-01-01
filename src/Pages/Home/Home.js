import React from 'react';
import useTitle from '../../Components/Titlehook/useTitle';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Carousel from './Carousel';
import ListofService from './ListofService';
import Testimonials from './Testimonials';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            {/* <Carousel></Carousel> */}
            <ListofService></ListofService>
            <hr />
            <AboutMe></AboutMe>
            <hr />
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;