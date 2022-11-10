import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Components/Titlehook/useTitle';
import Reviews from './Reviews';

const ServiceDetails = () => {
    const servicesDetails = useLoaderData();
    const { _id, photo, title, price, description } = servicesDetails;
    useTitle('ServiceDetails');
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={photo} className='w-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h3 className="font-bold text-2xl text-orange-500">${price}</h3>
                    <p>{description}</p>
                </div>
                <div className="divider"></div>
                <Reviews id={_id} title={title}></Reviews>
            </div>
        </div>
    );
};

export default ServiceDetails;