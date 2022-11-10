import React from 'react';
import toast from 'react-hot-toast';

const ReviewCard = ({ my_review, handleDelete }) => {
    const { _id, serivceTitle, reviewText } = my_review;


    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-gray-500">{serivceTitle}</h2>
                    <small>{reviewText}</small>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-outline btn-warning" onClick={() => handleDelete(_id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;