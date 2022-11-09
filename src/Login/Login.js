import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../Components/Titlehook/useTitle';
import { AuthContext } from '../Contexts/AuthContextProvider';
import LoginWithEmail from './LoginWithEmail';
const Login = () => {
    useTitle('Log In')
    const { LoginWithPopup, setLocate } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const GoogleProvider = new GoogleAuthProvider();
    useEffect(() => {
        setLocate(from);
    }, [])
    const handleGoogleLogin = () => {
        LoginWithPopup(GoogleProvider)
            .then(result => {
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error));
    }
    return (
        <div className="hero min-h-full  my-8 mx-auto">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <LoginWithEmail></LoginWithEmail>
                <p className='mx-8'>No Account yet? <Link to={'/signup'} className='text-blue-900 font-bold'>Sign Up</Link ></p>
                <div className="divider">OR</div>
                <div className="form-control my-2 mx-8">
                    <button className="btn btn-outline btn-primary" onClick={handleGoogleLogin}>Login with Google </button>
                </div>
            </div>
        </div>
    );
};

export default Login;