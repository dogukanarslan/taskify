import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Todo } from '../model';
import { SingleTodo } from './SingleTodo';

interface TodosProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList = (props: TodosProps) => {
  const { todos, setTodos } = props;

  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
