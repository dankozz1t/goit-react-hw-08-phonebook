import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: 'english',
  },
  reducers: {
    setLanguage(state, { payload }) {
      state.language = payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
