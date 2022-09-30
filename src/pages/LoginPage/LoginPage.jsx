import React, { useReducer } from 'react';
import { useUserLoginMutation } from 'redux/auth/authAPI/authAPI';
import { toast } from 'react-toastify';

import Loader from 'components/Loader';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Section from 'components/Section';
import { shallowEqual, useSelector } from 'react-redux';
import { getLanguage } from 'redux/language/selectors';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload };

    case 'password':
      return { ...state, password: action.payload };

    case 'reset':
      return { ...action.payload };

    default:
      return state;
  }
};

const initialValue = {
  email: '',
  password: '',
};

const LoginPage = () => {
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
    <main className="box">
      <Section title={lang.login_tittle}>
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
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title={lang.login_titleInputEmail}
                value={email}
                onChange={handleInputChange}
                required
              />
            </Col>
          </Row>
          <Row xs>
            <Col>
              <Form.Label htmlFor="password" className="formLabel">
                {lang.login_labelInputPassword}
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="password"
                placeholder={lang.login_placeholderInputPassword}
                type="password"
                name="password"
                pattern=".{7,16}"
                title={lang.login_titleInputPassword}
                value={password}
                onChange={handleInputChange}
                required
              />
            </Col>
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
      </Section>
    </main>
  );
};
export default LoginPage;
