import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slices/todosSlice';
import toastsReducer from './slices/toastsSlice';

export const store = configureStore({
  reducer: { todos: todosReducer, toasts: toastsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
