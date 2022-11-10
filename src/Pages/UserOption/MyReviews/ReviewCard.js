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
                        {/* <button className="btn btn-primary" onClick={() => console.log(_id)}>Edit</button> */}
                        <label htmlFor="my-modal" className="btn">Edit</label>
                        <button className="btn btn-outline btn-warning" onClick={() => handleDelete(_id)}>Delete</button>
                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
                                <form onSubmit={handleEdit}>
                                    <h3 className="font-bold text-lg">{serivceTitle}</h3>
                                    <textarea className="textarea textarea-primary w-full" name='comment' placeholder={reviewText} required></textarea>
                                    <input type="submit" className='btn btn-primary' value={'Update'} />
                                    <div className="modal-action">
                                        <label htmlFor="my-modal" className="btn">close</label>
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