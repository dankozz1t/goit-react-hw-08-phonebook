import React, { useReducer } from 'react';
import { useUserSignupMutation } from 'redux/auth/authAPI/authAPI';
import { toast } from 'react-toastify';

import Loader from 'components/Loader';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Section from 'components/Section';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };

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
  name: '',
  email: '',
  password: '',
};

const RegisterPage = () => {
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
    <main className="box">
      <Section title="Singup">
        <Form onSubmit={handleFormSubmit}>
          <Row xs>
            <Col>
              <Form.Label htmlFor="name" className="formLabel">
                Name
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="name"
                placeholder="Alex"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={name}
                onChange={handleInputChange}
                required
              />
            </Col>
          </Row>
          <Row xs>
            <Col>
              <Form.Label htmlFor="email" className="formLabel">
                Email
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="email"
                placeholder="alex@gmail.com"
                type="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title="Enter your email"
                value={email}
                onChange={handleInputChange}
                required
              />
            </Col>
          </Row>
          <Row xs>
            <Col>
              <Form.Label htmlFor="password" className="formLabel">
                Password
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="password"
                placeholder="hdsk23das"
                type="password"
                name="password"
                pattern=".{7,16}"
                title="Enter password minimum 7 length"
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
                <span>Login</span>
              )}
            </Button>
          </div>
        </Form>
      </Section>
    </main>
  );
};
export default RegisterPage;
