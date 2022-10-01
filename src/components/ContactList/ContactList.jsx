import React, { useMemo } from 'react';

import { useSelector, shallowEqual } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contacts/contactsApi/contactsAPI';
import { getFilter } from 'redux/contacts/filter/selectors';
import { getLanguage } from 'redux/language/selectors';
import { toast } from 'react-toastify';

import ContactItem from '../ContactItem/';

import Loader from 'components/Loader';

import ListGroup from 'react-bootstrap/ListGroup';

import s from './ContactList.module.css';

const ContactList = () => {
  const lang = useSelector(getLanguage, shallowEqual);

  const filter = useSelector(getFilter, shallowEqual);
  const { data: contacts, isLoading, isError } = useFetchContactsQuery();

  const filteredContacts = useMemo(() => {
    if (isLoading) {
      return;
    }

    if (contacts) {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    }
  }, [filter, contacts, isLoading]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    toast.info(`Error`);
    return (
      <h2 className="formLabel errorSize">{lang.main_fetchErrorMessage}</h2>
    );
  }

  if (filteredContacts.length === 0) {
    return <h2 className="formLabel errorSize">{lang.main_contactNotFound}</h2>;
  }

  const elements = filteredContacts.map(({ id, name, number }) => (
    <ContactItem key={id} id={id} name={name} number={number} />
  ));

  return (
    <ListGroup className={s.list} variant="flush">
      {elements}
    </ListGroup>
  );
};

export default ContactList;
