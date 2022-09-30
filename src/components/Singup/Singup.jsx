import React, { useReducer } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { getLanguage } from 'redux/language/selectors';

import { useUserSignupMutation } from 'redux/auth/authAPI/authAPI';
import { toast } from 'react-toastify';

import inputReducer from './inputReducer';
import Loader from 'components/Loader';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import PasswordInput from 'components/PasswordInput/PasswordInput';

const initialValue = {
  name: '',
  email: '',
  password: '',
};

const Singup = () => {
  const lang = useSelector(getLanguage, shallowEqual);
  const [{ name, email, password }, dispatchReducer] = useReducer(
    inputReducer,
    initialValue
  );
  const [register, { isLoading }] = useUserSignupMutation();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    dispatchReducer({ type: name, payload: value });
  };

  const handleFormSubmit = async e => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    try {
      await register({ name, email, password }).then(resp => {
        resp?.error?.data?.message && toast.info(`${resp.error.data.message}`);
        resp?.error?.data?.keyPattern?.email &&
          toast.info(`This email address already exists`);
      });

      dispatchReducer({ type: 'reset', payload: initialValue });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Row xs>
        <Col>
          <Form.Label htmlFor="name" className="formLabel">
            {lang.singup_labelInputName}
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="name"
            placeholder={lang.singup_placeholderInputName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title={lang.singup_titleInputName}
            value={name}
            onChange={handleInputChange}
            required
          />
        </Col>
      </Row>
      <Row xs>
        <Col>
          <Form.Label htmlFor="email" className="formLabel">
            {lang.singup_labelInputEmail}
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="email"
            placeholder={lang.singup_placeholderInputEmail}
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title={lang.singup_titleInputEmail}
            value={email}
            onChange={handleInputChange}
            required
          />
        </Col>
      </Row>
      <Row xs>
        <PasswordInput
          label={lang.singup_labelInputPassword}
          placeholder={lang.singup_placeholderInputPassword}
          title={lang.singup_titleInputPassword}
          onChange={handleInputChange}
          password={password}
        />
      </Row>
      <div className="d-grid gap-2">
        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? (
            <Loader width="45" height="10" color="#fff" />
          ) : (
            <span>{lang.btn_singup}</span>
          )}
        </Button>
      </div>
    </Form>
  );
};
export default Singup;
