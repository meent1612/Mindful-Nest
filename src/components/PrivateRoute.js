// components/PrivateRoute.js (New - Essential)
import { use } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate,useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return children;
};

export default PrivateRoute;


