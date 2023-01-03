import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, photo, title, price, description } = service;
    return (
        <div data-aos="fade-up"
            data-aos-duration="1500">
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure>
                    <PhotoProvider maskOpacity={0.9}>
                        <PhotoView src={photo} >
                            <div className="relative overflow-hidden bg-no-repeat bg-cover w-full cursor-zoom-in " title='Full Screen'>
                                <img src={photo} className="w-full hover:scale-110 h-40 md:h-60 transition duration-300 ease-in-out" alt="Louvre" />
                            </div>
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body h-56">
                    <h1 className="text-xl font-semibold text-gray-800">{title}</h1>

                    <h1 className="text-lg font-bold text-orange-500 md:text-xl">${price}</h1>
                    {
                        description.length > 90 ?
                            <p className="py-2 text-gray-700 dark:text-gray-400">{description.slice(0, 100)}...</p>
                            :
                            <p>{description}</p>
                    }

                    <div className="card-actions justify-center w-full">
                        <Link to={`/services/${_id}`} className="btn btn-primary w-full">Vew Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;