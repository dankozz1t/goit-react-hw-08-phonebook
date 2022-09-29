import React from 'react';
import { useSelector } from 'react-redux';
import { useUserLogoutMutation } from 'redux/auth/authAPI/authAPI';
import { getUserName } from 'redux/auth/authAPI/authSlice';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import s from './UserMenu.module.css';

const UserMenu = () => {
  const name = useSelector(getUserName);
  const [logout] = useUserLogoutMutation();

  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.menu}>
      <p className={s.greeting}>
        Hello, <span className={s.name}>{name}</span>!
      </p>
      <Button variant="primary" type="button" onClick={handleLogoutClick}>
        Log out
      </Button>
    </div>
  );
};

export default UserMenu;
