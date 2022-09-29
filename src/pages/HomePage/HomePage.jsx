import React from 'react';
import { useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authAPI/authSlice';

import Section from 'components/Section';
import AuthNav from 'components/AuthNav';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const isLoggedIn = useSelector(getLoggedIn);

  const navigation = isLoggedIn ? (
    <NavLink className="btn btn-primary" to="/phonebook">
      My Phonebook
    </NavLink>
  ) : (
    <AuthNav />
  );

  return (
    <main className="box">
      <Section title="Welcome to your personal phonebook!">
        <p>
          text example text example text example text example text example text
          example text example text example text example text example text
          example text example text example text example text example text
          example text example text example text example text example text
          example text example text example text example text example
        </p>
        {navigation}
      </Section>
    </main>
  );
};
export default HomePage;
