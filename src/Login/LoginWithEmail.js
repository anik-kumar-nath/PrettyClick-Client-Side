import React, { useContext, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContextProvider';

const LoginWithEmail = () => {
    const [errorMessage, setErrormessage,] = useState('');
    const { UserLoginFB } = useContext(AuthContext);
    const handleSignin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        UserLoginFB(email, password)
            .then((result) => {
                e.target.reset();
                setErrormessage('');
            })
            .catch(e => setErrormessage(e.message.toLocaleUpperCase().slice(22, -2).split('-').join(' ')));
    }
    return (
        <form onSubmit={handleSignin}>
            <div className="card-body">
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
                    <button className="btn btn-primary">Login</button>
                </div>
            </div>
            {errorMessage}
        </form>
    );
};

export default LoginWithEmail;