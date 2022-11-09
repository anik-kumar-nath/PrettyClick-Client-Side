import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContextProvider';

const PrivateRoutes = ({ children }) => {
    const currentLocation = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return (<button className="btn loading">Loading...</button>);
    }

    if (!user) {
        return <Navigate to={'/login'} state={{ from: currentLocation }} replace></Navigate>
    }
    return children;
};

export default PrivateRoutes;