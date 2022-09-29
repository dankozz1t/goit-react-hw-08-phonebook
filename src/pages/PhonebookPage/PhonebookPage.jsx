import React from 'react';
import Section from '../../components/Section';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import { ConfettiContainer } from '../../components/Confetti/Confetti';

const PhonebookPage = () => {
  return (
    <main className="box">
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Filter />

      <ContactList />
      <ConfettiContainer />
    </main>
  );
};
export default PhonebookPage;
