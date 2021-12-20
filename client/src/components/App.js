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
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}
