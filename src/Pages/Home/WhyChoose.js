import React from 'react';
import photographer from './../../Asset/Carousel/wedding-photographer.jpg'
const WhyChoose = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic" data-aos-once="true" data-aos-duration="1500">
                    <div>
                        <p className="inline-block px-3 py-px mb-4  font-semibold text-teal-900 rounded-full bg-orange-200">
                            Why Choose Me
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative"></span>
                        </span>{' '}
                        Adding the memories of every moment
                    </h2>
                </div>
                <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
                    <div className="grid grid-cols-1 gap-5" data-aos="fade-up"
                        data-aos-duration="1500">
                        <img
                            className="object-cover w-full h-full rounded shadow-lg"
                            src={photographer}
                            alt="photographer"
                        />
                    </div>
                    <div className="flex flex-col justify-center" data-aos="fade-down"
                        data-aos-duration="1500">
                        <div className="pb-4 mb-4 border-b shadow-lg rounded-md p-4">
                            <h6 className="mb-2 font-semibold leading-5 ">
                                Professional
                            </h6>
                            <p className="text-sm text-gray-900">
                                We are vastly professionally mannered and we have a bunch of professionally skilled team
                            </p>
                        </div>
                        <div className="pb-4 mb-4 border-b shadow-lg rounded-md p-4">
                            <h6 className="mb-2 font-semibold leading-5">
                                Experienced Photographer
                            </h6>
                            <p className="text-sm text-gray-900">
                                A young enthusiastic team with a bunch of talents and experience. They are able to work 24/7 for the seek a perfect project done on time.
                            </p>
                        </div>
                        <div className='shadow-lg rounded-md p-4'>
                            <h6 className="mb-2 font-semibold leading-5 ">
                                Support 24/7
                            </h6>
                            <p className="text-sm text-gray-900">
                                We have technical support team. They are ready to serve you 24/7.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;