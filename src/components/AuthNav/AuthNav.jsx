import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <NavLink to="/register">Sign up</NavLink>
      <br />
      <NavLink to="/login">Log in</NavLink>
    </>
  );
};

export default AuthNav;
