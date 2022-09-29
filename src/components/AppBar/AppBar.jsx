import AuthNav from 'components/AuthNav';
// import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authAPI/authSlice';

const AppBar = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  // console.log(isLoggedIn);
  return (
    <header>
      {/* <Navigation /> */}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
