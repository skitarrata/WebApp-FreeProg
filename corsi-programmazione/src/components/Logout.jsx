import React from 'react';
import { useAuth } from '../Authenticate/AuthContext';

const Logout = () => {
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
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