import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import ServiceReviews from '../../Services/ServiceReviews';

const MyReviews = () => {
    const { user, loading } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        !loading && fetch(`http://localhost:5000/userreviews?userEmail=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                console.log(reviews)
            })
    }, [loading])
    return (
        <div>
            <h2 className='text-xl font-bold text-center mb-8'>Own Reviews</h2>
            <div className='grid grid-cols-1 gap-4 px-4 my-4'>
                {
                    reviews !== [] ?
                        reviews.map((s_review, index) => <ServiceReviews key={index} s_review={s_review} ></ServiceReviews>)
                        :
                        <h1 className='text-gray-900 font-extrabold text-2xl'>No review were added</h1>
                }
            </div>
        </div>
    );
};

export default MyReviews;