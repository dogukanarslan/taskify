import { createSlice } from '@reduxjs/toolkit';
import { IToast } from '../../model';

const initialState: IToast[] = [];

const toastsSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast: (state, action) => {
      state.push({
        id: Math.random(),
        header: action.payload.header,
        body: action.payload.body,
      });
    },
    deleteToast: (state, action) => {
      return state.filter((toast) => toast.id !== action.payload);
    },
  },
});

export const { addToast, deleteToast } = toastsSlice.actions;

export default toastsSlice.reducer;
