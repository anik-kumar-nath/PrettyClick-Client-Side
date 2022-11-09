import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useTitle from '../Components/Titlehook/useTitle';
import { AuthContext } from '../Contexts/AuthContextProvider';

const SignupWithEmail = () => {
    useTitle('Sign Up')
    const { createUser, locate, profileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignup = (e) => {
        e.preventDefault();
        const name = e.target.name.value || 'Anonymous';
        const imageURL = e.target.photoURL.value || 'https://www.freeiconspng.com/uploads/no-image-icon-0.png';
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password)
            .then(result => {
                profileUpdate(name, imageURL);
                e.target.reset();
                navigate(locate, { replace: true })
            })
            .catch(error => console.error(error));
    }
    return (
        <form onSubmit={handleSignup}>
            <div className="hero my-8 mx-auto">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL link" name='photoURL' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SignupWithEmail;