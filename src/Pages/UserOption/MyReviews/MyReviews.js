import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import ReviewCard from './ReviewCard';

const MyReviews = () => {
    const [state, setState] = useState(false);
    const { user, loading } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [count, setCount] = useState(0);
    const handleDelete = (id) => {
        const DeleteId = id;
        {
            fetch(`http://localhost:5000/review/${DeleteId}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setState(!state);
                        toast.success('Review Delete Successfully');
                    }
                })
        }
    }

    useEffect(() => {
        !loading && fetch(`http://localhost:5000/userreviews?userEmail=${user.email}`)
            .then(res => res.json())
            .then(data => {
                const { users, count } = data;
                setReviews(users);
                setCount(count);
            })
    }, [loading, state])
    return (
        <div>
            <h2 className='text-xl font-bold text-center my-4'>Own Reviews</h2>
            <div className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-2 px-2 my-4'>
                {
                    count ?
                        reviews.map((my_review, index) => <ReviewCard key={index} my_review={my_review} handleDelete={handleDelete}></ReviewCard>)
                        :
                        <h1 className='text-yellow-900 font-bold text-2xl'>No review were added</h1>
                }
            </div>
        </div>
    );
};

export default MyReviews;