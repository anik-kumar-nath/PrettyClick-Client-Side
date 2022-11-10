import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../Components/Titlehook/useTitle';

const AddService = () => {
    useTitle('Add Service');

    const [service, setService] = useState()
    useEffect(() => {
        if (service) {
            fetch('https://assignment-11-phi.vercel.app/services', {
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
        <div>
            <h2 className='text-xl font-bold text-center my-4'>Add Service</h2>
            <form onSubmit={handleNewService}>
                <div className="hero my-8 mx-auto">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="name" placeholder="title" name='title' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL link" name='photoURL' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" placeholder="price" name='price' className="input input-bordered" required />
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