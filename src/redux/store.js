import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { authAPI } from './auth/authAPI/authAPI';
import { authSlice } from './auth/authAPI/authSlice';

import { contactsAPI } from './contacts/contactsApi/contactsAPI';
import { filterSlice } from './contacts/filter/filterSlice';
import { languageSlice } from './language/languageSlice';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'phonebook',
  storage: storage,
  whitelist: ['token', 'language'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authSlice.reducer),
    filter: filterSlice.reducer,
    language: persistReducer(persistConfig, languageSlice.reducer),
    [contactsAPI.reducerPath]: contactsAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsAPI.middleware,
    authAPI.middleware,
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
