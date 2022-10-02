import React from 'react';

import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';

import { useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authAPI/authSlice';

import s from './AppBar.module.css';
import classNames from 'classnames';

const AppBar = () => {
  const isLoggedIn = useSelector(getLoggedIn);

  return (
    <header className={classNames(s.box, s.header)}>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
