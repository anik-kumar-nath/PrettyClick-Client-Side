import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Components/Titlehook/useTitle';
import Blog from './Blog';


const Blogs = () => {
    useTitle('Blogs')
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div className='m-2'>
            <h2 className='text-4xl font-bold text-center m-8'>My Blogs</h2>
            <div>
                {
                    blogs.map((blog, index) => <Blog key={index} index={index + 1} blog={blog}></Blog>)
                }
            </div>
        </div>

    );
};

export default Blogs;