import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='flex items-center py-4 px-8 bg-bglight text-black'>
      <div className=''>
        <NavLink to='/' className='text-5xl font-black'>b</NavLink>
      </div>
      <div className=''>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </div>
    </nav>
  );
}
