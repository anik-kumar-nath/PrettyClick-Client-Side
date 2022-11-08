import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContextProvider';
import LoginWithEmail from './LoginWithEmail';
const Login = () => {
    const { LoginWithPopup } = useContext(AuthContext);
    const GoogleProvider = new GoogleAuthProvider();
    return (
        <div className="hero min-h-full  my-8 mx-auto">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <LoginWithEmail></LoginWithEmail>
                <p className='mx-8'>No Account yet? <Link to={'/signup'} className='text-blue-900 font-bold'>Sign Up</Link ></p>
                <div className="divider">OR</div>
                <div className="form-control my-2 mx-8">
                    <button className="btn btn-outline btn-primary" onClick={() => LoginWithPopup(GoogleProvider)}>Login with Google </button>

                </div>
            </div>
        </div>
    );
};

export default Login;