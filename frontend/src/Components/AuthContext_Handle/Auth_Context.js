import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // New state to manage loading
  const [userRole, setUserRole] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    console.log("Token in useEffect:", token);
    if (token) {
      setIsAuthenticated(true);
      const decodedToken = jwtDecode(token);
      setUserRole(decodedToken.userRole);
      setUserId(decodedToken.userId);
      

    } else {
      setIsAuthenticated(false);
    }
    setLoading(false); // Set loading to false after the check
  }, []);

  const login = (token) => {
    console.log("Logging in with token:", token);
    localStorage.setItem('auth-token', token, { expires: 1 }); // Set cookie for 1 day
    setIsAuthenticated(true);
    const decodedToken = jwtDecode(token);
      setUserRole(decodedToken.userId);
      setUserId(decodedToken.userRole);
  };

  const logout = () => {
    console.log("Logging out");
    localStorage.remove('auth-token');
    setIsAuthenticated(false);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, login, logout, loading, userRole, userId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

