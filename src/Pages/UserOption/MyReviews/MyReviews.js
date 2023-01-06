import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../Components/Titlehook/useTitle';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import ReviewCard from './ReviewCard';

const MyReviews = () => {
    useTitle('My Reviews');
    const [state, setState] = useState(false);
    const { user, loading } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [count, setCount] = useState(0);

    const handleUpdate = (id, comment) => {
        const updateUser = { comment };
        // console.log(comment, id)
        if (comment) fetch(`https://pretty-click.vercel.app/review/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        }
        )
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setState(!state);
                toast.success('Review Update Successfully');
            });
    }



    const handleDelete = (id) => {
        const DeleteId = id;
        {
            fetch(`https://pretty-click.vercel.app/review/${DeleteId}`, {
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
        !loading && fetch(`https://pretty-click.vercel.app/userreviews?userEmail=${user.email}`)
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
            {
                count ?
                    <div className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-2 px-2 my-4'>
                        {
                            reviews.map((my_review, index) => <ReviewCard key={index} my_review={my_review} handleDelete={handleDelete} handleUpdate={handleUpdate}></ReviewCard>)
                        }
                    </div>
                    :
                    <h1 className='text-yellow-900 font-bold text-center text-2xl'>No review were added</h1>
            }
        </div>
    );
};

export default MyReviews;