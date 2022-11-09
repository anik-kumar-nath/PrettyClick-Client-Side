import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Components/Titlehook/useTitle';
import { AuthContext } from '../../Contexts/AuthContextProvider';
import ServiceReviews from './ServiceReviews';

const ServiceDetails = () => {
    useTitle('ServiceDetails');
    const { user } = useContext(AuthContext);
    const handleReview = (e) => {
        e.preventDefault();
        const review = e.target.review.value;
        console.log(review)
        e.target.reset();

    }

    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quisquam dolores sint quis at? Soluta, expedita. Rerum sunt eos obcaecati velit voluptate pariatur consequuntur, illo, id praesentium ratione nemo a. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias provident fuga praesentium nesciunt tempora inventore voluptas perferendis temporibus eligendi fugiat beatae omnis hic, similique, deleniti repellendus modi impedit placeat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quisquam dolores sint quis at? Soluta, expedita. Rerum sunt eos obcaecati velit voluptate pariatur consequuntur, illo, id praesentium ratione nemo a. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias provident fuga praesentium nesciunt tempora inventore voluptas perferendis temporibus eligendi fugiat beatae omnis hic, similique, deleniti repellendus modi impedit placeat autem.';


    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" className='w-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">This is Product information</h2>
                    <h3 className="font-bold text-2xl text-orange-500">$500</h3>
                    <p>{text}</p>
                </div>
                <div className="divider"></div>
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
                            <p>Please <Link className='text-purple-700 font-bold' to={'/login'}>Login</Link> to add review</p>
                    }
                    <ServiceReviews></ServiceReviews>
                    <ServiceReviews></ServiceReviews>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;