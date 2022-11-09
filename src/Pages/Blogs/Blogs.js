import React from 'react';
import useTitle from '../../Components/Titlehook/useTitle';


const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>
            This is blog page
            {/* <PhotoProvider maskOpacity={0.9}>
                <PhotoView src="https://placeimg.com/400/225/arch" >
                    <div>
                        <img src="https://placeimg.com/400/225/arch" alt="" />
                    </div>
                </PhotoView>
            </PhotoProvider> */}
        </div>
    );
};

export default Blogs;