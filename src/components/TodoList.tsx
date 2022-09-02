import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { ITodo } from '../model';
import { SingleTodo } from './SingleTodo';

interface TodosProps {
  todos: ITodo[];
}

export const TodoList = (props: TodosProps) => {
  const { todos } = props;

  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          <SingleTodo todo={todo} todos={todos} />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
