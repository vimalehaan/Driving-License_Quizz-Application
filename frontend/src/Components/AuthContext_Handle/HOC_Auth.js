import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      if (!isAuthenticated) {
        navigate('/login'); // Redirect to login page if not authenticated
      }
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? <Component {...props} /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuth;
