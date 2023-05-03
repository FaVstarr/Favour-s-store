import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProtectedRoute from './Pages/ProtectedRoute';
import Layout from './Pages/Layout';
import Register from "./Pages/Register";
import Login from './Pages/Login';
import LandingPage from './Pages/LandingPage';
import ContactPage from './Pages/ContactPage';
import NoPage from './Pages/NoPage'
import './index.css';

import reportWebVitals from './reportWebVitals';

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/layout' element={<ProtectedRoute component={Layout}/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/landing-page' element={<LandingPage/>}/>
      <Route path='/contact' element={<ContactPage/>} />
      {/* <Route path='*' element={<NoPage/>} /> */}
    </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Layout  /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
