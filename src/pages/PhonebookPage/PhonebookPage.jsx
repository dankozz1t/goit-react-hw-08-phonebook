import React from 'react';
import Section from '../../components/Section';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import { ConfettiContainer } from '../../components/Confetti/Confetti';

import 'bootstrap/dist/css/bootstrap.min.css';
import s from '../../components/TaskPhonebook/TaskPhonebook.module.css';

const PhonebookPage = () => {
  return (
    <div className={s.box}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Filter />

      <ContactList />
      <ConfettiContainer />
    </div>
  );
};
export default PhonebookPage;
