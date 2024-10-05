import { jwtDecode } from 'jwt-decode';

function AuthDecode() {
  const token = localStorage.getItem('token');
  
  if (token) {
    try {
      const decoded = jwtDecode(token);
      return decoded.data;
    } catch (error) {
      console.error('Token non valido:', error);
      return null;
    }
  }
  return null;
};

export default AuthDecode;