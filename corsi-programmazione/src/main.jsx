import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Corsi from './pages/Corsi.jsx'
import Esercizi from './pages/Esercizi.jsx'
import Supporto from './pages/Supporto.jsx'
import SignIn from './pages/SignIn.jsx'
import LogIn from './pages/LogIn.jsx'
import HomePage from './pages/HomePage.jsx'
import Home from './pages/Home.jsx'
import './index.css'
import './Style.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/HomePage",
    element: <HomePage></HomePage>,
  },
  {
    path: "/Corsi",
    element: <Corsi></Corsi>,
  },
  {
    path: "/Esercizi",
    element: <Esercizi></Esercizi>,
  },
  {
    path: "/Supporto",
    element: <Supporto></Supporto>,
  },
  {
    path: "/SignIn",
    element: <SignIn></SignIn>,
  },
  {
    path: "/LogIn",
    element: <LogIn></LogIn>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);
