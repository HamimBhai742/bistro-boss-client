import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loding } = useAuth()
    const location = useLocation()
    if (loding) {
        return <div className='min-h-screen flex justify-center items-center'>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;