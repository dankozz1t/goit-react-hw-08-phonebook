import React from 'react';

import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

import { shallowEqual, useSelector } from 'react-redux';
import { getLanguage } from 'redux/language/selectors';
import { ConfettiContainer } from 'components/Confetti/Confetti';

const PhonebookPage = () => {
  const lang = useSelector(getLanguage, shallowEqual);

  return (
    <main className="box">
      <Section title={lang.main_phonebook}>
        <ContactForm />
      </Section>

      <Filter />

      <ContactList />
      <ConfettiContainer />
    </main>
  );
};
export default PhonebookPage;
