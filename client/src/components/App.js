import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../index.css';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Navbar from './Navbar';

export default function App() {
  return (
    <Router>
        <Navbar />
        <div className='bg-bgprimary text-textlight'>
          <div className='py-4 px-8'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </div>
        </div>
    </Router>
  );
}
