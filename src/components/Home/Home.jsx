import React from 'react';
import AuthNav from 'components/AuthNav';
import ListExamples from './ListExamples';

import { NavLink } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authAPI/authSlice';
import { getLanguage } from 'redux/language/selectors';

import s from './Home.module.css';

const Home = () => {
  const isLoggedIn = useSelector(getLoggedIn, shallowEqual);
  const lang = useSelector(getLanguage, shallowEqual);

  return (
    <>
      <h2 className={s.text}>{lang.demo_title}</h2>

      <ListExamples />

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
