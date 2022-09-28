import { createSlice } from '@reduxjs/toolkit';
import { authAPI } from './authAPI';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder.addMatcher(
      authAPI.endpoints.fetchCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      authAPI.endpoints.userSignup.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      authAPI.endpoints.userLogin.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      authAPI.endpoints.userLogout.matchFulfilled,
      (state, _) => {
        return (state = initialState);
      }
    );
  },
});

export const getUserName = state => state.auth.user.name;
export const getToken = state => state.auth.token;
export const getLoggedIn = state => state.auth.isLoggedIn;
