import React from 'react';

import Section from 'components/Section';
import Singup from 'components/Singup';

import { shallowEqual, useSelector } from 'react-redux';
import { getLanguage } from 'redux/language/selectors';

const SingupPage = () => {
  const lang = useSelector(getLanguage, shallowEqual);

  return (
    <main className="box">
      <Section title={lang.singup_tittle}>
        <Singup />
      </Section>
    </main>
  );
};

export default SingupPage;
