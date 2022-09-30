import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authAPI/authSlice';

import Section from 'components/Section';
import AuthNav from 'components/AuthNav';
import { NavLink } from 'react-router-dom';
import { getLanguage } from 'redux/language/selectors';

const HomePage = () => {
  const isLoggedIn = useSelector(getLoggedIn, shallowEqual);
  const lang = useSelector(getLanguage, shallowEqual);

  const navigation = isLoggedIn ? (
    <NavLink className="btn btn-primary" to="/phonebook">
      {lang.btn_phonebook}
    </NavLink>
  ) : (
    <AuthNav />
  );

  return (
    <main className="box">
      <Section title={lang.home_greeting}>
        <p>{lang.home_text}</p>
        {navigation}
      </Section>
    </main>
  );
};
export default HomePage;
