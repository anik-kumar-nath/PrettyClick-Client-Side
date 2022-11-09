import React from 'react';

const ServiceReviews = () => {
    return (
        <div className='flex items-start shadow-xl '>
            <div className="avatar flex items-center w-45">
                <div className="w-14 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                </div>
            </div>
            <div className='bg-slate-100 p-1 border border-gray-900 rounded-md'>
                <strong className='mx-2'>Anik kumar nath</strong>
                <p className='mx-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem placeat iusto error nesciunt, tempora officiis ex alias doloremque quia esse rem aspernatur similique cupiditate temporibus repellat veritatis. Molestiae, deleniti accusantium.</p>
            </div>
        </div>
    );
};

export default ServiceReviews;