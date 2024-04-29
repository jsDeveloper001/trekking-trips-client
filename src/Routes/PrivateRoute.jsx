import { Navigate, useLocation } from 'react-router-dom';
import { FirebaseAuth } from '../Services/AuthProvider';
import { useContext } from 'react';

const PrivateRoute = ({ children }) => {
    const { User, loading } = useContext(FirebaseAuth)
    const location = useLocation()
    
    if (User) {
        return children
    }
    if (loading) {
        return <div className='text-center'><span className="loading loading-dots loading-lg"></span></div>
    }
    return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default PrivateRoute;