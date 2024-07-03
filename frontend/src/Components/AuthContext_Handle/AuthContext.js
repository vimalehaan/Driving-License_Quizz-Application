import React, { createContext, useContext, useState, useEffect } from 'react';
// import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // New state to manage loading

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    console.log("Token in useEffect:", token);
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setLoading(false); // Set loading to false after the check
  }, []);

  const login = (token) => {
    console.log("Logging in with token:", token);
    localStorage.setItem('auth-token', token, { expires: 1 }); // Set cookie for 1 day
    setIsAuthenticated(true);
  };

  const logout = () => {
    console.log("Logging out");
    localStorage.remove('auth-token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated,setIsAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
