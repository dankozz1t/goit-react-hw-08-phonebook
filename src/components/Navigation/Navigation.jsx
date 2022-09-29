import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authAPI/authSlice';

import s from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  return (
    <nav className={s.nav}>
      <NavLink className="btn btn-primary" end to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className="btn btn-primary" to="/phonebook">
          My Phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
