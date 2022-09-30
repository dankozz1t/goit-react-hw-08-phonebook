import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getLanguage } from 'redux/language/selectors';

import s from './AuthNav.module.css';

const AuthNav = () => {
  const lang = useSelector(getLanguage, shallowEqual);

  return (
    <div className={s.menu}>
      <NavLink className="btn btn-primary" to="/register">
        {lang.btn_singup}
      </NavLink>

      <NavLink className="btn btn-primary" to="/login">
        {lang.btn_login}
      </NavLink>
    </div>
  );
};

export default AuthNav;
