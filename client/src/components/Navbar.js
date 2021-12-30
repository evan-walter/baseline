import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='bglight'>
      <div>
        <NavLink to='/' className='text-5xl font-black'>b</NavLink>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </div>
    </nav>
  );
}
