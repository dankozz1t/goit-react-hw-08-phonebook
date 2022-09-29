import React from 'react';
import { useSelector } from 'react-redux';
import { useUserLogoutMutation } from 'redux/auth/authAPI/authAPI';
import { getUserName } from 'redux/auth/authAPI/authSlice';
import { useNavigate } from 'react-router-dom';

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
    <div style={{ display: 'flex', gap: '20px' }}>
      <p>Hello {name}!</p>
      <button type="button" onClick={handleLogoutClick}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
