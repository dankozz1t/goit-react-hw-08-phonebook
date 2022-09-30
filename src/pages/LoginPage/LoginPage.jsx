import React from 'react';

import { shallowEqual, useSelector } from 'react-redux';
import { getLanguage } from 'redux/language/selectors';

import Section from 'components/Section';
import Login from 'components/Login';

const LoginPage = () => {
  const lang = useSelector(getLanguage, shallowEqual);

  return (
    <main className="box">
      <Section title={lang.login_tittle}>
        <Login />
      </Section>
    </main>
  );
};

export default LoginPage;
