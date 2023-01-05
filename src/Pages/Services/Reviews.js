import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContextProvider';
import ServiceReviews from './ServiceReviews';
const Reviews = ({ id, title }) => {
    const currentLocation = useLocation();
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState();
    const [reviews, setReviews] = useState();
    const [state, setState] = useState(false);

    useEffect(() => {
        if (review) {
            fetch('https://pretty-click.vercel.app/review', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Successfully Added your review!');
                        setState(!state);
                    }
                })
        }
    }, [review])

    useEffect(() => {
        fetch(`https://pretty-click.vercel.app/servicereviews?serviceid=${id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [state])

    const handleReview = (e) => {
        e.preventDefault();
        const reviewText = e.target.review.value;
        const reviewInformation = {
            serviceId: id,
            serivceTitle: title,
            name: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
            reviewText: reviewText
        }
        setReview(reviewInformation)
        e.target.reset();
    }

    return (
        <div>
            <h2 className='text-xl font-bold text-center mb-8'>List Of Reviews</h2>
            <div className='grid grid-cols-1 gap-4 px-4 my-4'>
                {
                    user ?
                        <>
                            <p className='font-semibold'>Add Your Review</p>
                            <form className='grid grid-cols-1 gap-1' onSubmit={handleReview}>
                                <textarea className="textarea textarea-primary" placeholder="review" name='review' required></textarea>
                                <button className='self-start btn btn-primary w-16'>Post</button>
                            </form>
                        </> :
                        <p className='text-center'>To add review, Please <Link to={'/login'} state={{ from: currentLocation }} replace className='text-purple-900 font-bold btn btn-warning'>Login</Link> </p>
                }
                {
                    !reviews ?
                        <div className='mx-auto'>
                            <RotatingLines
                                strokeColor="grey"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="60"
                                visible={true}
                            />
                        </div>
                        :
                        reviews.map((s_review, index) => <ServiceReviews key={index} s_review={s_review} ></ServiceReviews>)
                }
            </div>
        </div>
    );
};

export default Reviews;