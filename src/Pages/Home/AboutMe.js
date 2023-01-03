import React from 'react';

const AboutMe = () => {
    return (
        <div className='p-2 lg:pt-14'>
            <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-10" data-aos="flip-left"
                data-aos-easing="ease-out-cubic" data-aos-once="true" data-aos-duration="1500">
                <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
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
                        <span className="relative">About Me</span>
                    </span>{' '}
                </h2>
            </div>
            <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
                <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl" data-aos="fade-down"
                    data-aos-duration="1500">
                    <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
                        <p className="mb-5 text-base text-gray-700 md:text-lg text-justify">
                            I am specialize in wedding photography, corporate, family and senior portraits, often traveling to your destination to capture the perfect moment in the perfect place. I also manage tours and travels and work as a guide for your trip.

                            For me photography is about people being real and then letting us paint a picture of that moment to remember it forever. This is the story that matters most: real people, real stories, real moments.
                        </p>
                        <div className="flex flex-col">
                            <div className="mb-2 text-sm text-gray-600 md:mb-2">Follow Me</div>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                    <button
                                        className="text-gray-600 transition-colors duration-300 hover:text-purple-500"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex items-center">
                                    <button
                                        className="text-gray-600 transition-colors duration-300 hover:text-purple-500"
                                    >
                                        <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                            <circle cx="15" cy="15" r="4" />
                                            <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex items-center">
                                    <button
                                        className="text-gray-600 transition-colors duration-300 hover:text-purple-500"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex items-center">
                                    <button
                                        className="text-gray-600 transition-colors duration-300 hover:text-purple-500"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                                            <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0" data-aos="fade-up"
                    data-aos-duration="1500">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                        src="https://i.ibb.co/NS1ZQTt/S-0004.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;