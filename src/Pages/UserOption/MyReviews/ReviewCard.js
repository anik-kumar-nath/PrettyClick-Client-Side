import React from 'react';

const ReviewCard = ({ my_review, handleDelete, handleUpdate }) => {
    const { _id, serivceTitle, reviewText } = my_review;

    const handleEdit = (event) => {
        event.preventDefault();
        const comment = event.target.comment.value;
        handleUpdate(_id, comment);
        event.target.reset();
    }
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-gray-500">{serivceTitle}</h2>
                    <small>{reviewText}</small>
                    <div className="card-actions justify-end">
                        <label htmlFor={`my-modal-${_id}`} className="btn">Edit</label>
                        <button className="btn btn-outline btn-warning" onClick={() => handleDelete(_id)}>Delete</button>
                        <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
                                <form onSubmit={handleEdit}>
                                    <h3 className="font-bold text-lg">{serivceTitle}</h3>
                                    <textarea className="textarea textarea-primary w-full" name='comment' defaultValue={reviewText} required></textarea>
                                    <div className='flex gap-1 justify-end'>
                                        <input type="submit" className='btn btn-primary' value={'Update'} />
                                        <div className="modal-action m-0 p-0">
                                            <label htmlFor={`my-modal-${_id}`} className="btn">close</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;