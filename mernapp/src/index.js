import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; 
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import reportWebVitals from './reportWebVitals';
// import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allroute = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },

    {
      path:'/login',
      element:<Login/>
    },

      {
      path:'/createuser',
      element:<Signup/>
    },
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allroute}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
