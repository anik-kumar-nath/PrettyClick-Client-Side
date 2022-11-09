import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContextProvider';

const PrivateRoutes = ({ children }) => {
    const currentLocation = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return (<h1>Waiting........</h1>);
    }

    if (!user) {
        return <Navigate to={'/login'} state={{ from: currentLocation }} replace></Navigate>
    }
    return children;
};

export default PrivateRoutes;