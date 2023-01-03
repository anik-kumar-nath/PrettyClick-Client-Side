import React from 'react';
import useTitle from '../../Components/Titlehook/useTitle';
import AboutMe from './AboutMe';
import Banner from './Banner';
import GetInTouch from './GetInTouch';
// import Carousel from './Carousel';
import ListofService from './ListofService';
import MyTeam from './MyTeam';
// import Testimonials from './Testimonials';
import WhyChoose from './WhyChoose';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <hr />
            {/* <Carousel></Carousel> */}
            <ListofService></ListofService>
            <hr />
            <AboutMe></AboutMe>
            <hr />
            <MyTeam />
            <hr />
            {/* <Testimonials></Testimonials> */}
            <WhyChoose />
            <GetInTouch />
        </div>
    );
};

export default Home;