import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={s.menu}>
      <NavLink to="/register">Sign up</NavLink>

      <NavLink to="/login">Log in</NavLink>
    </div>
  );
};

export default AuthNav;
