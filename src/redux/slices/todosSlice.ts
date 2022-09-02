import { createSlice } from '@reduxjs/toolkit';
import { ITodo } from '../../model';

const initialState: {
  todos: ITodo[];
} = { todos: [] };

const todosSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.text }
          : todo
      );
    },
    toggleDone: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleDone } = todosSlice.actions;

export default todosSlice.reducer;
