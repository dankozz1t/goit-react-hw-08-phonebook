import React, { useReducer } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useUserLoginMutation } from 'redux/auth/authAPI/authAPI';

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
  const [{ email, password }, dispatchReducer] = useReducer(
    inputReducer,
    initialValue
  );

  // const navigate = useNavigate();
  const [login] = useUserLoginMutation();

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
      await login({ email, password });
      // navigate('/phonebook');
      dispatchReducer({ type: 'reset', payload: initialValue });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
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
      {/* </WrapLoginForm> */}
    </>
  );
};
export default LoginPage;
