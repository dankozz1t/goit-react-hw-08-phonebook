import React from 'react';
import AuthNav from 'components/AuthNav';

import { NavLink } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authAPI/authSlice';
import { getLanguage } from 'redux/language/selectors';

const Home = () => {
  const isLoggedIn = useSelector(getLoggedIn, shallowEqual);
  const lang = useSelector(getLanguage, shallowEqual);

  return (
    <>
      <p className="marginBottom">{lang.home_text}</p>
      {isLoggedIn ? (
        <NavLink className="btn btn-primary" to="/phonebook">
          {lang.btn_phonebook}
        </NavLink>
      ) : (
        <AuthNav />
      )}
    </>
  );
};

export default Home;
