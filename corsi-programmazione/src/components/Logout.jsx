import React from 'react';
import { useAuth } from '../Authenticate/AuthContext';
import Cookies from 'js-cookie';

const Logout = () => {
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    const consent = Cookies.get('authToken');
    if (consent) {
      alert('Cookie rimosso!');
    }
    Cookies.remove('authToken');
    logout();
  };

  return (
    <button 
      className="butt-out" 
      disabled={ isAuthenticated === false } 
      style={{ visibility: !isAuthenticated ? "hidden" : "visible" }} 
      onClick={handleLogout} >LogOut
    </button>
  );
};

export default Logout;