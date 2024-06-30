import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get('auth-token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    Cookies.set('auth-token', token, { expires: 1 }); // Set cookie for 1 day
    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove('auth-token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
