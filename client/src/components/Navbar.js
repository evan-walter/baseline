import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const pathname = window.location.pathname;
  const path = (pathname === '') ? '/home' : pathname.substr();
  
  const [barsExpanded, setBarsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState(path);

  function handleBars() {
    setBarsExpanded(s => !s);
  }
  
  function handleActive(e, { name }) {
    setActiveItem(name);
    setBarsExpanded(false);
  }

  const navLink = 'py-2 px-4 hover:bg-gray-200 hover:rounded-3xl';
  const activeLink = ' lg:border-b-2 lg:border-black hover:border-gray-200';

  return (
    <nav className='block lg:flex lg:items-center lg:justify-between py-4 px-8 bg-bglight text-black'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <NavLink to='/' className='text-5xl font-black'>b</NavLink>
        </div>
        <div className='lg:hidden'>
          <button className='text-black' onClick={handleBars}>
            <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
              {barsExpanded ? <path d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'/> :
                <path d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'/>}
            </svg>
          </button>
        </div>
      </div>
      <div className={(barsExpanded ? 'flex flex-col' : 'hidden lg:flex') + ' text-center'}>
        <NavLink className={navLink + (activeItem === '/' ? activeLink : '')} to='/' onClick={handleActive}>Home</NavLink>
        <NavLink className={navLink + (activeItem === '/register' ? activeLink : '')} to='/register' onClick={handleActive}>Register</NavLink>
        <NavLink className={navLink + (activeItem === '/login' ? activeLink : '')} to='/login' onClick={handleActive}>Login</NavLink>
      </div>
    </nav>
  );
}
