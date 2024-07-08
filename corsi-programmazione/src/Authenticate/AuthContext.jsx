import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const naviget = useNavigate();

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
    naviget('/HomePage');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    naviget('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);