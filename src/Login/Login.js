import React from 'react';
import LoginWithEmail from './LoginWithEmail';
const Login = () => {
    return (
        <div className="hero min-h-full m-auto">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <LoginWithEmail></LoginWithEmail>
                <div className="divider">OR</div>
                <div className="form-control my-2 mx-4">
                    <button className="btn btn-outline btn-primary">Login with Google </button>

                </div>
            </div>
        </div>
    );
};

export default Login;