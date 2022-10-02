import React, { useReducer } from 'react';
import { useUserLoginMutation } from 'redux/auth/authAPI/authAPI';
import { toast } from 'react-toastify';

import { shallowEqual, useSelector } from 'react-redux';
import { getLanguage } from 'redux/language/selectors';

import Loader from 'components/Loader';
import PasswordInput from 'components/PasswordInput/PasswordInput';
import inputReducer from './inputReducer';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const initialValue = {
  email: '',
  password: '',
};

const Login = () => {
  const lang = useSelector(getLanguage, shallowEqual);
  const [{ email, password }, dispatchReducer] = useReducer(
    inputReducer,
    initialValue
  );

  const [login, { isLoading }] = useUserLoginMutation();

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
      await login({ email, password }).then(resp => {
        resp?.error && toast.info(`Error! Wrong email or password`);
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
          <Form.Label htmlFor="email" className="formLabel">
            {lang.login_labelInputEmail}
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="email"
            placeholder={lang.login_placeholderInputEmail}
            type="email"
            name="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
            title={lang.login_titleInputEmail}
            value={email}
            onChange={handleInputChange}
            required
          />
        </Col>
      </Row>
      <Row xs>
        <PasswordInput
          label={lang.login_labelInputPassword}
          placeholder={lang.login_placeholderInputPassword}
          title={lang.login_titleInputPassword}
          onChange={handleInputChange}
          password={password}
        />
      </Row>
      <div className="d-grid gap-2">
        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? (
            <Loader width="45" height="10" color="#fff" />
          ) : (
            <span>{lang.btn_login}</span>
          )}
        </Button>
      </div>
    </Form>
  );
};

export default Login;
