import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import Switch from 'components/Switch';
import UserMenu from 'components/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authAPI/authSlice';

import s from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(getLoggedIn);

  const headerClass = `${s.box} ${s.header}`;

  return (
    <header className={headerClass}>
      <Navigation />
      <Switch />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
