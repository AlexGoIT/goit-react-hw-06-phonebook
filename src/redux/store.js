import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './phonebookSlice';

export const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
  },
});
