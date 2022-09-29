import React, { useReducer } from 'react';
import { useUserSignupMutation } from 'redux/auth/authAPI/authAPI';
import { toast } from 'react-toastify';

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
  const [register] = useUserSignupMutation();

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
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </label>

        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </>
  );
};
export default RegisterPage;
