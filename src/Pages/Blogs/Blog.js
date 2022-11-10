import React from 'react';

const Blog = ({ blog, index }) => {
    const { Q, A } = blog;
    return (
        <div className='p-4 bg-orange-100 rounded-md shadow-xl m-4'>
            <h1 className='text-lg font-medium'><strong>Q.{index}: </strong> {Q}</h1>
            <p><strong>Answer: </strong> {A}</p>
        </div>
    );
};

export default Blog;