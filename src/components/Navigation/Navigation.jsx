import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authAPI/authSlice';

const Navigation = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  return (
    <nav style={{ display: 'flex', gap: '20px' }}>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/phonebook">My Phonebook</NavLink>}
    </nav>
  );
};

export default Navigation;
