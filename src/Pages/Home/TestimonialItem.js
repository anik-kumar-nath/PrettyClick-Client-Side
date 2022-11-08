import React from 'react';

const TestimonialItem = ({ Testimonial }) => {
    const { text, author } = Testimonial;
    return (
        <div className='p-2'>
            <p><i>"{text}"</i></p>
            <br />
            <strong>{author}</strong>
        </div>
    );
};

export default TestimonialItem;