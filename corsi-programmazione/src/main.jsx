import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Corsi from './pages/Corsi.jsx'
import Esercizi from './pages/Esercizi.jsx'
import Supporto from './pages/Supporto.jsx'
import SignIn from './pages/SignIn.jsx'
import LogIn from './pages/LogIn.jsx'
import HomePage from './pages/HomePage.jsx'
import Home from './pages/Home.jsx'
import { AuthProvider, useAuth } from './Authenticate/AuthContext';
import './index.css'
import './Style.css'

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate  to="/LogIn" />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/LogIn" element={<LogIn />}/>
          <Route path="/SignIn" element={<SignIn />}/>
          <Route path="/HomePage" element={<ProtectedRoute element={<HomePage />} />} />
          <Route path="/Corsi" element={<ProtectedRoute element={<Corsi />} />} />
          <Route path="/Esercizi" element={<ProtectedRoute element={<Esercizi />} />} />
          <Route path="/Supporto" element={<ProtectedRoute element={<Supporto />} />} />
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
);
