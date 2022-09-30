import React, { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import s from './PasswordInput.module.css';

const PasswordInput = ({ label, placeholder, title, onChange, password }) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const handleTogglePasswordClick = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Col>
      <Form.Label htmlFor="password" className="formLabel">
        {label}
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="password"
        placeholder={placeholder}
        type={passwordShown ? 'text' : 'password'}
        name="password"
        pattern=".{7,16}"
        title={title}
        value={password}
        onChange={onChange}
        required
      />
      <button
        className={s.btn}
        type="button"
        onClick={handleTogglePasswordClick}
      >
        {passwordShown ? (
          <AiFillEyeInvisible size="1.4em" title="Icon hide password" />
        ) : (
          <AiFillEye size="1.4em" title="Icon show password" />
        )}
      </button>
    </Col>
  );
};

export default PasswordInput;
