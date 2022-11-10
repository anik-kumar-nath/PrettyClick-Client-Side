import React from 'react';

const ServiceReviews = ({ s_review }) => {
    const { name, photoURL, reviewText } = s_review;
    return (
        <div className='flex items-start shadow-xl '>
            <div className="avatar flex items-center w-45">
                <div className="w-14 rounded-full">
                    <img src={photoURL} />
                </div>
            </div>
            <div className='bg-slate-100 p-1 border border-gray-900 rounded-md'>
                <strong className='mx-2'>{name}</strong>
                <p className='mx-2'>{reviewText}</p>

            </div>
        </div>
    );
};

export default ServiceReviews;