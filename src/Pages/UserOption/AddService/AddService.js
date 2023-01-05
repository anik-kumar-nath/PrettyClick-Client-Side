import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../Components/Titlehook/useTitle';

const AddService = () => {
    useTitle('Add Service');

    const [service, setService] = useState()
    useEffect(() => {
        if (service) {
            fetch('https://pretty-click.vercel.app/services', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(service)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Successfully Added your review!');
                    }
                })
        }
    }, [service])

    const [image, setImage] = useState()
    const [showImage, setShowImage] = useState(false)
    const imageRef = useRef("");
    // console.log(imageRef.current.value)

    const handleNewService = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const photoURL = e.target.photoURL.value;
        const price = e.target.price.value;
        const Description = e.target.Description.value;
        const serviceInformation =
        {
            title: title,
            photo: photoURL,
            price: price,
            description: Description
        };
        setService(serviceInformation);
        e.target.reset();
    }

    return (
        <div className='p-14'>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block text-primary"
                        >
                            <defs>
                                <pattern
                                    id="903f4a9e-7ac3-441c-9613-04c15fcc0a14"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Add</span>
                    </span>{' '}
                    Service
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Check that all fields are correctly filled, as per your suggested service
                </p>
            </div>
            <form onSubmit={handleNewService}>
                <div className="hero my-8 mx-auto">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="name" placeholder="Service Title" name='title' className="input input-bordered" required />
                            </div>
                            {
                                showImage ?
                                    <div className='max-w-xs h-40 p-1 mx-auto'>
                                        <img src={image} className='h-40' alt="" onError={() => { setShowImage(false); imageRef.current.value = '' }} />
                                    </div>
                                    :
                                    image && <small className='text-red-500'>Your Image link not working,<br />Please give another link</small>
                            }
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" ref={imageRef} onBlur={(e) => { setImage(e.target.value); setShowImage(true) }} placeholder="Photo URL link" name='photoURL' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" min={0} placeholder="price" name='price' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea className="textarea textarea-success" name='Description' placeholder="Description" required></textarea>
                            </div>
                            <button className='btn btn-primary'>Create</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddService;