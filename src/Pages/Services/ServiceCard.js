import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, photo, title, price, description } = service;
    return (
        <div>
            <div className="card card-compact w-full h-96 bg-base-100 shadow-xl">
                <figure>
                    <PhotoProvider maskOpacity={0.9}>
                        <PhotoView src={photo} >
                            <img src={photo} className='w-full h-64' alt="Shoes" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h3 className="font-bold text-2xl text-orange-500">${price}</h3>
                    {
                        description.length > 90 ?
                            <p>{description.slice(0, 100)}...</p>
                            :
                            <p>{description}</p>
                    }

                    <div className="card-actions justify-center">
                        <Link to={`/services/${_id}`} className="btn btn-primary">Vew Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;