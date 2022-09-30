import { createSlice } from '@reduxjs/toolkit';
import languageList from '../../languages/languageList';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: 'english',
    languageList: Object.keys(languageList),
  },
  reducers: {
    setLanguage(state, { payload }) {
      state.language = payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
