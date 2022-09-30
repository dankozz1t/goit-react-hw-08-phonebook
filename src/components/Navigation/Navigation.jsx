import React from 'react';
import { NavLink } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authAPI/authSlice';

import s from './Navigation.module.css';
import { getLanguage } from 'redux/language/selectors';

const Navigation = () => {
  const lang = useSelector(getLanguage, shallowEqual);
  const isLoggedIn = useSelector(getLoggedIn);

  return (
    <nav className={s.nav}>
      <NavLink className="btn btn-primary" end to="/">
        {lang.btn_home}
      </NavLink>
      {isLoggedIn && (
        <NavLink className="btn btn-primary" to="/phonebook">
          {lang.btn_phonebook}
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
