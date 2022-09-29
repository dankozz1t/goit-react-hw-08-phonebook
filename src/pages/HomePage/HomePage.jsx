import React from 'react';
import { useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authAPI/authSlice';

import Section from 'components/Section';
import AuthNav from 'components/AuthNav';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  return (
    <main className="box">
      <Section title="Welcome to home page!">
        <p>
          text example text example text example text example text example text
          example text example text example text example text example text
          example text example text example text example text example text
          example text example text example text example text example text
          example text example text example text example text example
        </p>
        {isLoggedIn ? (
          <NavLink to="/phonebook">My Phonebook</NavLink>
        ) : (
          <AuthNav />
        )}
      </Section>
    </main>
  );
};
export default HomePage;
