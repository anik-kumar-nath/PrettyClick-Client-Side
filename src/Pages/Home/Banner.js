import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from './../../Asset/Carousel/carousel (2).jpg'

const Banner = () => {
    return (
        <div className='w-full'>
            {/* <div className="relative flex flex-col-reverse py-8 lg:pt-0 lg:flex-col lg:pb-0">
                <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                    <svg
                        className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                        preserveAspectRatio="none slice"
                    >
                        <path d="M50 0H100L50 100H0L50 0Z" />
                    </svg>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                        src={bannerImage}
                        alt=""
                    />
                </div>
                <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Click Your
                            <br className="hidden md:block" />
                            Memorable{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                Moments
                            </span>
                        </h2>
                        <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                            A camera that puts a world of possibilities at your fingertips. Back it up. Get it back. Capture it all. Exceptional images deserve an exceptional presentation.
                        </p>
                        <div className="flex items-center">
                            <Link
                                to={'/services'}
                                className="btn btn-primary"
                            >
                                My Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}
            <section className='relative w-full'>
                <img src={bannerImage} className='absolute w-full h-full overflow-hidden object-cover object-center' alt="" />
                <div className="absolute inset-0 bg-white/60" />
                <div className="relative flex items-center justify-start px-8 py-40">
                    <div className="" data-aos="fade-left" data-aos-once="true" data-aos-duration="1500">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Click Your
                            <strong className="block font-extrabold text-primary">
                                Memorable Moments
                            </strong>
                        </h1>
                        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                            A camera that puts a world of possibilities at your fingertips. Back it up. Get it back. Capture it all. Exceptional images deserve an exceptional presentation.
                        </p>
                        <div className="flex flex-wrap gap-4 text-center">
                            <Link
                                to={'/services'}
                                className="btn btn-primary mt-4"
                            >
                                My Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;