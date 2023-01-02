import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';

const ServiceReviews = ({ s_review }) => {
    const { name, photoURL, reviewText, date } = s_review;
    return (
        <div className='flex w-full'>
            <div className="flex items-center space-x-2 w-full">
                <div className="flex flex-shrink-0 self-start">
                    <img src={photoURL} alt="author" className="h-8 md:h-12 w-8 md:w-12 object-cover rounded-full" />
                </div>
                <div className="flex items-center justify-center space-x-2 w-full">
                    <div className="w-full">
                        <div className="bg-gray-100 w-full rounded-xl p-2">
                            <div className="font-medium">
                                <p className='text-xs md:text-base'>{name}</p>
                            </div>
                            <div className='text-xs md:text-base'>
                                {reviewText}
                            </div>
                        </div>
                        <div className="flex justify-start items-center text-xs w-full">
                            <div className="font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1">
                                <button className="hover:underline">
                                    <p className='text-xs md:text-base flex items-center'><AiFillLike className='text-gray-400 hover:text-blue-700' />Like </p>
                                </button>
                                {/* <small className="self-center">.</small> */}
                                {/* <a href="#" className="hover:underline">
                                    <small>Reply</small>
                                </a> */}
                                <p className="self-center">.</p>
                                <p className='text-xs md:text-base flex items-center'><BiTimeFive />&nbsp;{new Date(date).toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceReviews;