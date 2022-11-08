import React, { useContext, useState } from 'react';
import logo from './../../Shared/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContextProvider';

const Header = () => {
    const { user, UserLogOutFB } = useContext(AuthContext);
    const handleLogOut = () => {
        return UserLogOutFB()
            .then(res => { })
            .catch(e => console.log(e));
    }
    const [visibility, setVisibility] = useState(false);
    const handleNavVisibility = () => {
        setVisibility(!visibility);
    }
    const listItems =
        <>
            <li><Link to={''}>Home</Link></li>
            <li><Link to={'/services'}>Services</Link></li>
            {
                user ?
                    <>
                        <li><Link to={''}>My Reviews</Link></li>
                        <li><Link to={''}>Add Services</Link></li>
                    </> : ""
            }
        </>;
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={handleNavVisibility}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className={`${visibility ? 'block' : 'hidden'} menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52`}>
                            {listItems}
                        </ul>
                    </div>
                    <Link to={''} className="flex items-center normal-case text-xl"><img src={logo} alt="" width={70} /> <strong>PrettyClick</strong></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {listItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <>
                                <div className="avatar">
                                    <div className="w-14 mr-1 rounded-full">
                                        <img src={user.photoURL} title={user.displayName} />
                                    </div>
                                </div>
                                <Link onClick={handleLogOut} className="btn">Log Out</Link>
                            </>
                            :
                            <Link to={'/login'} className="btn">Log In</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;