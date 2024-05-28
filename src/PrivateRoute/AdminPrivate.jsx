import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';

const AdminPrivate = ({ children }) => {
    const { user, loding } = useAuth()
    const [isAdmin, isAdminLoding] = useAdmin()
    const location = useLocation()
    if (loding || isAdminLoding) {
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
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default AdminPrivate;