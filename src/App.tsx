import { useState } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { InputField } from './components/InputField';
import { ITodo } from './model';
import { TodoList } from './components/TodoList';
import { RootState } from './redux/store';
import { Dispatch } from '@reduxjs/toolkit';
import { addTodo } from './redux/slices/todosSlice';

interface AppProps {
  todos: { todos: ITodo[] };
  dispatch: Dispatch;
}

const App = (props: AppProps) => {
  const { dispatch, todos } = props;

  const [todo, setTodo] = useState('');

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todo) {
      dispatch(addTodo({ id: Date.now(), todo, isDone: false }));
      setTodo('');
    }
  };

  return (
    <div className="App">
      <Container>
        <h1 className="text-center">Taskify</h1>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos.todos} />
      </Container>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  const { todos } = state;

  return { todos };
};

export default connect(mapStateToProps)(App);
