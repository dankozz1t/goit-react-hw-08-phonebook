import React, { useEffect, useReducer } from 'react';

import { toast } from 'react-toastify';
import { login } from '../Confetti/utils';

import { shallowEqual, useSelector } from 'react-redux';
import { getLanguage } from 'redux/language/selectors';

import Loader from 'components/Loader';

import inputReducer from './inputReducer';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import {
  useAddContactMutation,
  useFetchContactsQuery,
} from '../../redux/contacts/contactsApi/contactsAPI';

import s from './ContactForm.module.css';

const initialValue = {
  number: '',
  name: '',
};

const ContactForm = () => {
  const lang = useSelector(getLanguage, shallowEqual);

  const [{ name, number }, dispatchReducer] = useReducer(
    inputReducer,
    initialValue
  );

  const { data: contacts } = useFetchContactsQuery();
  const [addContact, { isLoading: isDeleting, isError }] =
    useAddContactMutation();

  useEffect(() => {
    login.submit();
  }, [contacts]);

  const handleFormSubmit = e => {
    e.preventDefault();
    if (isUniqueName(name)) {
      addContact({ name, number });
      toast.info(`"${name}" ${lang.main_addContactMessage}`);
    }
    dispatchReducer({ type: 'reset', payload: initialValue });
  };

  const isUniqueName = newName => {
    const searchUnique = newName.toLowerCase();
    if (contacts.find(({ name }) => name.toLowerCase() === searchUnique)) {
      toast.info(`"${newName}" ${lang.main_uniqueContactNameMessage}`);
      return false;
    }
    return true;
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    dispatchReducer({ type: name, payload: value });
  };

  if (isError) {
    toast.info(lang.main_fetchErrorMessage);
  }

  const classNameRow = `align-items-center ${s.row}`;

  return (
    <Form onSubmit={handleFormSubmit}>
      <Row className={classNameRow}>
        <Col xs>
          <Form.Label htmlFor="name" className="formLabel">
            {lang.main_labelInputName}
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="name"
            placeholder={lang.main_placeholderInputName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title={lang.main_titleInputName}
            value={name}
            onChange={handleInputChange}
            required
          />
        </Col>
        <Col xs>
          <Form.Label htmlFor="number" className="formLabel">
            {lang.main_labelInputPhone}
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="number"
            placeholder={lang.main_placeholderInputPhone}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title={lang.main_titleInputPhone}
            value={number}
            onChange={handleInputChange}
            required
          />
        </Col>
      </Row>
      <div className="d-grid gap-2 marginBottom">
        <Button variant="primary" type="submit" disabled={isDeleting}>
          {isDeleting ? (
            <Loader width="45" height="10" color="#fff" />
          ) : (
            <span>{lang.main_btnAddContact}</span>
          )}
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
