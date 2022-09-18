import { useState } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { ITodo } from '../model';
import { RootState } from '../redux/store';
import { SingleTodo } from './SingleTodo';
import { Filters } from './Filters/Filters';

interface TodosProps {
  todos: ITodo[];
}

const mapStateToProps = (state: RootState) => {
  const { todos } = state;

  return { todos: todos.todos };
};

export const TodoList = connect(mapStateToProps)((props: TodosProps) => {
  const { todos } = props;

  const [title, setTitle] = useState('');

  let currentTodos = [...todos];

  if (!!title) {
    currentTodos = currentTodos.filter((todo) =>
      todo.todo.toLowerCase().includes(title.toLowerCase())
    );
  }

  return (
    <>
      {todos.length > 0 && <Filters title={title} setTitle={setTitle} />}
      <ListGroup>
        {currentTodos.map((todo) => (
          <ListGroupItem key={todo.id}>
            <SingleTodo todo={todo} todos={todos} />
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
});
